import { Check, CircleCheck } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import { getWhatsAppLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

const priceFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Pricing() {
  return (
    <section id="planos" className="section-space bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow centered>{config.pricing.eyebrow}</Eyebrow>
          <h2 className="section-title mt-4">{config.pricing.titleLead} <span>{config.pricing.titleAccent}</span></h2>
          <p className="body-copy mt-5">{config.pricing.description}</p>
        </Reveal>
        <div className="mt-11 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {config.pricing.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} className={`h-full ${plan.featured ? 'xl:relative xl:z-10' : ''}`}>
              <article className={`pricing-card relative flex h-full min-w-0 flex-col rounded-[1.75rem] border p-6 sm:p-8 ${plan.featured ? 'border-brand/70 bg-gradient-to-b from-[#1c2417] to-[#121411] shadow-[0_0_45px_rgba(126,211,33,.1)] lg:-translate-y-2 xl:scale-[1.04]' : 'border-white/10 bg-[#141514]'}`}>
                {plan.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink">{plan.badge}</div>}
                <p className="text-sm font-semibold text-white/60">{plan.name}</p>
                <p className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{priceFormatter.format(plan.price)}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.13em] text-brand">{plan.paymentCondition}</p>
                <p className="mt-5 min-h-12 text-sm leading-6 text-white/55">{plan.observation}</p>
                <div className="my-6 h-px bg-white/10" />
                <ul className="mb-7 space-y-3">
                  {config.pricing.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2.5 text-sm text-white/75"><Check size={16} className="shrink-0 text-brand" aria-hidden="true" />{benefit}</li>)}
                </ul>
                <a href={getWhatsAppLink(config.messages.planInterest.replace('{planName}', plan.name))} target="_blank" rel="noopener noreferrer" aria-label={`${plan.button}: ${priceFormatter.format(plan.price)}`} className={`mt-auto inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full px-5 py-3.5 text-center text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${plan.featured ? 'bg-brand text-ink hover:bg-brand-light' : 'border border-white/15 text-white hover:border-brand hover:text-brand'}`}>
                  <span className="min-w-0 break-words">{plan.button}</span><CircleCheck className="shrink-0" size={17} aria-hidden="true" />
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
