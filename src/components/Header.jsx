import { useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'

const links = [
  ['A Realidade', '/#calculadora'], ['Os 4 Pilares', '/#pilares'], ['Custo do Político', '/#custo-politico'],
  ['Impostos por Estado', '/#impostometro'], ['Crítica Apartidária', '/#apartidario'],
  ['Enquetes', '/enquetes'], ['Questionários', '/questionarios'], ['História', '/historia']
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <a href="/#hero" className="group flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950 via-slate-950 to-amber-950 text-xl font-black tracking-tighter text-amber-300 shadow-lg">ACN</div>
            <div className="min-w-0"><span className="block text-base font-black leading-tight text-white sm:text-lg">A Conta é Nossa</span><span className="block text-[11px] font-medium tracking-wide text-slate-400">Nós pagamos. Eles precisam prestar contas.</span></div>
          </a>
          <div className="hidden items-center gap-5 xl:flex">{links.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap text-xs font-semibold text-slate-300 transition hover:text-emerald-300">{label}</a>)}</div>
          <div className="hidden shrink-0 lg:block"><a href="/#apoie" style={{ background: 'linear-gradient(110deg, #10b981 0%, #d8ad42 100%)' }} className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-black text-slate-950 shadow-lg shadow-emerald-950/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"><ShieldCheck size={16}/> VAMOS FAZER PARTE</a></div>
          <button type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="rounded-lg border border-slate-700 p-2 text-white hover:border-emerald-400 xl:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <div className="grid gap-1 border-t border-slate-800 py-3 xl:hidden">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-emerald-300">{label}</a>)}<a href="/#apoie" onClick={() => setOpen(false)} style={{ background: 'linear-gradient(110deg, #10b981 0%, #d8ad42 100%)' }} className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-emerald-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">VAMOS FAZER PARTE</a></div>}
      </div>
    </nav>
  )
}
