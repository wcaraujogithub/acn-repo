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
          
//           {/* Ícone de Bandeira Superior */}
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
//             {/* Grid de 2 colunas para Nome e Estado (Idêntico ao HTML original) */}
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

//             {/* Botão com gradiente ativo visível e ícone */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 hover:from-amber-400 hover:to-red-500 font-black text-slate-950 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
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
import { supabase } from '../supabaseClient'
import { Flag, CheckCircle2, Lock } from 'lucide-react'

export default function SignupForm({ onApoiadorAdicionado }) {
  const [nome, setNome] = useState('')
  const [estado, setEstado] = useState('São Paulo')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!nome || !email) {
      alert('Por favor, preencha o seu nome e e-mail.')
      return
    }

    setLoading(true)
    const { error } = await supabase
      .from('apoiadores')
      .insert([{ nome, estado, email }])

    setLoading(false)

    if (error) {
      alert('Erro ao registrar adesão. Tente novamente.')
      console.error(error)
    } else {
      alert('Adesão registrada com sucesso no MNC!')
      setNome('')
      setEmail('')
      if (onApoiadorAdicionado) onApoiadorAdicionado()
    }
  }

  return (
    <section id="apoie" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          
          <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400 mb-6 shadow-lg">
            <Flag className="w-7 h-7" />
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Junte-se Ao Movimento Nacional Do Contribuinte
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Não pedimos dinheiro, não pedimos voto. Pedimos a sua voz para mostrar para a classe política que o trabalhador brasileiro acordou.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Seu Nome / Apelido:
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-slate-100 text-sm outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Seu Estado:
                </label>
                <select
                  value={estado}
                  onChange={e => setEstado(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-slate-100 text-sm outline-none transition cursor-pointer"
                >
                  <option value="São Paulo">São Paulo</option>
                  <option value="Goiás">Goiás</option>
                  <option value="Minas Gerais">Minas Gerais</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Bahia">Bahia</option>
                  <option value="Outro">Outro Estado</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Seu E-mail (Para Alertas e Desabafos):
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-slate-100 text-sm outline-none transition"
              />
            </div>

            {/* Botão com cor sólida vibrante e sem transparência nas pontas */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f59e0b] hover:bg-[#d97706] font-black text-slate-950 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>{loading ? 'REGISTRANDO...' : 'CONFIRMAR MINHA ADESÃO AO MNC'}</span>
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Respeitamos sua privacidade. Seus dados nunca serão vendidos ou repassados.</span>
          </div>

        </div>
      </div>
    </section>
  )
}