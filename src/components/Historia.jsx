import { ArrowUpRight, BookOpen, Landmark, Scale, Vote, Wallet, FileText, ShieldCheck, CalendarDays, ExternalLink } from 'lucide-react'

const sourceGroups = [
  {
    title: 'Trajetória e mandatos',
    items: [
      { name: 'Arquivo Nacional — biografia de Lula', detail: 'Origem, trajetória profissional, movimento sindical e períodos presidenciais.', url: 'https://presidentes.an.gov.br/index.php/centro-de-referencia-de-acervos-presidenciais/assuntos/biografias/204-luiz-inacio-lula-da-silva' },
      { name: 'Biblioteca da Presidência — governos Lula', detail: 'Registros dos mandatos presidenciais de 2003–2011 e acervo institucional.', url: 'https://biblioteca.presidencia.gov.br/presidencia/ex-presidentes/luiz-inacio-lula-da-silva' },
      { name: 'Agência Senado — perfil de Flávio Bolsonaro', detail: 'Perfil publicado em 2019; registra quatro mandatos como deputado estadual e a eleição para o Senado.', url: 'https://www12.senado.leg.br/noticias/materias/2019/01/18/flavio-bolsonaro-psl' },
      { name: 'Senado — mandato atual', detail: 'Mandato de senador pelo Rio de Janeiro: 2019–2027.', url: 'https://www25.senado.leg.br/web/senadores/por-uf/-/uf/RJ' },
    ],
  },
  {
    title: 'Atividade legislativa e decisões',
    items: [
      { name: 'Senado — dados abertos', detail: 'Matérias, autoria, tramitação e atualizações legislativas.', url: 'https://www12.senado.leg.br/dados-abertos' },
      { name: 'Câmara — dados abertos', detail: 'Proposições, votações, orientações de bancada e votos nominais.', url: 'https://dadosabertos.camara.leg.br/swagger/api.html' },
      { name: 'Planalto — legislação e atos', detail: 'Leis, decretos, medidas provisórias e atos oficiais do Executivo.', url: 'https://www.gov.br/planalto/pt-br' },
    ],
  },
  {
    title: 'Dinheiro público e indicadores',
    items: [
      { name: 'Portal da Transparência — API', detail: 'Despesas, contratos, convênios, licitações, emendas e transferências do Executivo federal. Requer cadastro e token.', url: 'https://api.portaldatransparencia.gov.br/swagger-ui/index.html' },
      { name: 'Tesouro Nacional — SICONFI API', detail: 'Relatórios fiscais e contábeis da União, estados, DF e municípios.', url: 'https://apidatalake.tesouro.gov.br/docs/siconfi/' },
      { name: 'Tesouro Transparente', detail: 'Bases abertas, séries fiscais e dados consolidados do Tesouro.', url: 'https://www.tesourotransparente.gov.br/' },
      { name: 'IBGE — SIDRA', detail: 'Indicadores demográficos, econômicos, sociais e territoriais.', url: 'https://sidra.ibge.gov.br/' },
    ],
  },
  {
    title: 'Eleições e controle institucional',
    items: [
      { name: 'TSE — dados abertos', detail: 'Resultados eleitorais, candidaturas, partidos e prestação de contas de campanha.', url: 'https://dadosabertos.tse.jus.br/' },
      { name: 'STF — consulta processual', detail: 'Processos, decisões e movimentações judiciais. A situação deve ser conferida no processo específico.', url: 'https://portal.stf.jus.br/' },
      { name: 'TCU — pesquisa de processos e acórdãos', detail: 'Fiscalizações, auditorias, deliberações e acórdãos do controle externo.', url: 'https://portal.tcu.gov.br/' },
      { name: 'CGU — publicações e controle', detail: 'Auditorias, relatórios, sanções e ações de integridade pública.', url: 'https://www.gov.br/cgu/pt-br' },
    ],
  },
]

const timelines = [
  {
    name: 'Luiz Inácio Lula da Silva', tag: 'Poder Executivo federal', color: 'emerald',
    entries: [
      ['2003–2006', 'Primeiro mandato presidencial'],
      ['2007–2010', 'Segundo mandato presidencial'],
      ['2011–2022', 'Fora da Presidência; período que inclui processos judiciais e seus desdobramentos'],
      ['2023–atual', 'Terceiro mandato presidencial'],
    ],
    note: 'A avaliação de governo deve separar cada mandato, contexto econômico, composição do Congresso, políticas implementadas, indicadores e atos formalmente atribuíveis ao Executivo.'
  },
  {
    name: 'Flávio Bolsonaro', tag: 'Poder Legislativo', color: 'amber',
    entries: [
      ['Quatro mandatos', 'Deputado estadual na Assembleia Legislativa do Rio de Janeiro'],
      ['2019–2027', 'Mandato de senador pelo estado do Rio de Janeiro'],
    ],
    note: 'A avaliação parlamentar deve considerar proposições, relatorias, presença, participação em comissões, votações nominais e atividade registrada nos sistemas legislativos.'
  },
]

