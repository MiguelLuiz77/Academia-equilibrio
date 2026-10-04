import { ArrowRight } from 'lucide-react'
import { config } from '../data/config.js'
import { getWhatsAppLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

export default function FinalCta() {
  return (
    <section className="bg-[#161616] py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow justify-center"><span />{config.tagline}</p>
        <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{config.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">{config.finalCta.description}</p>
        <a href={getWhatsAppLink(config.messages.trial)} target="_blank" rel="noopener noreferrer" className="button-primary mt-7 px-6 py-4">Marcar aula experimental <ArrowRight size={18} aria-hidden="true" /></a>
      </Reveal>
    </section>
  )
}
