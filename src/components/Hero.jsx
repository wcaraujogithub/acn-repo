
// // import { Ban, Eye, Zap, Users, ArrowDown, AlertTriangle } from 'lucide-react'

// // export default function Hero({ totalApoiadores }) {
// //   return (
// //     <header id="hero" className="relative flag-bg border-b border-slate-800/80 overflow-hidden py-16 lg:py-24">
// //       <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
// //           <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
// //             <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
// //               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
// //                 <Ban className="w-3.5 h-3.5" /> SEM POLÍTICO DE ESTIMAÇÃO
// //               </span>
// //               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
// //                 <Eye className="w-3.5 h-3.5" /> FISCAL DO NOSSO PRÓPRIO IMPOSTO
// //               </span>
// //               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
// //                 <Zap className="w-3.5 h-3.5" /> 100% APARTIDÁRIO
// //               </span>
// //             </div>

// //             {/* Texto com cores sólidas e legíveis (Item 2) */}
// //             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
// //               O movimento de quem <span className="text-amber-500">trabalha e paga a conta.</span>
// //             </h1>

// //             <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
// //               Chega de briga de torcida política por deuses de barro. Enquanto a esquerda e a direita disputam quem rouba mais a sua atenção, o seu suor continua bancando privilégios de quem não produz nada.
// //             </p>

// //             <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-amber-500 text-slate-200 text-sm sm:text-base font-semibold italic">
// //               "Nem Esquerda, Nem Direita: O Dinheiro do Nosso Trabalho."
// //             </div>

// //             <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// //               <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 glow-gold flex items-center gap-4 w-full sm:w-auto">
// //                 <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
// //                   <Users className="w-6 h-6" />
// //                 </div>
// //                 <div className="text-left">
// //                   <div className="text-2xl font-black font-mono text-amber-400">
// //                     {totalApoiadores.toLocaleString('pt-BR')}
// //                   </div>
// //                   <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Trabalhadores Conectados</div>
// //                 </div>
// //               </div>

// //               <a href="#calculadora" className="w-full sm:w-auto text-center px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2">
// //                 <span>VER A REALIDADE DA SUA HORA</span>
// //                 <ArrowDown className="w-4 h-4 text-amber-400" />
// //               </a>
// //             </div>
// //           </div>

// //           <div className="lg:col-span-5 relative">
// //             <div className="relative mx-auto max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl overflow-hidden group">
// //               <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-950 flex flex-col justify-between p-6 border border-slate-800">
// //                 <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-green-900 via-amber-900 to-red-950"></div>
// //                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent animate-pulse"></div>

// //                 <div className="relative z-10 flex justify-between items-start">
// //                   <span className="text-xs font-mono font-bold text-red-400 bg-red-950/80 px-2.5 py-1 rounded border border-red-800">BRASIL: EM ALERTA</span>
// //                   <AlertTriangle className="w-6 h-6 text-amber-400" />
// //                 </div>

// //                 <div className="relative z-10 text-center space-y-2">
// //                   <div className="text-3xl font-black tracking-widest text-slate-100 uppercase">ACN</div>
// //                   <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">A Conta É Nossa</div>
// //                 </div>

// //                 <div className="relative z-10 flex justify-between items-end text-xs text-slate-400 font-mono">
// //                   <span>Salário Mínimo: R$ 1.518,00</span>
// //                   <span className="text-red-400 font-bold">R$ 6,90 / hora</span>
// //                 </div>
// //               </div>

// //               <div className="mt-6 grid grid-cols-2 gap-3 text-center">
// //                 <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
// //                   <div className="text-xs text-slate-400">Imposto embutido</div>
// //                   <div className="text-lg font-black text-red-400">30% a 40%</div>
// //                 </div>
// //                 <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
// //                   <div className="text-xs text-slate-400">Custo 1 Político/Dia</div>
// //                   <div className="text-lg font-black text-amber-400">R$ 6.000+</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </header>
// //   )
// // }

// import { Ban, Eye, Zap, Users, ArrowDown, AlertTriangle } from 'lucide-react'
// import acnBanner from '../assets/acn-banner.png'

// export default function Hero({ totalApoiadores }) {
//   return (
//     <header id="hero" className="relative flag-bg border-b border-slate-800/80 overflow-hidden py-16 lg:py-24">
//       {/* Background Overlay Symbolism */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Lado Esquerdo: Textos e Chamadas */}
//           <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//             <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
//                 <Ban className="w-3.5 h-3.5" /> SEM POLÍTICO DE ESTIMAÇÃO
//               </span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
//                 <Eye className="w-3.5 h-3.5" /> FISCAL DO NOSSO PRÓPRIO IMPOSTO
//               </span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
//                 <Zap className="w-3.5 h-3.5" /> 100% APARTIDÁRIO
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
//               O movimento de quem <span className="text-amber-500">trabalha e paga a conta.</span>
//             </h1>

