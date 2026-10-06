import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { config } from '../data/config.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

function StatCard({ stat, delay }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setCount(stat.value)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) {
        setCount(stat.value)
      } else {
        const start = performance.now()
        const duration = 1100
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.round(stat.value * (1 - (1 - progress) ** 3)))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
      observer.disconnect()
    }, { threshold: 0.5 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [stat.value])

  return <div ref={ref} className="stat-card" style={{ '--card-delay': `${delay}ms` }}><strong>{stat.prefix}{count}</strong><span>{stat.label}</span></div>
}

export default function About() {
  return (
    <section id="sobre" className="section-space bg-[#111111]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <Eyebrow>{config.about.eyebrow}</Eyebrow>
            <h2 className="section-title mt-4">{config.about.titleLead} <span>{config.about.titleAccent}</span> {config.about.titleEnd}</h2>
            <p className="body-copy mt-5 max-w-2xl">{config.about.description}</p>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4">
            {config.about.stats.map((stat, index) => <Reveal key={stat.label} delay={index * 80}><StatCard stat={stat} delay={index * 80} /></Reveal>)}
          </div>
          <Reveal delay={180}>
            <div className="mt-7 flex min-w-0 items-center gap-3 text-sm text-white/65"><CheckCircle2 size={18} className="shrink-0 text-brand" aria-hidden="true" /><span className="min-w-0 break-words">Um lugar para começar, continuar e celebrar cada conquista.</span></div>
          </Reveal>
        </div>
        <Reveal className="relative mx-auto w-full max-w-lg">
          <div className="logo-feature relative overflow-hidden rounded-[2rem] border border-brand/25 bg-[#080908] p-5 shadow-[0_0_75px_rgba(126,211,33,.12)] sm:p-8">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex min-h-[310px] flex-col items-center justify-center rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-[#171b15] via-[#070807] to-[#151a13] p-6 text-center sm:min-h-[390px]">
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white/60"><Sparkles size={14} className="text-brand" aria-hidden="true" /> Movimento com propósito</div>
              <img src="/assets/logo.jpg" alt="Logo verde-limão da Academia Equilíbrio" className="h-52 w-52 rounded-full object-cover shadow-[0_0_46px_rgba(126,211,33,.2)] sm:h-64 sm:w-64" loading="lazy" />
              <p className="mt-5 font-heading text-xl font-bold text-white">{config.name}</p>
              <p className="mt-1 text-sm text-white/50">{config.tagline}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
