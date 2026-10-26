
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Pillars from './components/Pillars'
import PoliticianCosts from './components/PoliticianCosts'
import StateTaxes from './components/StateTaxes'
import CriticalAnalysis from './components/CriticalAnalysis'
import SignupForm from './components/SignupForm'
import { supabase } from './supabaseClient'

export default function App() {
  const [totalApoiadores, setTotalApoiadores] = useState(143232)

  const fetchContador = async () => {
    const { count, error } = await supabase
      .from('apoiadores')
      .select('*', { count: 'exact', head: true })

    if (!error && count !== null) {
      setTotalApoiadores(143232 + count)
    }
  }

  useEffect(() => {
    fetchContador()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 custom-scrollbar">
      <Header />
      <main>
        <Hero totalApoiadores={totalApoiadores} />
        <Calculator />
        <Pillars />
        <PoliticianCosts />
        <StateTaxes />
        <CriticalAnalysis />
        <SignupForm onApoiadorAdicionado={fetchContador} />
      </main>
<footer className="py-12 text-center border-t border-slate-900 bg-slate-950 space-y-3">
        <div className="text-sm font-semibold text-slate-400">
          MNC — Movimento Nacional do Contribuinte
        </div>
        <p className="text-xs text-slate-500 max-w-xl mx-auto px-4 leading-relaxed">
          Este movimento é uma iniciativa virtual e cidadã de conscientização econômica e fiscal. Não arrecadamos fundos partidários e não apoiamos candidatos específicos.
        </p>
        <div className="text-xs text-slate-600 pt-2 font-mono">
          © 2026 MNC. O movimento de quem trabalha e paga a conta.
        </div>
      </footer>
    </div>
  )
}