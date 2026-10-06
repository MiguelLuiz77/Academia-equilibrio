import { ArrowUpRight } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

export default function AcademyGallery() {
  return (
    <section id="academia" className="section-space bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>{config.gallery.eyebrow}</Eyebrow>
          <h2 className="section-title mt-4">{config.gallery.titleLead} <span>{config.gallery.titleAccent}</span></h2>
          <p className="body-copy mt-5">{config.gallery.description}</p>
        </Reveal>
        <div className="mt-9 grid min-w-0 grid-cols-1 gap-3 min-[375px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {config.gallery.photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 60} className={`min-w-0 ${index === 0 ? 'col-span-1 min-[375px]:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}>
              <figure className={`gallery-card group relative isolate h-full min-h-[190px] w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151615] sm:min-h-[250px] ${index === 0 ? 'aspect-[16/9] lg:aspect-auto lg:min-h-[520px]' : 'aspect-[4/3] lg:aspect-auto'}`}>
                <img src={photo.src} alt={photo.alt} className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/5 to-transparent" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 flex min-w-0 items-end justify-between gap-2 p-4 sm:p-5">
                  <span className="min-w-0 break-words font-heading text-sm font-bold text-white sm:text-base">{photo.caption}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/80 transition group-hover:border-brand group-hover:text-brand"><ArrowUpRight size={16} aria-hidden="true" /></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
