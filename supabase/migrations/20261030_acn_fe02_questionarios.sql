-- ACN-FE-02 | Evolução aditiva: questionários com múltiplas perguntas.
-- Não altera nem remove enquetes, opções, votos, auditoria ou comprovantes legados.
create table if not exists public.enquete_perguntas (
  id uuid primary key default gen_random_uuid(),
  enquete_id uuid not null references public.enquetes(id) on delete cascade,
  titulo text not null check (length(trim(titulo)) between 1 and 500),
  descricao text,
  tipo text not null check (tipo in ('single_choice','multiple_choice','short_text')),
  obrigatoria boolean not null default true,
  ordem integer not null default 0,
  ativa boolean not null default true,
  created_at timestamptz not null default now(),
  unique(enquete_id, ordem),
  unique(id, enquete_id)
);
create table if not exists public.enquete_pergunta_opcoes (
  id uuid primary key default gen_random_uuid(),
  pergunta_id uuid not null references public.enquete_perguntas(id) on delete cascade,
  texto text not null check(length(trim(texto)) between 1 and 300),
  ordem integer not null default 0,
  ativa boolean not null default true,
  unique(pergunta_id, ordem),
  unique(id, pergunta_id)
);
create table if not exists public.enquete_respostas (
  id uuid primary key default gen_random_uuid(),
  enquete_id uuid not null references public.enquetes(id),
  browser_token_hash text not null,
  receipt_hash text not null unique,
  created_at timestamptz not null default now(),
  unique(enquete_id, browser_token_hash),
  unique(id, enquete_id)
);
create table if not exists public.enquete_resposta_itens (
  id uuid primary key default gen_random_uuid(),
  resposta_id uuid not null,
  enquete_id uuid not null,
  pergunta_id uuid not null,
  opcao_id uuid,
  resposta_texto text,
  created_at timestamptz not null default now(),
  constraint enquete_resposta_itens_resposta_fk foreign key(resposta_id, enquete_id)
    references public.enquete_respostas(id, enquete_id) on delete cascade,
  constraint enquete_resposta_itens_pergunta_fk foreign key(pergunta_id, enquete_id)
    references public.enquete_perguntas(id, enquete_id),
  constraint enquete_resposta_itens_opcao_fk foreign key(opcao_id, pergunta_id)
    references public.enquete_pergunta_opcoes(id, pergunta_id),
  check ((opcao_id is not null and resposta_texto is null) or (opcao_id is null and resposta_texto is not null))
);
create table if not exists public.enquete_questionario_auditoria (
  id bigint generated always as identity primary key,
  enquete_id uuid not null references public.enquetes(id),
  resposta_id uuid not null references public.enquete_respostas(id),
  ocorrido_em timestamptz not null default clock_timestamp(),
  evento text not null,
  receipt_hash text not null
);
create index if not exists ix_enquete_perguntas_enquete_ordem on public.enquete_perguntas(enquete_id, ordem) where ativa;
create index if not exists ix_enquete_pergunta_opcoes_pergunta_ordem on public.enquete_pergunta_opcoes(pergunta_id, ordem) where ativa;
create index if not exists ix_enquete_resposta_itens_pergunta on public.enquete_resposta_itens(pergunta_id, opcao_id);

-- As enquetes legadas permanecem exclusivamente no fluxo antigo.
-- Não copiamos votos antigos para o novo modelo para evitar duplicidade entre os dois mecanismos.

