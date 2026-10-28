
import { ShieldCheck } from 'lucide-react'
import logoAc from '../assets/logo-acn.png' // ajuste o caminho se necessário

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* <a href="#hero" className="flex items-center gap-3 group">
            <img src={logoAc} alt="ACN - A Conta É Nossa" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
          </a> */}


             {/* Logo & Título */}
         <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-red-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
               <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-amber-500 text-xl tracking-tighter">
                 ACN
               </div>
             </div>
             <div>
               <span className="text-xl font-black tracking-tight text-white block leading-none">
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 ml-1 font-bold">OFICIAL</span>
               </span>
               <span className="text-xs text-slate-400 font-medium tracking-wide">Movimento Nacional do Contribuinte</span>
             </div>
           </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#calculadora" className="hover:text-amber-400 transition-colors">A Realidade</a>
            <a href="#pilares" className="hover:text-amber-400 transition-colors">Os 4 Pilares</a>
            <a href="#custo-politico" className="hover:text-amber-400 transition-colors">Custo do Político</a>
            <a href="#impostometro" className="hover:text-amber-400 transition-colors">Impostos por Estado</a>
            <a href="#apartidario" className="hover:text-amber-400 transition-colors">Crítica Apartidária</a>
          </div>

          <a
            href="#apoie"
            className="flex items-center gap-2 text-slate-950 font-black px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #f59e0b 0%, #dc2626 100%)', color: '#020617' }}
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>VAMOS FAZER PARTE</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
