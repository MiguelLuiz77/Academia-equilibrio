import { Check, CircleCheck } from 'lucide-react'
import { config } from '../data/config.js'
import { getWhatsAppLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

export default function Pricing() {
  return (
    <section id="planos" className="section-space bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center"><span />{config.pricing.eyebrow}</p>
          <h2 className="section-title mt-4">{config.pricing.titleLead} <span>{config.pricing.titleAccent}</span></h2>
          <p className="body-copy mt-5">{config.pricing.description}</p>
        </Reveal>
        <div className="mt-11 grid items-stretch gap-4 lg:grid-cols-3">
          {config.pricing.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} className="h-full">
              <article className={`pricing-card relative flex h-full flex-col rounded-[1.75rem] border p-6 sm:p-8 ${plan.featured ? 'border-brand/70 bg-gradient-to-b from-[#1c2417] to-[#121411] shadow-[0_0_45px_rgba(126,211,33,.1)] lg:-translate-y-2' : 'border-white/10 bg-[#141514]'}`}>
                {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink">Mais escolhido</div>}
                <p className="text-sm font-semibold text-white/60">{plan.name}</p>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-1"><span className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{plan.amount}</span><span className="font-heading text-xl font-bold text-white">{plan.cents}</span></div>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.13em] text-brand">{plan.suffix}</p>
                <p className="mt-5 min-h-12 text-sm leading-6 text-white/55">{plan.description}</p>
                <div className="my-6 h-px bg-white/10" />
                <ul className="mb-7 space-y-3">
                  {config.pricing.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2.5 text-sm text-white/75"><Check size={16} className="shrink-0 text-brand" aria-hidden="true" />{benefit}</li>)}
                </ul>
                <a href={getWhatsAppLink(config.messages[plan.messageKey])} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${plan.featured ? 'bg-brand text-ink hover:bg-brand-light' : 'border border-white/15 text-white hover:border-brand hover:text-brand'}`}>
                  {plan.button}<CircleCheck size={17} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180}>
          <div className="mt-7 rounded-2xl border border-brand/20 bg-brand/[0.07] px-5 py-4 text-center text-xs font-semibold leading-6 text-white/75 sm:text-sm">{config.pricing.summary}</div>
        </Reveal>
      </div>
    </section>
  )
}