const comparison = [
  { icon: Landmark, title: 'Poder e responsabilidade', left: 'Lula: chefe do Poder Executivo federal; conduz a administração federal, nomeia ministros, sanciona ou veta projetos e executa políticas dentro da Constituição e das leis.', right: 'Flávio: parlamentar; propõe e vota leis, participa de comissões, fiscaliza o Executivo e representa o estado no Senado. Não administra ministérios nem executa o orçamento federal.' },
  { icon: FileText, title: 'O que deve ser medido', left: 'Atos presidenciais, execução de políticas, metas, orçamento, indicadores nacionais e resultados durante cada mandato.', right: 'Projetos apresentados e aprovados, relatorias, votações, presença, discursos, emendas e fiscalização parlamentar.' },
  { icon: Wallet, title: 'Dinheiro público', left: 'Orçamento federal autorizado e executado, despesas por função, contratos, transferências, indicadores fiscais e resultados das políticas.', right: 'Cota parlamentar, estrutura de gabinete, viagens, emendas, proposições orçamentárias e destinação de recursos, conforme os registros oficiais disponíveis.' },
  { icon: Scale, title: 'Controvérsias e Justiça', left: 'Cada caso deve informar fatos investigados, órgão responsável, decisões, recursos, situação processual e efeitos jurídicos atuais.', right: 'O mesmo padrão: distinguir notícia, investigação, inquérito, denúncia, ação, decisão e condenação; indicar número do processo e data.' },
]

function SourceLink({ item }) {
  return <a href={item.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400">
    <span><strong className="block text-sm text-slate-100">{item.name}</strong><span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.detail}</span></span>
    <ExternalLink size={16} className="mt-0.5 shrink-0 text-emerald-300" />
  </a>
}

