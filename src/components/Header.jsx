import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { config } from '../data/config.js'
import { getWhatsAppLink } from '../utils/whatsapp.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${config.name}, início`} onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo.jpg" alt="Logo da Academia Equilíbrio" className="h-11 w-11 rounded-full border border-white/10 object-cover" />
          <span className="font-heading text-base font-extrabold tracking-tight text-white sm:text-lg">{config.shortName}<span className="text-brand">.</span></span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {config.navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </nav>

        <a href={getWhatsAppLink(config.messages.trial)} target="_blank" rel="noopener noreferrer" className="button-primary hidden px-5 py-3 text-sm lg:inline-flex">Aula experimental</a>

        <button className="inline-flex rounded-full border border-white/15 p-2 text-white transition hover:border-brand hover:text-brand lg:hidden" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''} lg:hidden`} aria-label="Navegação móvel" aria-hidden={!menuOpen}>
        {config.navigation.map((item) => (
          <a key={item.href} href={item.href} className="mobile-nav-link" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a href={getWhatsAppLink(config.messages.trial)} target="_blank" rel="noopener noreferrer" className="button-primary mt-2 justify-center" tabIndex={menuOpen ? 0 : -1}>Aula experimental</a>
      </nav>
    </header>
  )
}
