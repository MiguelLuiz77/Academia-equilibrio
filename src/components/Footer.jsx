import { MessageCircle, MapPin, Phone } from 'lucide-react'
import { config } from '../data/config.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-8 md:grid-cols-[1.15fr_1fr_1fr] lg:px-10">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3" aria-label={`${config.name}, voltar ao início`}>
            <img src="/assets/logo.jpg" alt="Logo da Academia Equilíbrio" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
            <span><strong className="block font-heading text-base font-extrabold text-white">{config.name}</strong><small className="mt-0.5 block text-xs text-white/45">{config.tagline}</small></span>
          </a>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-white/75">Navegue</h2>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">{config.navigation.map((item) => <a key={item.href} href={item.href} className="text-sm text-white/45 transition hover:text-brand">{item.label}</a>)}</div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-white/75">Encontre a gente</h2>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-start gap-2 text-sm leading-6 text-white/45 transition hover:text-brand"><MapPin size={16} className="mt-1 shrink-0 text-brand" aria-hidden="true" />{config.address}</a>
          <a href={`tel:${config.phone.replace(/[^\d+]/g, '')}`} className="mt-3 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-brand"><Phone size={15} className="text-brand" aria-hidden="true" />{config.phone}</a>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {config.name}. Todos os direitos reservados.</p>
          <a href={config.navigation.find((item) => item.label === 'Contato')?.href} className="inline-flex items-center gap-2 transition hover:text-brand" aria-label="Ir para contato"><MessageCircle size={15} aria-hidden="true" /> Fale com a nossa equipe</a>
        </div>
      </div>
    </footer>
  )
}
