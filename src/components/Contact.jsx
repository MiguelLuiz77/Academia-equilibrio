import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { config } from '../data/config.js'
import { getWhatsAppLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contato" className="section-space contact-section relative overflow-hidden bg-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-[100px]" /><div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-brand/[0.07] blur-[100px]" /></div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="rounded-[2rem] border border-brand/20 bg-gradient-to-br from-[#181e13] via-[#10110f] to-[#0b0c0b] p-6 shadow-[0_0_55px_rgba(126,211,33,.07)] sm:p-10 lg:p-14">
          <div className="grid gap-9 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow"><span />{config.contact.eyebrow}</p>
              <h2 className="section-title mt-4">{config.contact.titleLead} <span>{config.contact.titleAccent}</span></h2>
              <p className="body-copy mt-5">{config.contact.description}</p>
              <a href={`tel:${config.phone.replace(/[^\d+]/g, '')}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-brand"><Phone size={17} className="text-brand" aria-hidden="true" />{config.phone}</a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {config.contact.actions.map((action, index) => <a key={action.label} href={getWhatsAppLink(config.messages[action.messageKey])} target="_blank" rel="noopener noreferrer" className={`contact-action group flex min-h-[70px] items-center justify-between gap-3 rounded-2xl px-5 py-4 transition ${index === 0 ? 'bg-brand text-ink hover:bg-brand-light' : 'border border-white/10 bg-white/[0.04] text-white hover:border-brand/50 hover:bg-brand/[0.06]'}`}><span className="flex items-center gap-3 text-sm font-bold"><MessageCircle size={19} aria-hidden="true" />{action.label}</span><ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
