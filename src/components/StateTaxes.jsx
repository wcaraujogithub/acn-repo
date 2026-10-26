// import { useState } from 'react'

// export default function StateTaxes() {
//   const [estado, setEstado] = useState('SP')

//   const dadosEstados = {
//     SP: { nome: 'São Paulo', arrecadacao: 'R$ 850 Bilhões', perCapita: 'R$ 18.800', retorno: 'Péssimo / Burocrático' },
//     RJ: { nome: 'Rio de Janeiro', arrecadacao: 'R$ 290 Bilhões', perCapita: 'R$ 17.000', retorno: 'Crítico / Violência' },
//     MG: { nome: 'Minas Gerais', arrecadacao: 'R$ 210 Bilhões', perCapita: 'R$ 10.200', retorno: 'Estradas Sucateadas' },
//     GO: { nome: 'Goiás', arrecadacao: 'R$ 85 Bilhões', perCapita: 'R$ 12.000', retorno: 'Regular / Desequilibrado' },
//     BA: { nome: 'Bahia', arrecadacao: 'R$ 95 Bilhões', perCapita: 'R$ 6.700', retorno: 'Insuficiente' }
//   }

//   const e = dadosEstados[estado] || dadosEstados['SP']

//   return (
//     <section id="impostos" className="py-16 px-4 border-t border-slate-800/80">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <div className="text-center space-y-2">
//           <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Impostômetro Regional</span>
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">Arrecadação De Impostos Por Estado</h2>
//           <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
//             O Brasil arrecada trilhões em impostos todos os anos. Selecione um estado e veja a estimativa.
//           </p>
//         </div>

//         <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
//           <div>
//             <label className="block text-xs uppercase font-bold text-slate-400 mb-2">Selecione o Estado:</label>
//             <select
//               value={estado}
//               onChange={evt => setEstado(evt.target.value)}
//               className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white text-sm focus:border-yellow-500 outline-none"
//             >
//               <option value="SP">São Paulo (SP)</option>
//               <option value="RJ">Rio de Janeiro (RJ)</option>
//               <option value="MG">Minas Gerais (MG)</option>
//               <option value="GO">Goiás (GO)</option>
//               <option value="BA">Bahia (BA)</option>
//             </select>
//           </div>

//           <div className="space-y-3">
//             <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
//               <span className="text-xs text-slate-400">Arrecadação Estimada Estado/União:</span>
//               <span className="text-lg font-black text-yellow-400">{e.arrecadacao}</span>
//             </div>
//             <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
//               <span className="text-xs text-slate-400">Imposto Médio Pago por Cidadão/Ano:</span>
//               <span className="text-lg font-black text-red-400">{e.perCapita}</span>
//             </div>
//             <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
//               <span className="text-xs text-slate-400">Qualidade de Retorno Percebida:</span>
//               <span className="text-xs font-bold text-slate-200 bg-red-950/60 px-3 py-1 rounded-full border border-red-800">{e.retorno}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function StateTaxes() {
  const [estado, setEstado] = useState('SP')

  const dadosEstados = {
    SP: { nome: 'São Paulo (SP)', arrecadacao: 'R$ 850 Bilhões', perCapita: 'R$ 18.900', retorno: 'Insuficiente' },
    RJ: { nome: 'Rio de Janeiro (RJ)', arrecadacao: 'R$ 290 Bilhões', perCapita: 'R$ 17.200', retorno: 'Crítico / Violência' },
    MG: { nome: 'Minas Gerais (MG)', arrecadacao: 'R$ 210 Bilhões', perCapita: 'R$ 10.500', retorno: 'Ruim' },
    GO: { nome: 'Goiás (GO)', arrecadacao: 'R$ 85 Bilhões', perCapita: 'R$ 12.100', retorno: 'Regular' },
    BA: { nome: 'Bahia (BA)', arrecadacao: 'R$ 95 Bilhões', perCapita: 'R$ 6.800', retorno: 'Insuficiente' }
  }

  const e = dadosEstados[estado]

  const chartData = {
    labels: ['Custo Maquina/Politicos (%)', 'Dívida & Encargos (%)', 'Segurança/Infraestrutura (%)', 'Saúde & Educação Real (%)'],
    datasets: [
      {
        data: [42, 28, 18, 12],
        backgroundColor: ['#DC2626', '#D97706', '#2563EB', '#10B981'],
        borderWidth: 0,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    }
  }

  return (
    <section id="impostometro" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-amber-400 tracking-widest mb-2">Impostômetro Regional</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white">Arrecadação De Impostos Por Estado</h3>
          <p className="mt-4 text-slate-400">
            O Brasil já arrecadou mais de R$ 2,5 Trilhões em impostos no último ano. Selecione seu estado e veja quanto é retirado da população e o nível de retorno percebido.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-400 mb-2">SELECIONE O ESTADO:</label>
                <select
                  value={estado}
                  onChange={evt => setEstado(evt.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3.5 text-white text-sm focus:border-amber-500 outline-none cursor-pointer"
                >
                  <option value="SP">São Paulo (SP)</option>
                  <option value="RJ">Rio de Janeiro (RJ)</option>
                  <option value="MG">Minas Gerais (MG)</option>
                  <option value="GO">Goiás (GO)</option>
                  <option value="BA">Bahia (BA)</option>
                </select>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <div>
                  <div className="text-xs text-slate-400">Arrecadação Estimada no Estado (Ano Vigente):</div>
                  <div className="text-3xl font-black font-mono text-amber-400 mt-1">{e.arrecadacao}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Carga Per Capita/Ano</div>
                    <div className="text-base font-black font-mono text-white mt-0.5">{e.perCapita}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Qualidade Retorno (SUS/Escolas)</div>
                    <div className="text-sm font-bold text-red-400 mt-1">{e.retorno}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white">Distribuição Estimada de Gastos do Imposto Recolhido</h4>
                <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  ESTADO: {estado}
                </span>
              </div>

              <div className="h-64 relative flex items-center justify-center">
                <Doughnut data={chartData} options={chartOptions} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-red-600"></span><span className="text-slate-300">Custo Maquina/Politicos (%)</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-amber-600"></span><span className="text-slate-300">Dívida & Encargos (%)</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-blue-600"></span><span className="text-slate-300">Segurança/Infraestrutura (%)</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-500"></span><span className="text-slate-300">Saúde & Educação Real (%)</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}