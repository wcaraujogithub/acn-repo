import { useState } from 'react'
import { Calculator as CalcIcon, Utensils, Bus, Receipt } from 'lucide-react'

export default function Calculator() {
  const [marmita, setMarmita] = useState(25)
  const [transporte, setTransporte] = useState(12)
  const [impostos, setImpostos] = useState(18)

  const totalGasto = Number(marmita) + Number(transporte) + Number(impostos)
  const horasDevoradas = (totalGasto / 6.90).toFixed(2)
  const porcentagemDia = Math.round((totalGasto / 50.60) * 100)

  return (
    <section id="calculadora" className="py-20 bg-slate-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-amber-400 tracking-widest mb-2">A Conta Real Do Seu Suor</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white">Quanto Vale a Sua Hora De Vida?</h3>
          <p className="mt-4 text-slate-400">
            O governo te devolve trocadilhos enquanto cobra impostos altíssimos em tudo que você consome. Faça os cálculos exatos baseados no salário mínimo de referência nacional (R$ 1.621,00).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <CalcIcon className="w-5 h-5 text-amber-400" />
                <span>Divisão Base do Salário Mínimo</span>
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold text-white">Valor por dia (30 dias)</div>
                    <div className="text-xs text-slate-400">Contando finais de semana</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black font-mono text-amber-400">R$ 54,04</div>
                    <div className="text-[10px] text-slate-500">/ dia</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold text-white">Valor por dia útil (22 dias)</div>
                    <div className="text-xs text-slate-400">Média de dias trabalhados</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black font-mono text-amber-400">R$ 73,68</div>
                    <div className="text-[10px] text-slate-500">/ dia útil</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 bg-amber-500/5 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-white">Valor por hora (220h/mês)</div>
                    <div className="text-xs text-slate-400">Jornada padrão de trabalho</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black font-mono text-amber-400">R$ 7,37</div>
                    <div className="text-[10px] text-amber-400/80 font-bold">/ HORA</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 p-3 rounded-lg bg-slate-950/60 border border-slate-800 italic">
                *Nota: Enquanto você recebe R$ 7,37 por hora para manter sua família de pé, os impostos devoram de 30% a 40% de todo produto comprado.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-xl font-black text-white">Simulador do Custo de Vida Diário</h4>
                  <p className="text-xs text-slate-400">Ajuste os valores dos seus gastos e veja quantas horas de trabalho eles engolem.</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  BASE: R$ 7,37/HORA
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-slate-300 flex items-center gap-2"><Utensils className="w-4 h-4 text-amber-400" /> Refeição/Almoço Diário:</span>
                    <span className="font-mono font-bold text-amber-400">R$ {marmita},00</span>
                  </div>
                  <input type="range" min="0" max="60" value={marmita} onChange={e => setMarmita(e.target.value)} className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-slate-300 flex items-center gap-2"><Bus className="w-4 h-4 text-amber-400" /> Transporte Diário (Ida e Volta):</span>
                    <span className="font-mono font-bold text-amber-400">R$ {transporte},00</span>
                  </div>
                  <input type="range" min="0" max="30" value={transporte} onChange={e => setTransporte(e.target.value)} className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-slate-300 flex items-center gap-2"><Receipt className="w-4 h-4 text-red-400" /> Imposto Embutido em Compras / Energia (Proporção Diária):</span>
                    <span className="font-mono font-bold text-red-400">R$ {impostos},00</span>
                  </div>
                  <input type="range" min="0" max="40" value={impostos} onChange={e => setImpostos(e.target.value)} className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-red-500" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">Gasto Diário Total Simulado</div>
                    <div className="text-2xl font-black font-mono text-white mt-1">R$ {totalGasto},00</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">Horas de Trabalho Devoradas</div>
                    <div className="text-2xl font-black font-mono text-red-400 mt-1">{horasDevoradas} horas</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-400">Comprometimento do Diário (R$ 54,04):</span>
                    <span className="text-red-400 font-mono font-bold">{porcentagemDia}%</span>
                  </div>
                  {/* Barra de progresso com largura limitada a 100% no visual e cor sólida/gradiente em estilo inline */}
                  <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div 
                      className="h-full rounded-full transition-all duration-300" 
                      style={{ 
                        width: `${Math.min(porcentagemDia, 100)}%`,
                        background: 'linear-gradient(90deg, #f59e0b 0%, #dc2626 100%)'
                      }}
                    ></div>
                  </div>
                </div>

                <p className="text-xs text-red-400 font-bold text-center">
                  {porcentagemDia >= 100 
                    ? 'ALERTA: Seus gastos básicos diários já estouram 100% do seu salário diário de referência!' 
                    : 'Você já gastou grande parte do seu dia de trabalho antes mesmo de pagar o aluguel, remédios ou vestuário.'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}