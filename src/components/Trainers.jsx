import { ArrowUpRight } from 'lucide-react'
import { config } from '../data/config.js'
import Reveal from './Reveal.jsx'

export default function Trainers() {
  return (
    <section id="instrutores" className="section-space bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow"><span />{config.trainers.eyebrow}</p>
          <h2 className="section-title mt-4">{config.trainers.titleLead} <span>{config.trainers.titleAccent}</span></h2>
          <p className="body-copy mt-5">{config.trainers.description}</p>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {config.trainers.people.map((person, index) => (
            <Reveal key={person.name} delay={index * 100}>
              <article className="trainer-card group relative isolate aspect-[4/5] min-h-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151615]">
                <img src={person.image} alt={person.alt} className={`absolute inset-0 -z-20 h-full w-full object-cover ${person.name === 'Isaías Wilson' ? 'object-[center_42%]' : 'object-[center_34%]'}`} loading="lazy" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/15 to-black/5 transition duration-300 group-hover:from-black/95" aria-hidden="true" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/15 to-transparent" aria-hidden="true" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md sm:left-7 sm:top-7"><span className="h-1.5 w-1.5 rounded-full bg-brand" />Equipe Equilíbrio</div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-3">
                    <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Instrutor{index === 0 ? 'a' : ''}</p><h3 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{person.name}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/70">Ao seu lado em cada etapa do treino.</p></div>
                    <span className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white transition group-hover:border-brand group-hover:text-brand"><ArrowUpRight size={19} aria-hidden="true" /></span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
