// import { useState } from 'react'

// export default function PoliticianCosts() {
//   const [cargo, setCargo] = useState('federal')

//   const dadosCargos = {
//     federal: {
//       nome: 'Deputado Federal',
//       custoMes: 'R$ 220.000,00',
//       custoDia: 'R$ 7.330,00 / DIA',
//       equivalente: '145 Salários Mínimos/mês',
//       salario: 'R$ 44.008,52 / mês',
//       verba: 'Aprox. R$ 120.000,00 / mês',
//       cota: 'Aprox. R$ 30.000,00 a R$ 45.000,00 / mês',
//       plano: 'Ilimitado / Cobertura Integral'
//     },
//     governador: {
//       nome: 'Governador de Estado',
//       custoMes: 'R$ 180.000,00',
//       custoDia: 'R$ 6.000,00 / DIA',
//       equivalente: '118 Salários Mínimos/mês',
//       salario: 'R$ 35.000,00 a R$ 42.000,00 / mês',
//       verba: 'Residência Oficial + Seguranças + Frota',
//       cota: 'Verbas Indenizatórias de Representação',
//       plano: 'Atendimento VIP de Saúde'
//     },
//     presidente: {
//       nome: 'Presidente da República',
//       custoMes: 'R$ 1.200.000,00+',
//       custoDia: 'R$ 40.000,00+ / DIA',
//       equivalente: '790+ Salários Mínimos/mês',
//       salario: 'R$ 44.008,52 / mês',
//       verba: 'Cartão Corporativo sem Limite Rígido Visível',
//       cota: 'Aeronaves da FAB + Palácios Oficiais',
//       plano: 'Equipe Médica Dedicada 24h'
//     }
//   }

//   const c = dadosCargos[cargo]

//   return (
//     <section id="politicos" className="py-16 px-4 border-t border-slate-800/80 bg-slate-950/40">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <div className="text-center space-y-2">
//           <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">O abismo entre o povo e o poder</span>
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">Quanto Custa Cada Cargo Político?</h2>
//           <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
//             Enquanto o trabalhador ganha R$ 6,90 por hora, veja o montante repassado aos gabinetes públicos no Brasil.
//           </p>
//         </div>

//         {/* Seletor Móvel/Desktop */}
//         <div className="flex justify-center gap-2 flex-wrap">
//           <button
//             onClick={() => setCargo('federal')}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition ${cargo === 'federal' ? 'bg-yellow-500 text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}
//           >
//             Deputado Federal
//           </button>
//           <button
//             onClick={() => setCargo('governador')}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition ${cargo === 'governador' ? 'bg-yellow-500 text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}
//           >
//             Governador de Estado
//           </button>
//           <button
//             onClick={() => setCargo('presidente')}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition ${cargo === 'presidente' ? 'bg-yellow-500 text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}
//           >
//             Presidente / Ministros
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl">
//           <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
//             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Cargo: {c.nome}</span>
//             <div className="text-3xl font-black text-red-500">{c.custoMes}</div>
//             <div className="text-sm font-bold text-yellow-400">{c.custoDia}</div>
//             <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
//               ⚡ Equivalente a <strong className="text-yellow-400">{c.equivalente}</strong> por mês de um trabalhador.
//             </div>
//           </div>

//           <div className="lg:col-span-7 space-y-3 text-xs">
//             <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Composição dos Custos do Gabinete:</h4>
//             <div className="space-y-2">
//               <div className="flex justify-between p-2.5 bg-slate-950/60 rounded-lg">
//                 <span className="text-slate-400">Salário Bruto:</span>
//                 <span className="font-bold text-slate-200">{c.salario}</span>
//               </div>
//               <div className="flex justify-between p-2.5 bg-slate-950/60 rounded-lg">
//                 <span className="text-slate-400">Verba de Gabinete (Assessores):</span>
//                 <span className="font-bold text-slate-200">{c.verba}</span>
//               </div>
//               <div className="flex justify-between p-2.5 bg-slate-950/60 rounded-lg">
//                 <span className="text-slate-400">Cota COTA / Passagens / Auxílios:</span>
//                 <span className="font-bold text-slate-200">{c.cota}</span>
//               </div>
//               <div className="flex justify-between p-2.5 bg-slate-950/60 rounded-lg">
//                 <span className="text-slate-400">Plano de Saúde Privado:</span>
//                 <span className="font-bold text-slate-200">{c.plano}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




import { useState } from 'react'
import { Scale } from 'lucide-react'

