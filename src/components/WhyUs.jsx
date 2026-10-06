import { useState } from 'react'
import { ChevronDown, Dumbbell, UsersRound, HeartHandshake, CalendarDays } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

const icons = [Dumbbell, UsersRound, CalendarDays, HeartHandshake]

export default function WhyUs() {
  const [active, setActive] = useState(0)
  return (
    <section className="section-space bg-[#111111]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
        <Reveal>
          <Eyebrow>{config.reasons.eyebrow}</Eyebrow>
          <h2 className="section-title mt-4">{config.reasons.titleLead} <span>{config.reasons.titleAccent}</span></h2>
          <div className="why-visual mt-8 flex min-h-[270px] items-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#27301e] via-[#161914] to-[#090a09] p-7 sm:min-h-[340px]">
            <div className="max-w-xs"><span className="font-heading text-6xl font-black leading-none text-brand/80">01</span><p className="mt-3 font-heading text-xl font-bold text-white">Seu ritmo. Sua evolução.</p><p className="mt-2 text-sm leading-6 text-white/55">Cada jornada começa de um jeito. Vamos acompanhar a sua.</p></div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-col gap-3" aria-label="Vantagens da Academia Equilíbrio">
            {config.reasons.items.map((item, index) => {
              const Icon = icons[index]
              const expanded = active === index
              return (
                <article key={item.title} className={`reason-item min-w-0 rounded-2xl border ${expanded ? 'border-brand/40 bg-[#191b18]' : 'border-white/[0.08] bg-[#151615]'}`}>
                  <button type="button" className="flex w-full min-w-0 items-center gap-4 p-4 text-left sm:p-5" aria-expanded={expanded} onClick={() => setActive(expanded ? -1 : index)}>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${expanded ? 'bg-brand text-ink' : 'bg-white/[0.06] text-brand'}`}><Icon size={19} aria-hidden="true" /></span>
                    <span className="min-w-0 flex-1 break-words font-heading text-sm font-bold text-white sm:text-base">{item.title}</span>
                    <ChevronDown size={19} className={`shrink-0 text-brand transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {expanded && <div className="pb-5 pl-[4.5rem] pr-5 text-sm leading-6 text-white/55 sm:pl-[5rem]">{item.description}</div>}
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