alter table public.enquete_perguntas enable row level security;
alter table public.enquete_pergunta_opcoes enable row level security;
alter table public.enquete_respostas enable row level security;
alter table public.enquete_resposta_itens enable row level security;
alter table public.enquete_questionario_auditoria enable row level security;
-- Leitura pública apenas de perguntas/opções ativas de enquetes publicadas e dentro da janela.
drop policy if exists acn_public_read_perguntas on public.enquete_perguntas;
create policy acn_public_read_perguntas on public.enquete_perguntas for select to anon, authenticated
using (ativa and exists (select 1 from public.enquetes e where e.id=enquete_id and e.status='publicada' and (e.inicio_em is null or e.inicio_em<=now()) and (e.encerramento_em is null or e.encerramento_em>now())));
drop policy if exists acn_public_read_pergunta_opcoes on public.enquete_pergunta_opcoes;
create policy acn_public_read_pergunta_opcoes on public.enquete_pergunta_opcoes for select to anon, authenticated
using (ativa and exists (select 1 from public.enquete_perguntas p join public.enquetes e on e.id=p.enquete_id where p.id=pergunta_id and p.ativa and e.status='publicada' and (e.inicio_em is null or e.inicio_em<=now()) and (e.encerramento_em is null or e.encerramento_em>now())));
revoke all on public.enquete_respostas, public.enquete_resposta_itens, public.enquete_questionario_auditoria from anon, authenticated;
revoke insert, update, delete on public.enquete_perguntas, public.enquete_pergunta_opcoes from anon, authenticated;

drop function if exists public.obter_questionarios_ativos();
create function public.obter_questionarios_ativos()
returns table(enquete_id uuid,titulo text,descricao text,slug text,pergunta_id uuid,pergunta_titulo text,pergunta_descricao text,pergunta_tipo text,obrigatoria boolean,pergunta_ordem integer,opcao_id uuid,opcao_texto text,opcao_ordem integer)
language sql stable security definer set search_path=pg_catalog,public
as $$
 select e.id,e.titulo,e.descricao,e.slug,p.id,p.titulo,p.descricao,p.tipo,p.obrigatoria,p.ordem,o.id,o.texto,o.ordem
 from public.enquetes e join public.enquete_perguntas p on p.enquete_id=e.id and p.ativa
 left join public.enquete_pergunta_opcoes o on o.pergunta_id=p.id and o.ativa
 where e.status='publicada' and (e.inicio_em is null or e.inicio_em<=now()) and (e.encerramento_em is null or e.encerramento_em>now())
 order by e.created_at desc,p.ordem,o.ordem;
$$;
revoke all on function public.obter_questionarios_ativos() from public;
grant execute on function public.obter_questionarios_ativos() to anon,authenticated;

