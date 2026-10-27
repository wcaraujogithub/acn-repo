// import { useState } from 'react'
// import { supabase } from '../supabaseClient'
// import { Flag, CheckCircle2, Lock } from 'lucide-react'

// export default function SignupForm({ onApoiadorAdicionado }) {
//   const [nome, setNome] = useState('')
//   const [estado, setEstado] = useState('São Paulo')
//   const [email, setEmail] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!nome || !email) {
//       alert('Por favor, preencha o seu nome e e-mail.')
//       return
//     }

//     setLoading(true)
//     const { error } = await supabase
//       .from('apoiadores')
//       .insert([{ nome, estado, email }])

//     setLoading(false)

//     if (error) {
//       alert('Erro ao registrar adesão. Tente novamente.')
//       console.error(error)
//     } else {
//       alert('Adesão registrada com sucesso no MNC!')
//       setNome('')
//       setEmail('')
//       if (onApoiadorAdicionado) onApoiadorAdicionado()
//     }
//   }

//   return (
//     <section id="apoie" className="py-20 bg-slate-950 relative border-t border-slate-900">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          
//           <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400 mb-6 shadow-lg">
//             <Flag className="w-7 h-7" />
//           </div>

//           <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
//             <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
//               Junte-se Ao Movimento Nacional Do Contribuinte
//             </h2>
//             <p className="text-sm text-slate-400 leading-relaxed">
//               Não pedimos dinheiro, não pedimos voto. Pedimos a sua voz para mostrar para a classe política que o trabalhador brasileiro acordou.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
//                   Seu Nome / Apelido:
//                 </label>
//                 <input
//                   type="text"
//                   value={nome}
//                   onChange={e => setNome(e.target.value)}
//                   placeholder="Ex: Carlos Silva"
//                   className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-slate-100 text-sm outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
//                   Seu Estado:
//                 </label>
//                 <select
//                   value={estado}
//                   onChange={e => setEstado(e.target.value)}
//                   className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-slate-100 text-sm outline-none transition cursor-pointer"
//                 >
//                   <option value="São Paulo">São Paulo</option>
//                   <option value="Goiás">Goiás</option>
//                   <option value="Minas Gerais">Minas Gerais</option>
//                   <option value="Rio de Janeiro">Rio de Janeiro</option>
//                   <option value="Bahia">Bahia</option>
//                   <option value="Outro">Outro Estado</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
//                 Seu E-mail (Para Alertas e Desabafos):
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 placeholder="seuemail@exemplo.com"
//                 className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-slate-100 text-sm outline-none transition"
//               />
//             </div>

//             {/* Botão com cor sólida vibrante e sem transparência nas pontas */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#f59e0b] hover:bg-[#d97706] font-black text-slate-950 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
//             >
//               <CheckCircle2 className="w-5 h-5" />
//               <span>{loading ? 'REGISTRANDO...' : 'CONFIRMAR MINHA ADESÃO AO MNC'}</span>
//             </button>
//           </form>

//           <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
//             <Lock className="w-3.5 h-3.5 text-slate-400" />
//             <span>Respeitamos sua privacidade. Seus dados nunca serão vendidos ou repassados.</span>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


import { useState } from 'react'
import { ShieldCheck, Flag } from 'lucide-react'
import { supabase } from '../supabaseClient'
import acnBanner from '../assets/acn-banner.png' // Import da imagem oficial

export default function SignupForm({ onApoiadorAdicionado }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [estado, setEstado] = useState('São Paulo')
  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState('')

 const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setErro('')

    const { error } = await supabase
      .from('apoiadores')
      .insert([{ nome, email, estado }])

    setEnviando(false)

    if (error) {
      setErro('Erro ao registrar apoio. Tente novamente.')
    } else {
      setSucesso(true)
      setNome('')
      setEmail('')
      if (onApoiadorAdicionado) onApoiadorAdicionado()

      // ⏱️ Retorna para o formulário automaticamente após 5 segundos
      setTimeout(() => {
        setSucesso(false)
      }, 5000)
    }
  }

  return (
<section id="apoie" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Principal com a Bandeira de Fundo Ocupando Todo o Interior */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Camada da Imagem de Fundo Ocupando Todo o Card com opasidad a naitaudan pay bassit */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.25] mix-blend-luminosity pointer-events-none"
            style={{ backgroundImage: `url(${acnBanner})` }}
          ></div>
          {/* Overlay a napabassitan ti kinasisit na tapno lumabas ti disenyo ti banner */}
          <div className="absolute inset-0 bg-slate-950/75 pointer-events-none"></div>

          {/* Conteúdo do Formulário */}
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flag className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Junte-se Ao Movimento A Conta É Nossa
              </h2>
              <p className="text-sm text-slate-300 font-medium">
                Não pedimos dinheiro, não pedimos voto. Pedimos a sua voz para mostrar para a classe política que o trabalhador brasileiro acordou.
              </p>
            </div>

            {sucesso ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-2">
                <h3 className="text-lg font-bold">Adesão Registrada com Sucesso!</h3>
                <p className="text-sm text-slate-300">Obrigado por fazer parte de quem trabalha e paga a conta. Sua voz foi somada ao movimento.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {erro && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold text-center">
                    {erro}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Seu Nome / Apelido:</label>
                    <input 
                      type="text" 
                      required 
                      value={nome} 
                      onChange={e => setNome(e.target.value)} 
                      placeholder="Ex: Carlos Silva" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Seu Estado:</label>
                    <select 
                      value={estado} 
                      onChange={e => setEstado(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-amber-500 text-sm transition-colors cursor-pointer"
                    >
                      {['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'].map(uf => (
                        <option key={uf} value={uf}>{uf}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Seu E-mail (Para alertas e desabafos):</label>
                  <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="seuemail@exemplo.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={enviando}
                  className="w-full py-4 rounded-xl font-black text-slate-950 transition-all shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-2"
                  style={{ background: 'linear-gradient(90deg, #f59e0b 0%, #dc2626 100%)', color: '#020617' }}
                >
                  <ShieldCheck className="w-5 h-5 text-slate-950" />
                  <span>{enviando ? 'REGISTRANDO...' : 'CONFIRMAR MINHA ADESÃO AO ACN'}</span>
                </button>
              </form>
            )}

            <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-2">
              <span>🔒 Respeitamos sua privacidade. Seus dados nunca serão vendidos ou repassados.</span>
            </div>

          </div>
        </div>

      </div>
    </section>



  
  )
}
