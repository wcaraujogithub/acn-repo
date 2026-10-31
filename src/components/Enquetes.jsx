import { useCallback, useEffect, useMemo, useState } from 'react'
import { BarChart3, CheckCircle2, Clock3, Copy, ShieldCheck, Vote } from 'lucide-react'
import { supabase } from '../supabaseClient'

const TOKEN_KEY = 'acn.enquetes.browser-token.v1'
const RECEIPTS_KEY = 'acn.enquetes.receipts.v1'

function getBrowserToken() {
  let token = window.localStorage.getItem(TOKEN_KEY)
  if (!token) {
    token = window.crypto.randomUUID() + window.crypto.randomUUID()
    window.localStorage.setItem(TOKEN_KEY, token)
  }
  return token
}

function getSavedReceipts() {
  try {
    return JSON.parse(window.localStorage.getItem(RECEIPTS_KEY) || '{}')
  } catch {
    return {}
  }
}

function groupPolls(rows) {
  const polls = new Map()
  for (const row of rows || []) {
    if (!polls.has(row.enquete_id)) {
      polls.set(row.enquete_id, {
        id: row.enquete_id,
        title: row.titulo,
        description: row.descricao,
        slug: row.slug,
        closesAt: row.encerramento_em,
        options: [],
        total: Number(row.total_votos || 0),
      })
    }
    polls.get(row.enquete_id).options.push({
      id: row.opcao_id,
      text: row.opcao_texto,
      votes: Number(row.votos || 0),
    })
  }
  return [...polls.values()]
}

