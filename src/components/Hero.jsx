import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { config } from '../data/config.js'
import { getWhatsAppLink } from '../utils/whatsapp.js'

export default function Hero() {
  const videoRef = useRef(null)
  const heroRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener?.('change', update)
    return () => query.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!videoRef.current) return
    if (reducedMotion) videoRef.current.pause()
    else videoRef.current.play().catch(() => {})
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) {
      setScrollProgress(0)
      return undefined
    }
    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const heroHeight = heroRef.current?.offsetHeight || window.innerHeight
        const travel = Math.max(heroHeight * 0.75, 1)
        setScrollProgress(Math.min(Math.max(window.scrollY / travel, 0), 1))
      })
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [reducedMotion])

  return (
    <section id="inicio" ref={heroRef} className="hero-section relative isolate flex min-h-[760px] items-center overflow-hidden pt-24 sm:min-h-[820px] lg:min-h-screen">
      <div className="hero-fallback absolute inset-0 -z-20 bg-ink" aria-hidden="true" />
      <video ref={videoRef} className="hero-video absolute inset-0 -z-10 h-full w-full object-cover" style={{ transform: reducedMotion ? 'none' : `translate3d(0, ${scrollProgress * 46}px, 0) scale(${1.04 + scrollProgress * 0.04})` }} autoPlay={!reducedMotion} muted loop playsInline preload={reducedMotion ? 'none' : 'auto'} poster="/assets/logo.jpg" aria-hidden="true">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-20 sm:px-8 sm:pb-32 lg:px-10 lg:pt-24" style={{ transform: `translate3d(0, ${scrollProgress * -22}px, 0)`, opacity: 1 - scrollProgress * 0.52 }}>
        <div className="max-w-3xl">
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-light sm:text-sm">
            {config.hero.eyebrow}
          </div>
          <h1 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {config.hero.titleLead} <span className="text-brand">{config.hero.titleAccent}</span> {config.hero.titleEnd}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7">{config.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppLink(config.messages.trial)} target="_blank" rel="noopener noreferrer" className="button-primary group w-full justify-center px-6 py-4 sm:w-auto">
              Marcar aula experimental <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} aria-hidden="true" />
            </a>
            <a href="#planos" className="button-outline w-full justify-center px-6 py-4 sm:w-auto">Ver planos</a>
          </div>
          <div className="mt-10 flex max-w-3xl flex-wrap gap-2" aria-label="Modalidades disponíveis">
            {config.hero.modalities.map((item) => <span key={item} className="rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-xs font-medium text-white/75 backdrop-blur-sm sm:text-sm">{item}</span>)}
          </div>
        </div>
      </div>
      <a href="#sobre" aria-label="Role para conhecer a academia" className="scroll-cue absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
        <span>Role para explorar</span><ArrowDown size={17} className="text-brand" aria-hidden="true" />
      </a>
    </section>
  )
}
