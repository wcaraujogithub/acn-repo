// export default function Pillars() {
//   const pilares = [
//     {
//       num: '01',
//       title: 'A Urgência da Fome vs. O Futuro',
//       desc: 'Quem não tem o que comer hoje aceita qualquer esmola. O sistema mantém o povo no limite da miséria para que R$ 200 de auxílio pareçam salvação, destruindo a visão de futuro e independência.',
//       tag: 'Imediatismo forçado'
//     },
//     {
//       num: '02',
//       title: 'A Ilusão da "Ajuda" do Estado',
//       desc: 'O governo tira R$ 800 do seu bolso em impostos embutidos na comida e na energia, te devolve R$ 200 em auxílio social e ainda exige que você seja grato como se fosse caridade do político.',
//       tag: 'Cobrança disfarçada'
//     },
//     {
//       num: '03',
//       title: 'O Abandono dos Serviços Essenciais',
//       desc: 'Hospitais precários, escolas caindo aos pedaços e vias esburacadas. O serviço público básico é sucateado para que você continue dependente de favores de vereadores e deputados regionais.',
//       tag: 'Caos funcional'
//     },
//     {
//       num: '04',
//       title: 'A Falta de Conscientização Econômica',
//       desc: 'A população não aprende economia nas escolas para não perceber que o verdadeiro aumento do poder de compra vem de menos impostos, maior liberdade e mais facilidade para produzir.',
//       tag: 'Alienante por projeto'
//     }
//   ]

//   return (
//     <section id="pilares" className="py-16 px-4 border-t border-slate-800/80">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <div className="text-center space-y-2">
//           <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Diagnóstico da Armadilha</span>
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">Os 4 Pilares da Alienação do Povo</h2>
//           <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
//             Como o sistema político mantém o trabalhador preso no ciclo de dependência e ilusão de auxílios.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {pilares.map((p, i) => (
//             <div key={i} className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition">
//               <div className="space-y-3">
//                 <span className="text-2xl font-black text-yellow-500/80">{p.num}</span>
//                 <h3 className="font-bold text-base text-slate-200">{p.title}</h3>
//                 <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
//               </div>
//               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-950 p-2 rounded-lg text-center border border-slate-800">
//                 {p.tag}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// export default function Pillars() {
//   const pilares = [
//     {
//       num: '01',
//       title: 'A Urgência da Fome vs. O Futuro',
//       desc: 'Quem não tem o que comer hoje aceita qualquer esmola. O sistema mantém o povo no limite da miséria para que R$ 200 de auxílio pareçam salvação, destruindo a visão de futuro e independência.',
//       tag: 'Imediatismo forçado'
//     },
//     {
//       num: '02',
//       title: 'A Ilusão da "Ajuda" do Estado',
//       desc: 'O governo tira R$ 800 do seu bolso em impostos embutidos na comida e na energia, te devolve R$ 200 em auxílio social e ainda exige que você seja grato como se fosse caridade do político.',
//       tag: 'Cobrança disfarçada'
//     },
//     {
//       num: '03',
//       title: 'O Abandono dos Serviços Essenciais',
//       desc: 'Hospitais precários, escolas caindo aos pedaços e vias esburacadas. O serviço público básico é sucateado para que você continue dependente de favores de vereadores e deputados regionais.',
//       tag: 'Caos funcional'
//     },
//     {
//       num: '04',
//       title: 'A Falta de Conscientização Econômica',
//       desc: 'A população não aprende economia nas escolas para não perceber que o verdadeiro aumento do poder de compra vem de menos impostos, maior liberdade e mais facilidade para produzir.',
//       tag: 'Alienante por projeto'
//     }
//   ]

//   return (
//     <section id="pilares" className="py-16 px-4 border-t border-slate-800/80">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <div className="text-center space-y-2">
//           <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Diagnóstico da Armadilha</span>
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">Os 4 Pilares da Alienação do Povo</h2>
//           <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
//             Como o sistema político mantém o trabalhador preso no ciclo de dependência e ilusão de auxílios.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {pilares.map((p, i) => (
//             <div key={i} className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition">
//               <div className="space-y-3">
//                 <span className="text-2xl font-black text-yellow-500/80">{p.num}</span>
//                 <h3 className="font-bold text-base text-slate-200">{p.title}</h3>
//                 <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
//               </div>
//               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-950 p-2 rounded-lg text-center border border-slate-800">
//                 {p.tag}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { Clock, Gift, Hospital, TrendingDown } from 'lucide-react'

export default function Pillars() {
  return (
    <section id="pilares" className="py-20 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-red-600 tracking-widest mb-2">DIAGNÓSTICO DA ARMADILHA</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white">Os 4 Pilares da Alienação do Povo</h3>
          <p className="mt-4 text-slate-400">
            Como o sistema político mantém o trabalhador preso no ciclo de dependência e ilusão de auxílios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">Pilar 01</span>
              <h4 className="text-xl font-extrabold text-white mt-1 mb-3">A Urgência da Fome vs. O Futuro</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Quem não tem o que comer hoje aceita qualquer esmola. O sistema mantém o povo no limite da miséria para que R$ 200 de auxílio pareçam salvação, destruindo a visão de futuro e independência.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono tracking-wider text-center py-2 bg-slate-950 rounded-xl border border-slate-800">
              IMEDIATISMO FORÇADO
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">Pilar 02</span>
              <h4 className="text-xl font-extrabold text-white mt-1 mb-3">A Ilusão da "Ajuda" do Estado</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                O governo tira R$ 800 do seu bolso em impostos embutidos na comida e na energia, te devolve R$ 200 em auxílio social e ainda exige que você seja grato como se fosse caridade do político.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono tracking-wider text-center py-2 bg-slate-950 rounded-xl border border-slate-800">
              COBRANÇA DISFARÇADA
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Hospital className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">Pilar 03</span>
              <h4 className="text-xl font-extrabold text-white mt-1 mb-3">O Abandono dos Serviços Essenciais</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hospitais precários, escolas caindo aos pedaços e vias esburacadas. O serviço público básico é sucateado para que você continue dependente de favores de vereadores e deputados regionais.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono tracking-wider text-center py-2 bg-slate-950 rounded-xl border border-slate-800">
              CAOS FUNCIONAL
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <TrendingDown className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Pilar 04</span>
              <h4 className="text-xl font-extrabold text-white mt-1 mb-3">Falta de Conscientização Econômica</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                A população não aprende economia nas escolas para não perceber que o verdadeiro aumento do poder de compra vem de menos impostos, menor burocracia e mais liberdade para produzir.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono tracking-wider text-center py-2 bg-slate-950 rounded-xl border border-slate-800">
              ALIENANTE POR PROJETO
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}