export default function Enquetes() {
  const [polls, setPolls] = useState([])
  const [selected, setSelected] = useState({})
  const [receipts, setReceipts] = useState({})
  const [receiptInput, setReceiptInput] = useState('')
  const [receiptResult, setReceiptResult] = useState('')
  const [loading, setLoading] = useState(true)
  const [votingId, setVotingId] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const fetchPolls = useCallback(async () => {
    const { data, error: rpcError } = await supabase.rpc('obter_resultados_enquetes_ativas')
    if (rpcError) {
      setError('Não foi possível carregar as enquetes. Verifique se a migration de votação segura foi aplicada no Supabase.')
      setLoading(false)
      return
    }
    setPolls(groupPolls(data))
    setLoading(false)
  }, [])

  useEffect(() => {
    setReceipts(getSavedReceipts())
    fetchPolls()
    // Atualização automática frequente; resultados são agregados no banco, sem expor votos individuais.
    const intervalId = window.setInterval(fetchPolls, 10000)
    return () => window.clearInterval(intervalId)
  }, [fetchPolls])

  const savedReceiptCount = useMemo(() => Object.keys(receipts).length, [receipts])

  const submitVote = async (poll) => {
    const optionId = selected[poll.id]
    if (!optionId) {
      setError('Selecione uma opção antes de votar.')
      return
    }
    setError('')
    setNotice('')
    setVotingId(poll.id)

    try {
      const browserToken = getBrowserToken()
      const { data, error: voteError } = await supabase.rpc('registrar_voto_enquete', {
        p_enquete_id: poll.id,
        p_opcao_id: optionId,
        p_browser_token: browserToken,
      })
      if (voteError) {
        if (voteError.code === '23505' || voteError.message?.includes('já registrou')) {
          setError('Este navegador já registrou um voto nesta enquete. A proteção é por navegador, não por pessoa, e pode ser contornada usando outro dispositivo ou limpando os dados locais.')
        } else {
          setError(voteError.message || 'Não foi possível registrar o voto.')
        }
        return
      }

      const nextReceipts = { ...getSavedReceipts(), [poll.id]: data.comprovante }
      window.localStorage.setItem(RECEIPTS_KEY, JSON.stringify(nextReceipts))
      setReceipts(nextReceipts)
      setNotice(`Voto registrado. Seu comprovante é ${data.comprovante}. Guarde-o agora; ele não revela sua escolha.`)
      setSelected((current) => ({ ...current, [poll.id]: '' }))
      await fetchPolls()
    } catch {
      setError('Não foi possível concluir a votação. Verifique a conexão e tente novamente.')
    } finally {
      setVotingId('')
    }
  }

  const copyReceipt = async (receipt) => {
    try {
      await navigator.clipboard.writeText(receipt)
      setNotice('Comprovante copiado.')
    } catch {
      setNotice(`Copie e guarde este comprovante: ${receipt}`)
    }
  }

  const verifyReceipt = async (event) => {
    event.preventDefault()
    setReceiptResult('')
    const { data, error: verifyError } = await supabase.rpc('verificar_comprovante_enquete', {
      p_comprovante: receiptInput.trim(),
    })
    if (verifyError) {
      setReceiptResult('Não foi possível verificar agora. Tente novamente mais tarde.')
    } else if (data === true) {
      setReceiptResult('Comprovante válido: existe um registro correspondente no banco. Isso não comprova a identidade de quem votou nem, isoladamente, exclui alterações administrativas.')
    } else {
      setReceiptResult('Comprovante não encontrado. Confira se digitou os 64 caracteres corretamente.')
    }
  }

  return (
    <section id="enquetes" className="min-h-screen border-y border-emerald-900/40 bg-[radial-gradient(ellipse_at_top,rgba(6,78,59,.22),transparent_48%),linear-gradient(180deg,#080d17_0%,#020617_100%)] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <Vote className="h-4 w-4" /> Voz cidadã
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Central de Enquetes</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Participe, acompanhe os resultados e confira seus comprovantes. Informação clara, participação aberta e transparência metodológica. A participação é anônima e a proteção contra repetição funciona por navegador — não equivale à verificação de uma pessoa única.
          </p>
        </div>

        {error && <div role="alert" className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">{error}</div>}
        {notice && <div role="status" className="mb-5 break-words rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">{notice}</div>}

        {loading ? (
          <p className="py-10 text-center text-sm text-slate-400">Carregando enquetes...</p>
        ) : polls.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <BarChart3 className="mx-auto mb-3 h-8 w-8 text-amber-400" />
            <h3 className="font-bold text-white">Nenhuma enquete aberta no momento</h3>
            <p className="mt-2 text-sm text-slate-400">Quando uma enquete for publicada e estiver dentro do período de votação, ela aparecerá aqui.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {polls.map((poll) => (
              <article key={poll.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
                <div className="mb-4 flex items-start gap-3">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400"><BarChart3 className="h-5 w-5" /></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-extrabold text-white">{poll.title}</h3>
                    {poll.description && <p className="mt-2 text-sm leading-relaxed text-slate-400">{poll.description}</p>}
                    <p className="mt-2 flex items-center gap-1 text-xs text-slate-500"><Clock3 className="h-3.5 w-3.5" />{poll.closesAt ? `Encerra em ${new Date(poll.closesAt).toLocaleString('pt-BR')}` : 'Período de encerramento não informado'}</p>
                  </div>
                </div>

                <div className="space-y-3" role="radiogroup" aria-label={`Opções para ${poll.title}`}>
                  {poll.options.map((option) => {
                    const percentage = poll.total ? Math.round((option.votes / poll.total) * 100) : 0
                    return (
                      <label key={option.id} className={`block cursor-pointer rounded-xl border p-3 transition-colors ${selected[poll.id] === option.id ? 'border-emerald-400 bg-emerald-500/10' : 'border-slate-700 bg-slate-950/70 hover:border-slate-600'}`}>
                        <span className="flex items-start gap-3">
                          <input type="radio" name={`poll-${poll.id}`} value={option.id} checked={selected[poll.id] === option.id} onChange={() => setSelected((current) => ({ ...current, [poll.id]: option.id }))} className="mt-1 accent-emerald-400" />
                          <span className="min-w-0 flex-1 text-sm font-semibold text-slate-200">{option.text}</span>
                          <span className="text-xs tabular-nums text-slate-400">{percentage}%</span>
                        </span>
                        <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-slate-800"><span className="block h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all" style={{ width: `${percentage}%` }} /></span>
                        <span className="mt-1 block text-right text-[11px] text-slate-500">{option.votes} {option.votes === 1 ? 'voto' : 'votos'}</span>
                      </label>
                    )
                  })}
                </div>

                {receipts[poll.id] ? (
                  <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                    <p className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-300"><CheckCircle2 className="h-4 w-4" /> Comprovante salvo neste navegador</p>
                    <code className="block break-all text-xs text-slate-300">{receipts[poll.id]}</code>
                    <button type="button" onClick={() => copyReceipt(receipts[poll.id])} className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-bold text-white hover:border-amber-400"><Copy className="h-3.5 w-3.5" /> Copiar comprovante</button>
                  </div>
                ) : (
                  <button type="button" onClick={() => submitVote(poll)} disabled={votingId === poll.id} className="mt-5 w-full rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 px-4 py-3 text-sm font-black text-slate-950 shadow-lg shadow-emerald-950/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 disabled:cursor-wait disabled:opacity-60">
                    {votingId === poll.id ? 'REGISTRANDO VOTO...' : 'CONFIRMAR MEU VOTO'}
                  </button>
                )}
                <p className="mt-3 text-xs leading-relaxed text-slate-500">{poll.total} votos contabilizados. Resultados atualizados automaticamente a cada 10 segundos. Não é uma pesquisa representativa da população brasileira.</p>
              </article>
            ))}
          </div>
        )}

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-2 text-white"><ShieldCheck className="h-5 w-5 text-amber-400" /><h3 className="font-extrabold">Verificar comprovante</h3></div>
          <p className="mb-4 text-sm text-slate-400">A verificação confirma se há um registro correspondente. Ela não identifica o participante nem revela a opção votada.</p>
          <form onSubmit={verifyReceipt} className="flex flex-col gap-3 sm:flex-row">
            <input value={receiptInput} onChange={(event) => setReceiptInput(event.target.value)} maxLength={64} minLength={64} required placeholder="Cole aqui o código de 64 caracteres" className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-amber-400" />
            <button type="submit" className="rounded-xl border border-amber-500/40 px-4 py-3 text-sm font-bold text-amber-300 hover:bg-amber-500/10">Verificar</button>
          </form>
          {receiptResult && <p role="status" className="mt-3 text-sm text-slate-300">{receiptResult}</p>}
          {savedReceiptCount > 0 && <p className="mt-3 text-xs text-slate-500">Há comprovante(s) guardado(s) neste navegador. Copie-os e guarde em local seguro antes de limpar os dados do navegador.</p>}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">Transparência metodológica: a prevenção de duplicidade usa um identificador técnico armazenado no navegador. A pessoa pode contornar essa limitação usando outro dispositivo ou apagando os dados locais. Os resultados agregados não expõem registros individuais. Para detectar alterações feitas por administradores com privilégios no banco, os resumos de auditoria também precisam ser preservados periodicamente fora do Supabase.</p>
      </div>
    </section>

    
  )
}
