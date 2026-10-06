import { ArrowRight } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import { getWhatsAppLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

export default function FinalCta() {
  return (
    <section className="bg-[#161616] py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Eyebrow centered>{config.tagline}</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{config.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">{config.finalCta.description}</p>
        <a href={getWhatsAppLink(config.messages.trial)} target="_blank" rel="noopener noreferrer" className="button-primary mt-7 w-full px-6 py-4 sm:w-auto">Marcar aula experimental <ArrowRight className="shrink-0" size={18} aria-hidden="true" /></a>
      </Reveal>
    </section>
  )
}
