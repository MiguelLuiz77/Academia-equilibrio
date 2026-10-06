import { ClipboardCheck, Dumbbell, HeartPulse, ArrowUpRight } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

const icons = { dumbbell: Dumbbell, heart: HeartPulse, clipboard: ClipboardCheck }

export default function Services() {
  return (
    <section id="modalidades" className="section-space bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>{config.services.eyebrow}</Eyebrow>
          <h2 className="section-title mt-4">{config.services.titleLead} <span>{config.services.titleAccent}</span></h2>
          <p className="body-copy mt-5">{config.services.description}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.items.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={index * 70} className="h-full min-w-0">
                <article className="service-card group h-full min-h-[245px] min-w-0 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#1a1c19] via-[#111211] to-[#0d0e0d] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_12px_35px_rgba(0,0,0,.28)]">
                  <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand"><Icon size={22} aria-hidden="true" /></div><span className="font-heading text-xs font-bold tracking-widest text-white/25">{item.number}</span></div>
                  <h3 className="mt-8 font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>
                  <ArrowUpRight size={18} className="mt-5 text-brand/70 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand" aria-hidden="true" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