export default function PoliticianCosts() {
  const [cargo, setCargo] = useState('deputado')

  const dadosCargos = {
    deputado: {
      titulo: 'CARGO: DEPUTADO FEDERAL',
      custoMes: 'R$ 180.000,00',
      custoDia: 'R$ 6.000,00 / DIA',
      equivalente: '118 Salários Mínimos',
      salario: 'R$ 44.008,52 / mês',
      verba: 'Aprox. R$ 125.479,00 / mês',
      cota: 'Aprox. R$ 35.000,00 a R$ 45.000,00 / mês',
      auxilio: 'R$ 4.253,00 / mês'
    },
    senador: {
      titulo: 'CARGO: SENADOR DA REPÚBLICA',
      custoMes: 'R$ 240.000,00',
      custoDia: 'R$ 8.000,00 / DIA',
      equivalente: '158 Salários Mínimos',
      salario: 'R$ 44.008,52 / mês',
      verba: 'Aprox. R$ 180.000,00 / mês',
      cota: 'Aprox. R$ 45.000,00 / mês',
      auxilio: 'R$ 5.500,00 / mês'
    },
    presidente: {
      titulo: 'CARGO: PRESIDENTE / MINISTROS',
      custoMes: 'R$ 1.200.000,00+',
      custoDia: 'R$ 40.000,00+ / DIA',
      equivalente: '790+ Salários Mínimos',
      salario: 'R$ 44.008,52 / mês',
      verba: 'Cartão Corporativo & Estrutura da Presidência',
      cota: 'Aeronaves da FAB & Seguranças',
      auxilio: 'Residência Oficial + Servidores'
    },
    vereador: {
      titulo: 'CARGO: DEPUTADO ESTADUAL / VEREADOR',
      custoMes: 'R$ 90.000,00',
      custoDia: 'R$ 3.000,00 / DIA',
      equivalente: '59 Salários Mínimos',
      salario: 'R$ 25.000,00 / mês',
      verba: 'Aprox. R$ 50.000,00 / mês',
      cota: 'Verba de Gabinete e Assessoramento',
      auxilio: 'Auxílio Transporte/Paletó'
    }
  }

  const c = dadosCargos[cargo]

  return (
    <section id="custo-politico" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-red-500 tracking-widest mb-2">O Abismo Entre O Povo E O Poder</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white">Quanto Custa Cada Cargo Político?</h3>
          <p className="mt-4 text-slate-400">
            Enquanto o trabalhador ganha R$ 6,90 por hora, veja o montante estimado repassado para manter os luxos e estruturas dos gabinetes dos representantes públicos no Brasil.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-slate-800 pb-4">
            <button onClick={() => setCargo('deputado')} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${cargo === 'deputado' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:text-white'}`}>
              Deputado Federal
            </button>
            <button onClick={() => setCargo('senador')} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${cargo === 'senador' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:text-white'}`}>
              Senador da República
            </button>
            <button onClick={() => setCargo('presidente')} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${cargo === 'presidente' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:text-white'}`}>
              Presidente / Ministros
            </button>
            <button onClick={() => setCargo('vereador')} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${cargo === 'vereador' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:text-white'}`}>
              Deputado Estadual / Vereador
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{c.titulo}</span>
                
                <div>
                  <div className="text-xs text-slate-400">Custo Total Estimado / Mês</div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-red-400">{c.custoMes}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Inclui subsídio, cota parlamentar, verba de gabinete e auxílios</div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-xs text-slate-400">Custo Estimado por Dia de Trabalho</div>
                  <div className="text-xl font-black font-mono text-amber-400">{c.custoDia}</div>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                  <Scale className="w-8 h-8 text-red-400 shrink-0" />
                  <div className="text-xs text-slate-300">
                    Equivalente a <strong className="text-amber-400">{c.equivalente}</strong> inteiros por mês de um trabalhador.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Composição dos Custos do Gabinete:</h4>
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-300">Subsídio (Salário Bruto)</span>
                <span className="font-mono font-bold text-amber-400">{c.salario}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-300">Verba de Gabinete (Até 25 assessores)</span>
                <span className="font-mono font-bold text-amber-400">{c.verba}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-300">Cota Parlamentar (Passagens, Correios, Combustível)</span>
                <span className="font-mono font-bold text-amber-400">{c.cota}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-300">Auxílio-Moradia / Apartamento Funcional</span>
                <span className="font-mono font-bold text-amber-400">{c.auxilio}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}