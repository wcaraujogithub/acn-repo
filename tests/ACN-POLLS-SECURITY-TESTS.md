# ACN — roteiro de validação de segurança das enquetes

Execute em projeto Supabase de staging antes de produção. Use uma enquete de teste publicada com período ativo e duas opções ativas.

## Banco / RPC

1. Como `anon`, confirme que `select * from public.enquete_votos` e `select * from public.enquete_auditoria` são negados.
2. Como `anon`, confirme que `insert`, `update` e `delete` diretos em `enquete_votos` são negados.
3. Chame `registrar_voto_enquete` com uma enquete aberta, opção pertencente a ela e token aleatório com pelo menos 32 caracteres: deve registrar um voto e devolver comprovante de 64 caracteres hexadecimais.
4. Repita a chamada com o mesmo token e enquete: deve falhar como duplicidade.
5. Faça chamadas simultâneas com o mesmo token/enquete: exatamente uma deve vencer.
6. Use opção de outra enquete, opção inativa, enquete rascunho, ainda não iniciada e encerrada: todas devem falhar sem gravar voto.
7. Confirme que `verificar_comprovante_enquete` retorna `true` para o comprovante devolvido e `false` para código inválido/alterado.
8. Confirme que a verificação do comprovante não devolve opção, nome, e-mail, IP nem token do navegador.
9. Confirme que `obter_resultados_enquetes_ativas` retorna apenas totais agregados de enquetes publicadas e abertas, sem IDs ou linhas de votos individuais.
10. Compare os totais do RPC com `count(*)` executado por uma sessão administrativa, agrupado por enquete/opção.
11. Confirme que cada voto criado possui evento correspondente em `enquete_auditoria` e que o `hash_anterior` liga ao evento anterior da mesma enquete.
12. Confirme que a tabela `apoiadores` e seus registros continuam inalterados.

## Frontend

1. Carregue o site: enquetes abertas e opções aparecem sem expor linhas individuais de votos.
2. Vote: aparece confirmação e comprovante; copie-o para fora do navegador.
3. Tente votar novamente na mesma enquete no mesmo navegador: o banco deve rejeitar, mesmo se a interface for manipulada.
4. Recarregue a página: o comprovante deve continuar visível no mesmo navegador.
5. Verifique o comprovante pela interface e depois altere um caractere: o primeiro deve validar e o segundo não.
6. Abra outro navegador/dispositivo ou limpe o armazenamento local: documente que a proteção por navegador pode ser contornada; isso é limitação conhecida, não prova de voto único por pessoa.
7. Deixe a página aberta em dois navegadores e registre um voto: os totais devem atualizar em até aproximadamente 10 segundos.
8. Teste erro de rede, Supabase indisponível e tentativa de voto após encerramento.

## Limite de auditoria

A cadeia de hashes no mesmo banco ajuda a revelar inconsistências, mas um administrador com privilégios suficientes pode reescrever dados e hashes. Para alegar resistência a adulteração administrativa, exporte periodicamente os hashes/resumos para armazenamento externo controlado separadamente e documente a retenção. Não publique que a enquete é "impossível de manipular".
