// export default function CriticalAnalysis() {
//   return (
//     <section id="critica" className="py-16 px-4 border-t border-slate-800/80 bg-slate-950/40">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <div className="text-center space-y-2">
//           <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Sem blindagem para ninguém</span>
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">Crítica Rígida Às Duas Bolhas Políticas</h2>
//           <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
//             Análise de fatos e contradições das principais forças políticas do país. O MNC não defende nenhum lado.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Lado Esquerda */}
//           <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
//             <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
//               <span className="w-7 h-7 rounded-md bg-red-950 border border-red-800 text-red-400 font-bold text-xs flex items-center justify-center">PT</span>
//               <h3 className="font-extrabold text-slate-200 text-sm">Análise Crítica: Gestões de Esquerda</h3>
//             </div>
//             <ul className="space-y-3 text-xs text-slate-400 leading-relaxed">
//               <li className="p-3 bg-slate-950 rounded-xl border border-slate-800">
//                 <strong className="text-slate-200 block mb-1">🔴 Histórico de Corrupção & Aparelhamento:</strong>
//                 Grandes escândalos históricos de desvios, uso da máquina pública para barganha política e inchaço do funcionalismo sem ganho de eficiência real.
//               </li>
//               <li className="p-3 bg-slate-950 rounded-xl border border-slate-800">
//                 <strong className="text-slate-200 block mb-1">🔴 Política Econômica & Gastos Públicos:</strong>
//                 Foco no aumento constante de impostos sobre o consumo, expansão do endividamento público e inflação velada que corrói o salário do mais pobre.
//               </li>
//             </ul>
//           </div>

//           {/* Lado Direita */}
//           <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
//             <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
//               <span className="w-7 h-7 rounded-md bg-blue-950 border border-blue-800 text-blue-400 font-bold text-xs flex items-center justify-center">PL</span>
//               <h3 className="font-extrabold text-slate-200 text-sm">Análise Crítica: Gestões de Direita</h3>
//             </div>
//             <ul className="space-y-3 text-xs text-slate-400 leading-relaxed">
//               <li className="p-3 bg-slate-950 rounded-xl border border-slate-800">
//                 <strong className="text-slate-200 block mb-1">🔵 Fisiologismo com o Velho Centrão:</strong>
//                 Contradição entre o discurso "anticorrupção" e a liberação recorde de orçamentos secretos e loteamento de cargos públicos.
//               </li>
//               <li className="p-3 bg-slate-950 rounded-xl border border-slate-800">
//                 <strong className="text-slate-200 block mb-1">🔵 Contradição do Discurso Liberal:</strong>
//                 Promessa de Estado mínimo enquanto aprovou aumentos de fundos eleitorais e privilégios para carreiras específicas da máquina pública.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { AlertCircle, TrendingUp, FileText } from 'lucide-react'

export default function CriticalAnalysis() {
  return (
    <section id="apartidario" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-red-500 tracking-widest mb-2">Sem Blindagem Para Ninguém</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white">Crítica Rígida Às Duas Bolhas Políticas</h3>
          <p className="mt-4 text-slate-400">
            Analise os fatos e contrapontos das principais forças políticas do país. O MNC não defende nenhum lado porque o rombo sempre cai nas costas de quem trabalha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <span className="w-9 h-9 rounded-xl bg-red-950 border border-red-800 text-red-400 font-bold text-sm flex items-center justify-center">PT</span>
              <div>
                <h4 className="text-lg font-black text-white">Análise Crítica: Gestões de Esquerda</h4>
                <p className="text-xs text-slate-400">Aumento do Aparelhamento & Impostos sobre Consumo</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Histórico de Corrupção & Aparelhamento</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Grandes escândalos históricos de desvios, uso de estatais para barganha política e inchamento do funcionalismo de topo com cargos comissionados.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-red-400">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>Política Econômica & Gastos Públicos</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Foco no aumento do gasto estatal sem cortar privilégios, resultando em mais déficit, necessidade de aumento contínuo de tributos e taxação das compras e consumo da população.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-red-400">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>Promessas de Campanha Vazia</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Discursos de defender os pobres enquanto na prática eleva os impostos indiretos (que pesam mais para os mais pobres) e financia alianças com o Centrão.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <span className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-800 text-blue-400 font-bold text-sm flex items-center justify-center">PL</span>
              <div>
                <h4 className="text-lg font-black text-white">Análise Crítica: Gestões de Direita</h4>
                <p className="text-xs text-slate-400">Contradição Liberal & Fisiologismo do Fundo Eleitoral</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Fisiologismo com o Velho Centrão</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Promessa de acabar com a "velha política" desfeita ao loteador orçamentos secretos (RP9), liberação bilionária de emendas e alianças com velhos caciques do poder.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>Contradição do Discurso Liberal</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Defesa verbal do Estado mínimo enquanto sancionou aumentos no Fundo Eleitoral bilionário cobrado do pagador de impostos e manteve regalias corporativas das forças armadas e topo do judiciário.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>Fanatismo & Fanfarronice</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Foco excessivo em guerras culturais e ideológicas para inflamar a militância enquanto os problemas estruturais de tributação sobre o trabalhador continuam intocados.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}