export default function Historia() {
  return <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(6,78,59,.22),transparent_42%),linear-gradient(180deg,#080d17,#020617)] px-4 py-12 text-slate-100 sm:py-16">
    <div className="mx-auto max-w-6xl">
      <header className="max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-amber-200"><BookOpen size={15}/> Dossiê público ACN</span>
        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Lula × Flávio Bolsonaro</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Duas trajetórias políticas, funções diferentes e uma obrigação igual: prestar contas. Aqui você encontra o contexto dos mandatos, o que pode ser cobrado de cada cargo e os registros oficiais para conferir a informação na origem.</p>
        <p className="mt-4 text-sm font-semibold text-emerald-300">Nós pagamos. Eles precisam prestar contas.</p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Trajetória executiva</p>
          <h2 className="mt-3 text-2xl font-black">Luiz Inácio Lula da Silva</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">Metalúrgico e dirigente sindical, participou da fundação do Partido dos Trabalhadores e chegou à Presidência em 2003. Exerceu dois mandatos consecutivos, entre 2003 e 2010, e voltou ao cargo em 2023.</p>
          <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200">Presidente: 2003–2010</span><span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200">Presidente: desde 2023</span></div>
          <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-emerald-200" href="https://presidentes.an.gov.br/index.php/centro-de-referencia-de-acervos-presidenciais/assuntos/biografias/204-luiz-inacio-lula-da-silva" target="_blank" rel="noreferrer">Biografia no Arquivo Nacional <ArrowUpRight size={15}/></a>
        </article>
        <article className="rounded-3xl border border-amber-500/30 bg-slate-900/80 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Trajetória legislativa</p>
          <h2 className="mt-3 text-2xl font-black">Flávio Bolsonaro</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">Exerceu quatro mandatos como deputado estadual na Assembleia Legislativa do Rio de Janeiro. Em 2018 foi eleito senador pelo estado, iniciando o mandato em fevereiro de 2019, com término previsto para janeiro de 2027.</p>
          <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-xs text-amber-200">Deputado estadual: quatro mandatos</span><span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-xs text-amber-200">Senador: 2019–2027</span></div>
          <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200" href="https://www12.senado.leg.br/noticias/materias/2019/01/18/flavio-bolsonaro-psl" target="_blank" rel="noreferrer">Perfil publicado pela Agência Senado <ArrowUpRight size={15}/></a>
        </article>
      </section>

      <section className="mt-14">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Linha do tempo</p><h2 className="mt-2 text-3xl font-black">O contexto dos mandatos</h2><p className="mt-2 max-w-3xl text-sm text-slate-400">Os períodos abaixo não são equivalentes em atribuições. A linha do tempo organiza a trajetória para que os dados sejam lidos no contexto correto.</p></div>
        <div className="grid gap-5 md:grid-cols-2">{timelines.map((person) => <article key={person.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><div className="flex items-center gap-3"><CalendarDays className={person.color === 'emerald' ? 'text-emerald-300' : 'text-amber-300'} size={20}/><div><h3 className="font-bold">{person.name}</h3><p className="text-xs text-slate-400">{person.tag}</p></div></div><ol className="mt-6 space-y-4 border-l border-slate-700 pl-5">{person.entries.map(([date, label]) => <li key={date} className="relative"><span className={`absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full ${person.color === 'emerald' ? 'bg-emerald-400' : 'bg-amber-400'}`}/><strong className="text-sm text-white">{date}</strong><p className="mt-1 text-sm text-slate-300">{label}</p></li>)}</ol><p className="mt-6 border-t border-slate-800 pt-4 text-xs leading-relaxed text-slate-400">{person.note}</p></article>)}</div>
      </section>

      <section className="mt-14">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Comparação por responsabilidade</p><h2 className="mt-2 text-3xl font-black">O que cada um podia fazer — e deve explicar</h2></div>
        <div className="space-y-4">{comparison.map(({ icon: Icon, title, left, right }) => <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6"><div className="flex items-center gap-3"><Icon className="text-amber-300" size={21}/><h3 className="text-lg font-bold">{title}</h3></div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-xl bg-emerald-950/30 p-4"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-300">Lula — Presidência</p><p className="text-sm leading-relaxed text-slate-300">{left}</p></div><div className="rounded-xl bg-amber-950/20 p-4"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-300">Flávio — Legislativo</p><p className="text-sm leading-relaxed text-slate-300">{right}</p></div></div></article>)}</div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
        <div className="flex items-center gap-3"><Vote className="text-emerald-300" size={23}/><div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">O que vamos medir com dados oficiais</p><h2 className="mt-1 text-2xl font-black">Indicadores que entram no dossiê</h2></div></div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Gastos e orçamento', 'Despesas por órgão, função, programa e período; execução orçamentária e transferências.'],
            ['Emendas parlamentares', 'Autor, valor, beneficiário, empenho, liquidação, pagamento e execução.'],
            ['Atuação legislativa', 'Projetos apresentados, aprovados, arquivados, relatorias e votações nominais.'],
            ['Indicadores nacionais', 'Inflação, emprego, renda, PIB e indicadores sociais, sempre com série e metodologia.'],
            ['Campanhas eleitorais', 'Votos, receitas, despesas declaradas, doadores e prestação de contas.'],
            ['Controle e Justiça', 'Auditorias, acórdãos, processos e decisões, com situação e data de referência.'],
          ].map(([title, text]) => <div key={title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p></div>)}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-slate-500">Os indicadores ainda não são apresentados como resultados comparativos nesta versão. Os gráficos só serão publicados depois da integração das bases, validação dos períodos, unidades, critérios de atribuição e atualização dos dados.</p>
      </section>

      <section className="mt-14">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">Fontes primárias e bases abertas</p><h2 className="mt-2 text-3xl font-black">Confira de onde vêm as informações</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">Os links abaixo são fontes institucionais para consulta. A página não trata um portal inteiro como prova de uma afirmação: cada dado publicado deverá apontar para o registro, documento, consulta ou série que o sustenta.</p></div>
        <div className="space-y-8">{sourceGroups.map(group => <div key={group.title}><h3 className="mb-3 text-lg font-bold text-white">{group.title}</h3><div className="grid gap-3 md:grid-cols-2">{group.items.map(item => <SourceLink key={item.name} item={item}/>)}</div></div>)}</div>
      </section>

      <section className="mt-14 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-slate-900/80 to-emerald-950/20 p-7 sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-amber-200">O compromisso</p>
        <blockquote className="mt-4 max-w-4xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">“Nenhum político deve receber crédito ilimitado pelo que representa, nem ser condenado apenas pelo que simboliza. Deve ser avaliado pelo que fez, pelo que propôs, pelo que entregou e pelas evidências disponíveis.”</blockquote>
        <p className="mt-4 text-sm text-slate-400">A comparação não declara vencedor. O objetivo é permitir que qualquer pessoa confira os registros e forme sua própria avaliação.</p>
      </section>

      <section className="mt-12 border-t border-slate-800 pt-8">
        <div className="flex items-start gap-3"><ShieldCheck className="mt-1 shrink-0 text-emerald-300" size={20}/><div><h2 className="font-bold">Critério editorial e atualização</h2><p className="mt-2 text-sm leading-relaxed text-slate-400">Dados de órgãos diferentes podem ter conceitos, períodos e coberturas distintos. Valores nominais serão identificados; comparações monetárias precisarão de correção inflacionária quando pertinente. Correlação não será apresentada como causalidade. Investigações e acusações não serão descritas como condenações. Cada painel deverá exibir fonte, data de consulta, período coberto e limitações.</p></div></div>
        <p className="mt-6 text-center text-xs text-slate-500">ACN — A Conta é Nossa. Nenhum partido acima da fiscalização.</p>
      </section>
    </div>
  </main>
}
