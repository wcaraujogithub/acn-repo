
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Pillars from './components/Pillars'
import PoliticianCosts from './components/PoliticianCosts'
import StateTaxes from './components/StateTaxes'
import CriticalAnalysis from './components/CriticalAnalysis'
import SignupForm from './components/SignupForm'
import Enquetes from './components/Enquetes'
import DestaqueEnquete from './components/DestaqueEnquete'
import Questionarios from './components/Questionarios'
import Historia from './components/Historia'
import { supabase } from './supabaseClient'

// Import da imagem oficial da ACN
import acnBanner from './assets/acn-banner.png'

export default function App() {
  const [totalApoiadores, setTotalApoiadores] = useState(143232)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

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
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 custom-scrollbar overflow-x-hidden">
      
      {/* 🎨 TESTE: Fundo Fixo Gigante que Acompanha o Scroll */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-center bg-no-repeat bg-contain opacity-[0.07] transition-opacity"
        style={{ backgroundImage: `url(${acnBanner})` }}
      ></div>

      {/* Conteúdo da Aplicação */}
      <div className="relative z-10">
        <Header />
        <main>
          {currentPath.startsWith('/enquetes') ? (
            <Enquetes />
          ) : currentPath.startsWith('/questionarios') ? (
            <Questionarios />
          ) : currentPath.startsWith('/historia') ? (
            <Historia />
          ) : (
            <>
              <Hero totalApoiadores={totalApoiadores} />
              <DestaqueEnquete />
              <Calculator />
              <Pillars />
              <PoliticianCosts />
              <StateTaxes />
              <CriticalAnalysis />
              <SignupForm onApoiadorAdicionado={fetchContador} />
            </>
          )}
        </main>

        {/* <footer className="py-12 text-center border-t border-slate-900 bg-slate-950/90 backdrop-blur-sm space-y-3 relative z-10">
          <div className="text-sm font-semibold text-slate-400">
            ACN — Movimento Popular do Contribuinte
          </div>
          <p className="text-xs text-slate-500 max-w-xl mx-auto px-4 leading-relaxed">
            Este movimento é uma iniciativa virtual e cidadã de conscientização econômica e fiscal. Não arrecadamos fundos partidários e não apoiamos candidatos específicos.
          </p>
          <div className="text-xs text-slate-600 pt-2 font-mono">
            © 2026 ACN. A Conta É Nossa. Nós pagamos. Eles precisam prestar contas.
          </div>
        </footer> */}

   {/* Rodapé com a Bandeira Oficial da ACN alinhada à esquerda do texto */}
      <footer className="relative bg-slate-950 border-t border-slate-900 py-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Imagem Oficial da ACN posicionada à esquerda */}
            <div className="flex-shrink-0">
              <img 
                src={acnBanner} 
                alt="Arte ACN A Conta É Nossa" 
                className="w-36 sm:w-44 h-auto object-contain rounded-xl shadow-lg border border-slate-800/80"
              />
            </div>

            {/* Conteúdo Textual logo ao lado */}
            <div className="space-y-2.5 text-center md:text-left">
              <div className="text-base font-black tracking-tight text-white">
                ACN — Movimento Popular do Contribuinte
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                Este movimento é uma iniciativa virtual e cidadã de conscientização econômica e fiscal. Não arrecadamos fundos partidários e não apoiamos candidatos específicos.
              </p>
              
              <div className="text-xs text-amber-500 font-mono font-bold">
                © 2026 ACN. A Conta É Nossa. Nós pagamos. Eles precisam prestar contas.
              </div>

              {/* Linha de Direitos Reservados Adicionada */}
              <div className="text-[11px] text-slate-500 pt-1">
                Todos os direitos reservados.
              </div>
            </div>

          </div>
        </div>
      </footer>
      </div>
    </div>

    
  )
}