//             <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
//               Chega de briga de torcida política por deuses de barro. Enquanto a esquerda e a direita disputam quem rouba mais a sua atenção, o seu suor continua bancando privilégios de quem não produz nada.
//             </p>

//             <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-amber-500 text-slate-200 text-sm sm:text-base font-semibold italic">
//               "Nem Esquerda, Nem Direita: O Dinheiro do Nosso Trabalho."
//             </div>

//             <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//               <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 glow-gold flex items-center gap-4 w-full sm:w-auto">
//                 <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
//                   <Users className="w-6 h-6" />
//                 </div>
//                 <div className="text-left">
//                   <div className="text-2xl font-black font-mono text-amber-400">
//                     {totalApoiadores.toLocaleString('pt-BR')}
//                   </div>
//                   <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Trabalhadores Conectados</div>
//                 </div>
//               </div>

//               <a href="#calculadora" className="w-full sm:w-auto text-center px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2">
//                 <span>VER A REALIDADE DA SUA HORA</span>
//                 <ArrowDown className="w-4 h-4 text-amber-400" />
//               </a>
//             </div>
//           </div>

//           {/* Lado Direito: Cards de Alerta Redesenhados e Profissionais */}
//           <div className="lg:col-span-5 relative">
//             <div className="relative mx-auto max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl overflow-hidden group space-y-4">
              
//               {/* Card Principal: Alerta e Salário Mínimo / Hora */}
//               <div className="relative rounded-2xl overflow-hidden bg-slate-950 flex flex-col justify-between p-6 border border-slate-800 space-y-6">
//                 <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-green-900 via-amber-900 to-red-950"></div>
//                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent animate-pulse"></div>

//                 {/* Topo com Badge Piscando */}
//                 <div className="relative z-10 flex justify-between items-center">
//                   <span className="text-xs font-mono font-black text-red-400 bg-red-950/90 px-3 py-1 rounded-full border border-red-600 animate-pulse tracking-widest shadow-lg shadow-red-600/50 flex items-center gap-1.5">
//                     <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
//                     BRASIL: EM ALERTA
//                   </span>
//                   <AlertTriangle className="w-6 h-6 text-amber-400 animate-bounce" />
//                 </div>

//                 {/* Logotipo ACN Central */}
//                 <div className="relative z-10 text-center space-y-1">
//                   <div className="text-3xl font-black tracking-widest text-white uppercase drop-shadow-md">ACN</div>
//                   <div className="text-[11px] text-slate-400 uppercase tracking-widest font-mono">A Conta É Nossa</div>
//                 </div>

//                 {/* Divisão dos Valores de Referência Bem Destacados */}
//                 <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-center">
//                   <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
//                     <div className="text-[10px] text-slate-400 uppercase font-mono">Salário Mínimo</div>
//                     <div className="text-sm font-black text-slate-200 mt-0.5">R$ 1.518,00</div>
//                   </div>
//                   <div className="bg-red-950/40 p-3 rounded-xl border border-red-900/50">
//                     <div className="text-[10px] text-red-300 uppercase font-mono">Valor da sua Hora</div>
//                     <div className="text-base font-black text-red-400 mt-0.5">R$ 6,90</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Grid Inferior: Impostos Validados (30% a 40%) vs Custo do Político */}
//               <div className="grid grid-cols-2 gap-3 text-center">
//                 <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-red-500/40 transition-all flex flex-col justify-center">
//                   <div className="text-xs text-slate-400 uppercase font-medium">Imposto Embutido</div>
//                   <div className="text-xl font-black text-red-400 mt-1">30% a 40%</div>
//                   <div className="text-[9px] text-slate-500 mt-0.5">Média real no consumo</div>
//                 </div>

//                 <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-center">
//                   <div className="text-xs text-slate-400 uppercase font-medium">Custo 1 Político/Dia</div>
//                   <div className="text-xl font-black text-amber-400 mt-1">R$ 6.000+</div>
//                   <div className="text-[9px] text-slate-500 mt-0.5">Dinheiro do seu suor</div>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   )
// }

