import { ArrowUpRight, MapPin, Navigation } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

export default function Location() {
  const encodedAddress = encodeURIComponent(config.location.mapQuery)
  const embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`

  return (
    <section id="localizacao" className="section-space bg-[#111111]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>{config.location.eyebrow}</Eyebrow>
          <h2 className="section-title mt-4">{config.location.titleLead} <span>{config.location.titleAccent}</span></h2>
          <p className="body-copy mt-5">{config.location.description}</p>
        </Reveal>
        <div className="mt-9 grid gap-4 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171817]">
              <img src={config.location.photo} alt="Fachada da Academia Equilíbrio em São José dos Campos" className="h-52 w-full object-cover object-[center_32%] sm:h-60 lg:h-52" loading="lazy" />
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand"><MapPin size={22} aria-hidden="true" /></span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-white">Academia Equilíbrio</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{config.address}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand">{config.city} · SP</p>
                </div>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="button-primary mt-7 w-full px-5 py-3.5">Como chegar <Navigation size={17} aria-hidden="true" /></a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="map-frame h-[320px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171817] sm:h-[390px] lg:h-full lg:min-h-[360px]">
              <iframe title={`Mapa da localização da ${config.name}`} src={embedUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-brand">Abrir no Google Maps <ArrowUpRight size={16} aria-hidden="true" /></a></Reveal>
      </div>
    </section>
  )
}
