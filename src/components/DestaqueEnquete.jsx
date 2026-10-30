import { useCallback, useEffect, useState } from 'react'
import { ArrowRight, BarChart3, ChevronLeft, ChevronRight, Vote } from 'lucide-react'
import { supabase } from '../supabaseClient'

function toPolls(rows) {
  const map = new Map()
  for (const row of rows || []) {
    if (!map.has(row.enquete_id)) map.set(row.enquete_id, { id: row.enquete_id, title: row.titulo, description: row.descricao, slug: row.slug, options: [], total: Number(row.total_votos || 0) })
    map.get(row.enquete_id).options.push({ text: row.opcao_texto, votes: Number(row.votos || 0) })
  }
  return [...map.values()]
}

export default function DestaqueEnquete() {
  const [polls, setPolls] = useState([])
  const [active, setActive] = useState(0)
  const load = useCallback(async () => {
    const { data, error } = await supabase.rpc('obter_resultados_enquetes_ativas')
    if (!error) setPolls(toPolls(data))
  }, [])

  useEffect(() => {
    load()
    const timer = window.setInterval(load, 30000)
    return () => window.clearInterval(timer)
  }, [load])

  useEffect(() => {
    if (polls.length < 2) return undefined
    const timer = window.setInterval(() => setActive((value) => (value + 1) % polls.length), 7000)
    return () => window.clearInterval(timer)
  }, [polls.length])

  if (!polls.length) return null
  const poll = polls[active % polls.length]
  const topOptions = [...poll.options].sort((a, b) => b.votes - a.votes).slice(0, 2)
  const openPolls = () => { window.location.href = '/enquetes' }
  const handleCardClick = (event) => {
    if (event.target.closest('button, a')) return
    openPolls()
  }
  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openPolls()
    }
  }

  return (
    <section aria-labelledby="poll-highlight-title" className="border-y border-emerald-900/50 bg-gradient-to-br from-[#0b1715] via-slate-950 to-[#111827] py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300"><Vote size={15}/> Participação cidadã</span>
          <h2 id="poll-highlight-title" className="mt-4 text-3xl font-black text-white sm:text-4xl">A sua opinião também faz parte da conversa.</h2>
          <p className="mt-3 max-w-xl text-slate-300">Participe das consultas abertas, acompanhe os números e consulte as regras de transparência de cada votação.</p>
          <a href="/enquetes" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-400 px-5 py-3 font-black text-slate-950 transition hover:brightness-110">ACESSAR CENTRAL DE ENQUETES <ArrowRight size={17}/></a>
        </div>
        <article role="link" tabIndex={0} aria-label={`Abrir enquete: ${poll.title}`} onClick={handleCardClick} onKeyDown={handleCardKeyDown} className="cursor-pointer rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 transition hover:border-emerald-500/60 hover:shadow-emerald-950/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:p-7" aria-live="polite">
          <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Enquete em destaque</span><span className="rounded-full border border-emerald-500/30 px-2.5 py-1 text-xs text-emerald-300">Aberta</span></div>
          <h3 className="mt-4 text-xl font-extrabold leading-snug text-white">{poll.title}</h3>
          {poll.description && <p className="mt-2 line-clamp-2 text-sm text-slate-400">{poll.description}</p>}
          <div className="mt-5 space-y-3">{topOptions.map((option) => {
            const pct = poll.total ? Math.round(option.votes / poll.total * 100) : 0
            return <div key={option.text}><div className="mb-1 flex justify-between gap-3 text-sm"><span className="text-slate-200">{option.text}</span><strong className="tabular-nums text-amber-300">{pct}%</strong></div><div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400" style={{width:`${pct}%`}}/></div></div>
          })}</div>
          <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400"><span className="inline-flex items-center gap-1.5"><BarChart3 size={14}/> {poll.total.toLocaleString('pt-BR')} votos registrados</span><div className="flex gap-2"><button aria-label="Enquete anterior" onClick={() => setActive((v) => (v - 1 + polls.length) % polls.length)} className="rounded-lg border border-slate-700 p-2 hover:border-emerald-400"><ChevronLeft size={16}/></button><button aria-label="Próxima enquete" onClick={() => setActive((v) => (v + 1) % polls.length)} className="rounded-lg border border-slate-700 p-2 hover:border-emerald-400"><ChevronRight size={16}/></button></div></div>
          <p className="mt-3 text-[11px] leading-relaxed text-slate-500">Resultados de participação voluntária; não representam, por si, a opinião da população brasileira.</p>
        </article>
      </div>
    </section>
  )
}