create or replace function public.registrar_respostas_questionario(p_enquete_id uuid,p_browser_token text,p_respostas jsonb)
returns jsonb language plpgsql security definer set search_path=pg_catalog,public,extensions
as $$
declare v_hash text; v_receipt text; v_receipt_hash text; v_response_id uuid; q record; item jsonb; option_value uuid; text_value text; arr jsonb;
begin
 if p_enquete_id is null or p_browser_token is null or length(p_browser_token)<32 or length(p_browser_token)>200 or jsonb_typeof(p_respostas)<>'array' then
  raise exception using errcode='22023',message='Dados do questionário inválidos.';
 end if;
 perform pg_advisory_xact_lock(hashtextextended(p_enquete_id::text,0));
 if not exists(select 1 from public.enquetes e where e.id=p_enquete_id and e.status='publicada' and (e.inicio_em is null or e.inicio_em<=now()) and (e.encerramento_em is null or e.encerramento_em>now())) then
  raise exception using errcode='22023',message='Este questionário não está aberto.';
 end if;
 v_hash:=encode(extensions.digest(convert_to(p_browser_token,'UTF8'),'sha256'),'hex');
 if exists(select 1 from public.enquete_respostas r where r.enquete_id=p_enquete_id and r.browser_token_hash=v_hash) then
  raise exception using errcode='23505',message='Este navegador já respondeu a este questionário.';
 end if;
 for q in select id,tipo,obrigatoria from public.enquete_perguntas where enquete_id=p_enquete_id and ativa loop
  item:= (select t.value from jsonb_array_elements(p_respostas) as t(value) where t.value->>'pergunta_id'=q.id::text limit 1);
  if q.obrigatoria and item is null then raise exception using errcode='22023',message='Responda todas as perguntas obrigatórias.'; end if;
  if item is null then continue; end if;
  if q.tipo='short_text' then
   text_value:=nullif(trim(item->>'texto'),'');
   if q.obrigatoria and text_value is null then raise exception using errcode='22023',message='Uma resposta obrigatória está vazia.'; end if;
   if text_value is not null and length(text_value)>2000 then raise exception using errcode='22023',message='Uma resposta ultrapassou o limite de caracteres.'; end if;
  elsif q.tipo='single_choice' then
   if nullif(item->>'opcao_id','') is null or not exists(select 1 from public.enquete_pergunta_opcoes o where o.id=(item->>'opcao_id')::uuid and o.pergunta_id=q.id and o.ativa) then raise exception using errcode='22023',message='Seleção inválida.'; end if;
  elsif q.tipo='multiple_choice' then
   arr:=item->'opcoes'; if jsonb_typeof(arr)<>'array' or (q.obrigatoria and jsonb_array_length(arr)=0) then raise exception using errcode='22023',message='Selecione ao menos uma opção.'; end if;
   if exists(select 1 from jsonb_array_elements_text(arr) a where not exists(select 1 from public.enquete_pergunta_opcoes o where o.id=a.value::uuid and o.pergunta_id=q.id and o.ativa)) then raise exception using errcode='22023',message='Uma das opções selecionadas é inválida.'; end if;
  end if;
 end loop;
 v_receipt:=encode(extensions.gen_random_bytes(32),'hex');
 v_receipt_hash:=encode(extensions.digest(convert_to(v_receipt,'UTF8'),'sha256'),'hex');
 insert into public.enquete_respostas(enquete_id,browser_token_hash,receipt_hash) values(p_enquete_id,v_hash,v_receipt_hash) returning id into v_response_id;
 for q in select id,tipo from public.enquete_perguntas where enquete_id=p_enquete_id and ativa loop
  item:=(select t.value from jsonb_array_elements(p_respostas) as t(value) where t.value->>'pergunta_id'=q.id::text limit 1);
  if item is null then continue; end if;
  if q.tipo='short_text' then text_value:=nullif(trim(item->>'texto'),''); if text_value is not null then insert into public.enquete_resposta_itens(resposta_id,enquete_id,pergunta_id,resposta_texto) values(v_response_id,p_enquete_id,q.id,text_value); end if;
  elsif q.tipo='single_choice' then insert into public.enquete_resposta_itens(resposta_id,enquete_id,pergunta_id,opcao_id) values(v_response_id,p_enquete_id,q.id,(item->>'opcao_id')::uuid);
  else for option_value in select value::uuid from jsonb_array_elements_text(item->'opcoes') loop insert into public.enquete_resposta_itens(resposta_id,enquete_id,pergunta_id,opcao_id) values(v_response_id,p_enquete_id,q.id,option_value); end loop;
  end if;
 end loop;
 insert into public.enquete_questionario_auditoria(enquete_id,resposta_id,evento,receipt_hash) values(p_enquete_id,v_response_id,'resposta_registrada',v_receipt_hash);
 return jsonb_build_object('registrado',true,'comprovante',v_receipt,'mensagem','Resposta registrada. O comprovante não revela suas respostas.');
end; $$;
revoke all on function public.registrar_respostas_questionario(uuid,text,jsonb) from public;
grant execute on function public.registrar_respostas_questionario(uuid,text,jsonb) to anon,authenticated;

create or replace function public.obter_resultados_questionario(p_enquete_id uuid)
returns table(pergunta_id uuid,pergunta_titulo text,pergunta_tipo text,opcao_id uuid,opcao_texto text,total_respostas bigint)
language sql stable security definer set search_path=pg_catalog,public
as $$
 select p.id,p.titulo,p.tipo,o.id,o.texto,count(distinct i.id)::bigint
 from public.enquete_perguntas p left join public.enquete_pergunta_opcoes o on o.pergunta_id=p.id and o.ativa
 left join public.enquete_resposta_itens i on i.pergunta_id=p.id and i.opcao_id=o.id

 where p.enquete_id=p_enquete_id and p.ativa and exists(select 1 from public.enquetes e where e.id=p.enquete_id and e.resultados_publicos and (e.status='encerrada' or (e.status='publicada' and (e.encerramento_em is null or e.encerramento_em>now()))))
 group by p.id,p.titulo,p.tipo,p.ordem,o.id,o.texto,o.ordem order by p.ordem,o.ordem;
$$;
revoke all on function public.obter_resultados_questionario(uuid) from public;
grant execute on function public.obter_resultados_questionario(uuid) to anon,authenticated;
