import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, ShieldCheck } from 'lucide-react'
import { supabase } from '../supabaseClient'

const TOKEN_KEY = 'acn.enquetes.browser-token.v1'
const RECEIPTS_KEY = 'acn.questionarios.receipts.v1'
function browserToken() {
  let token = localStorage.getItem(TOKEN_KEY)
  if (!token) { token = crypto.randomUUID() + crypto.randomUUID(); localStorage.setItem(TOKEN_KEY, token) }
  return token
}
function groupRows(rows = []) {
  const map = new Map()
  rows.forEach((r) => {
    if (!map.has(r.enquete_id)) map.set(r.enquete_id, { id: r.enquete_id, title: r.titulo, description: r.descricao, slug: r.slug, questions: [] })
    const poll = map.get(r.enquete_id)
    let q = poll.questions.find((x) => x.id === r.pergunta_id)
    if (!q) { q = { id: r.pergunta_id, title: r.pergunta_titulo, description: r.pergunta_descricao, type: r.pergunta_tipo, required: r.obrigatoria, options: [] }; poll.questions.push(q) }
    if (r.opcao_id) q.options.push({ id: r.opcao_id, text: r.opcao_texto })
  })
  return [...map.values()]
}
export default function Questionarios() {
  const [polls, setPolls] = useState([])
  const [active, setActive] = useState(0)
  const [answers, setAnswers] = useState({})
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [receipts, setReceipts] = useState({})
  const [results, setResults] = useState([])
  const poll = polls[active]
  useEffect(() => {
    try { setReceipts(JSON.parse(localStorage.getItem(RECEIPTS_KEY) || '{}')) } catch { setReceipts({}) }
    supabase.rpc('obter_questionarios_ativos').then(({ data, error: e }) => {
      if (e) setError('Não foi possível carregar os questionários. Aplique primeiro a migration ACN-FE-02 no Supabase.')
      else setPolls(groupRows(data))
    })
  }, [])
  useEffect(() => {
    if (!poll) return
    supabase.rpc('obter_resultados_questionario', { p_enquete_id: poll.id }).then(({ data }) => setResults(data || []))
  }, [poll?.id, message])
  const progress = useMemo(() => poll?.questions.length ? Math.round((Object.keys(answers).filter((id) => answers[id] && (Array.isArray(answers[id]) ? answers[id].length : true)).length / poll.questions.length) * 100) : 0, [answers, poll])
  const setAnswer = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }))
  async function submit(event) {
    event.preventDefault(); setError(''); setMessage('')
    const missing = poll.questions.find((q) => q.required && (!answers[q.id] || (Array.isArray(answers[q.id]) && !answers[q.id].length) || answers[q.id] === ''))
    if (missing) { setError(`Responda à pergunta obrigatória: ${missing.title}`); document.getElementById(`question-${missing.id}`)?.focus(); return }
    const payload = poll.questions.map((q) => ({ pergunta_id: q.id, ...(q.type === 'short_text' ? { texto: answers[q.id] || '' } : q.type === 'multiple_choice' ? { opcoes: answers[q.id] || [] } : { opcao_id: answers[q.id] || '' }) }))
    setBusy(true)
    const { data, error: e } = await supabase.rpc('registrar_respostas_questionario', { p_enquete_id: poll.id, p_browser_token: browserToken(), p_respostas: payload })
    setBusy(false)
    if (e) { setError(e.code === '23505' ? 'Este navegador já respondeu a este questionário.' : e.message || 'Não foi possível registrar as respostas.'); return }
    const next = { ...receipts, [poll.id]: data.comprovante }; localStorage.setItem(RECEIPTS_KEY, JSON.stringify(next)); setReceipts(next)
    setMessage(`Respostas registradas. Comprovante: ${data.comprovante}. Guarde este código; ele não revela suas respostas.`)
    setAnswers({})
  }
  return <main className="min-h-[75vh] bg-[radial-gradient(ellipse_at_top,rgba(6,78,59,.22),transparent_48%),linear-gradient(180deg,#080d17,#020617)] px-4 py-14 text-slate-100 sm:py-20">
    <div className="mx-auto max-w-5xl">
      <header className="mx-auto mb-10 max-w-3xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300"><ClipboardList size={16}/> Participação com contexto</span><h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Questionários ACN</h1><p className="mt-4 text-slate-300">Responda a cada tema com calma. As perguntas são organizadas por assunto e as respostas são registradas sem vincular sua identidade à alternativa escolhida.</p></header>
      {error && <p role="alert" className="mb-5 rounded-xl border border-red-500/40 bg-red-950/40 p-4 text-red-200">{error}</p>}{message && <p role="status" className="mb-5 break-all rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-4 text-emerald-200"><CheckCircle2 className="mr-2 inline" size={18}/>{message}</p>}
      {!poll && !error ? <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-center"><ClipboardList className="mx-auto mb-4 text-amber-300" size={36}/><h2 className="text-xl font-bold">Nenhum questionário disponível</h2><p className="mt-2 text-slate-400">Quando houver um questionário publicado com perguntas ativas, ele aparecerá aqui.</p></div> : null}
      {poll && <section className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-2xl shadow-black/30">
        <div className="border-b border-slate-800 bg-gradient-to-r from-emerald-950/70 to-slate-900 p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">Questionário {active + 1} de {polls.length}</span><span className="text-xs text-slate-400">{poll.questions.length} perguntas</span></div><h2 className="mt-3 text-2xl font-black sm:text-3xl">{poll.title}</h2>{poll.description && <p className="mt-3 max-w-3xl text-slate-300">{poll.description}</p>}<div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800" role="progressbar" aria-label="Progresso das respostas" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all" style={{ width: `${progress}%` }}/></div><p className="mt-2 text-right text-xs text-slate-400">{progress}% preenchido</p></div>
        {receipts[poll.id] ? <div className="p-8 text-center"><ShieldCheck className="mx-auto mb-3 text-emerald-300" size={40}/><h3 className="text-xl font-bold">Você já respondeu neste navegador</h3><p className="mt-2 break-all text-sm text-slate-300">Comprovante: {receipts[poll.id]}</p></div> : <form onSubmit={submit} className="space-y-7 p-6 sm:p-8">{poll.questions.map((q, index) => <fieldset key={q.id} id={`question-${q.id}`} tabIndex={-1} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 sm:p-6"><legend className="sr-only">Pergunta {index + 1}</legend><div className="mb-4 flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-black text-emerald-300">{index + 1}</span><div><h3 className="font-bold text-white">{q.title} {q.required && <span className="text-amber-300" aria-label="obrigatória">*</span>}</h3>{q.description && <p className="mt-1 text-sm text-slate-400">{q.description}</p>}</div></div>
          {
          q.type === 'short_text' ? <textarea aria-label={q.title} required={q.required} maxLength={2000} value={answers[q.id] || ''}
           onChange={(e) => setAnswer(q.id, e.target.value)} 
           rows={3} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30" placeholder="Escreva sua resposta..."/> : 
           <div className="grid gap-3 sm:grid-cols-2">
            {q.options.map((o) => <label key={o.id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/70 p-4 hover:border-emerald-400 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-emerald-400">
            <input type={q.type === 'multiple_choice' ? 'checkbox' : 'radio'} name={`q-${q.id}`} checked={q.type === 'multiple_choice' ? (answers[q.id] || []).includes(o.id) : answers[q.id] === o.id} onChange={(e) => q.type === 'multiple_choice' ? setAnswer(q.id, e.target.checked ? [...(answers[q.id] || []), o.id] : (answers[q.id] || []).filter((x) => x !== o.id)) : setAnswer(q.id, o.id)} className="mt-1 h-4 w-4 accent-emerald-400"/><span className="text-sm text-slate-200">{o.text}</span></label>)}</div>}</fieldset>)}
            {/* <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
             
              <button type="button" disabled={active === 0} onClick={() => setActive((v) => v - 1)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 disabled:opacity-40">
                <ArrowLeft size={17}/> Anterior
                </button>
                <button disabled={busy} 
                type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-amber-300 px-6 py-3 font-black text-slate-950 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 disabled:opacity-50">
                  {busy ? 'Registrando...' : 'Enviar respostas'} 
                  <ArrowRight size={17}/>
                  </button></div> */}

                  <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row w-full">
                    {/* Botão Anterior Redesenhado */}
                    <button 
                      type="button" 
                      disabled={active === 0} 
                      onClick={() => setActive((v) => v - 1)} 
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 font-bold text-slate-200 shadow-md transition-all duration-200 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-slate-800/80 hover:scale-[1.01] active:scale-[0.99] disabled:pointer-events-none disabled:border-slate-800 disabled:bg-slate-900/20 disabled:text-slate-600"
                    >
                      <ArrowLeft size={17}/> Anterior
                    </button>

                    {/* Botão Enviar Respostas */}
                    <div className="relative group">
                      {!busy && (
                        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 opacity-40 blur-sm transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
                      )}
                      
                      <button 
                        disabled={busy} 
                        type="submit" 
                        className="relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 px-7 py-3 font-black text-slate-950 shadow-lg shadow-emerald-950/20 transition-all duration-200 hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] disabled:pointer-events-none disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 disabled:shadow-none"
                      >
                        {busy ? (
                          <span className="flex items-center gap-2">
                            <svg className="h-4 w-4 animate-spin text-slate-950" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Registrando...
                          </span>
                        ) : (
                          <>
                            Enviar respostas
                            <ArrowRight size={17}/>
                          </>
                        )}
                      </button>
                    </div>
                  </div>


                </form>}
      </section>}
      {poll && results.length > 0 && <section aria-labelledby="questionnaire-results-title" className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Painel de resultados</p><h2 id="questionnaire-results-title" className="mt-2 text-2xl font-black">Respostas por pergunta</h2><p className="mt-2 text-sm text-slate-400">Contagens agregadas; respostas individuais e textos livres não são exibidos.</p><div className="mt-6 space-y-6">{poll.questions.filter(q => q.type !== 'short_text').map(q => { const rows = results.filter(r => r.pergunta_id === q.id); const total = rows.reduce((sum, r) => sum + Number(r.total_respostas || 0), 0); return <article key={q.id}><h3 className="font-bold">{q.title}</h3><p className="mt-1 text-xs text-slate-500">{total} seleções registradas</p><div className="mt-3 space-y-3">{rows.map(r => { const count = Number(r.total_respostas || 0); const pct = total ? Math.round(count / total * 100) : 0; return <div key={r.opcao_id}><div className="flex justify-between gap-3 text-sm"><span>{r.opcao_texto}</span><strong className="tabular-nums text-amber-300">{count} · {pct}%</strong></div><div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-300" style={{ width: `${pct}%` }}/></div></div>})}</div><table className="sr-only"><caption>Dados textuais dos resultados: {q.title}</caption><thead><tr><th scope="col">Opção</th><th scope="col">Respostas</th><th scope="col">Percentual</th></tr></thead><tbody>{rows.map(r => <tr key={r.opcao_id}><th scope="row">{r.opcao_texto}</th><td>{r.total_respostas}</td><td>{total ? Math.round(Number(r.total_respostas || 0) / total * 100) : 0}%</td></tr>)}</tbody></table></article>})}</div></section>}
      {polls.length > 1 && <nav aria-label="Selecionar questionário" className="mt-5 flex flex-wrap justify-center gap-2">{polls.map((item, i) => <button key={item.id} type="button" aria-current={active === i ? 'page' : undefined} onClick={() => { setActive(i); setAnswers({}); setMessage(''); setError('') }} className={`rounded-full px-4 py-2 text-sm font-bold ${active === i ? 'bg-emerald-400 text-slate-950' : 'border border-slate-700 text-slate-300 hover:border-emerald-400'}`}>{i + 1}. {item.title}</button>)}</nav>}
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500">A proteção contra respostas repetidas é baseada em identificador técnico do navegador, não em identidade civil. Outro navegador ou dispositivo pode participar novamente. Participações voluntárias não constituem amostra representativa da população.</p>
    </div></main>

    
}