import { Ban, Eye, Zap, Users, ArrowDown, AlertTriangle, Scale, TrendingDown } from 'lucide-react'
import acnBanner from '../assets/acn-banner.png'

export default function Hero({ totalApoiadores }) {
  return (
    <header id="hero" className="relative flag-bg border-b border-slate-800/80 overflow-hidden py-16 lg:py-24">
      {/* Fundo com efeito de radar/pontilhado */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Textos e Manifestos */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
                <Ban className="w-3.5 h-3.5" /> SEM POLÍTICO DE ESTIMAÇÃO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Eye className="w-3.5 h-3.5" /> FISCAL DO NOSSO PRÓPRIO IMPOSTO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Zap className="w-3.5 h-3.5" /> 100% APARTIDÁRIO
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              O movimento de quem <span className="text-amber-500">trabalha e paga a conta.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Chega de briga de torcida política por deuses de barro. Enquanto a esquerda e a direita disputam quem rouba mais a sua atenção, o seu suor continua bancando privilégios de quem não produz nada.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-amber-500 text-slate-200 text-sm sm:text-base font-semibold italic">
              "Nós pagamos. Eles precisam prestar contas."
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 glow-gold flex items-center gap-4 w-full sm:w-auto">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black font-mono text-amber-400">
                    {totalApoiadores.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Trabalhadores Conectados</div>
                </div>
              </div>

              <a href="#calculadora" className="w-full sm:w-auto text-center px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2">
                <span>VER A REALIDADE DA SUA HORA</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Card Destacado e Profissional (Reformulado) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl bg-slate-900 border-2 border-red-500/40 p-6 shadow-2xl overflow-hidden group glow-red space-y-5">
              
              {/* Badge de Alerta com Efeito Piscante (Pulse) */}
              <div className="flex justify-between items-center bg-red-950/60 border border-red-600/60 px-4 py-2.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3 animate-ping">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-pulse tracking-widest"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 "></span>
                  </span>
                  <span className="text-xs font-mono font-black text-red-400 tracking-wider ">BRASIL: EM ALERTA NACIONAL</span>
                </div>
                <AlertTriangle className="w-5 h-5 text-amber-400 animate-bounce" />
              </div>


 {/* Divisão dos Valores de Referência Bem Destacados */}
                <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-center">
             
                 <div className="bg-red-950/40 p-3 rounded-xl border border-red-900/50">
                    <div className="text-[10px] text-red-300 uppercase font-mono">Valor diário</div>
                    <div className="text-base font-black text-red-400 mt-0.5">R$ 54,04</div>
                  </div>
                      <div className="bg-red-950/40 p-3 rounded-xl border border-red-900/50">
                    <div className="text-[10px] text-red-300 uppercase font-mono">Valor da sua Hora</div>
                    <div className="text-base font-black text-red-400 mt-0.5">R$ 7,37</div>
                  </div>
              </div>
           





              {/* Bloco Central do Logo / Slogan */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-6 border border-slate-800 text-center space-y-3">
                <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-green-900 via-amber-900 to-red-950"></div>
                <img src={acnBanner} alt="ACN" className="w-24 h-auto object-contain relative z-10 drop-shadow-lg" />
                <div className="relative z-10">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">Salário Mínimo de Referência</div>
                  <div className="text-2xl font-black font-mono text-white mt-1">R$ 1.621,00</div>
                  <div className="text-xs text-red-400 font-mono font-bold mt-0.5">Apenas R$ 7,37 por hora de vida</div>
                </div>
              </div>

              {/* Cards Inferiores: Comparação Brutal e Dados Reais */}
              <div className="grid grid-cols-2 gap-3">
                
                {/* Card 1: Imposto Embutido Real (30% a 40%) */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-red-500/30 flex flex-col justify-between text-center">
                  <div className="text-[11px] font-bold text-slate-400 uppercase flex items-center justify-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5 text-red-400" /> Imposto Embutido
                  </div>
                  <div className="text-xl font-black font-mono text-red-400 my-1">30% a 40%</div>
                  <div className="text-[10px] text-slate-500">Tributos sobre consumo básico</div>
                </div>

                {/* Card 2: Custo 1 Político/Dia */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between text-center">
                  <div className="text-[11px] font-bold text-slate-400 uppercase flex items-center justify-center gap-1">
                    <Scale className="w-3.5 h-3.5 text-amber-400" /> Custo 1 Político
                  </div>
                  <div className="text-xl font-black font-mono text-amber-400 my-1">R$ 6.000+</div>
                  <div className="text-[10px] text-slate-500">Gasto diário por gabinete</div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}