import { useState } from 'react'
import { config } from './data/config.js'
import Analytics from './components/Analytics.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import AcademyGallery from './components/AcademyGallery.jsx'
import Services from './components/Services.jsx'
import Trainers from './components/Trainers.jsx'
import WhyUs from './components/WhyUs.jsx'
import Pricing from './components/Pricing.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import InfoPage from './components/InfoPage.jsx'
import PageMeta from './components/PageMeta.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import CookieBanner from './components/CookieBanner.jsx'

const gymSchema = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: config.name,
  description: 'Academia de esporte e saúde em São José dos Campos.',
  telephone: config.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Pres. Tancredo Neves, 3090, Jardim Nova Michigan',
    addressLocality: config.city,
    addressRegion: 'SP',
    postalCode: '12225-000',
    addressCountry: 'BR',
  },
}

function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }} />
      <PageMeta title="Esporte e Saúde em São José dos Campos" description="Esporte e saúde para todos os níveis na Academia Equilíbrio, em São José dos Campos. Conheça nossas modalidades e planos." />
      <Hero />
      <About />
      <AcademyGallery />
      <Services />
      <Trainers />
      <WhyUs />
      <Pricing />
      <Location />
      <Contact />
      <FinalCta />
    </main>
  )
}

function getPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const pages = {
    '/obrigado': 'obrigado',
    '/privacidade': 'privacidade',
    '/termos': 'termos',
    '/acessibilidade': 'acessibilidade',
  }
  return pages[path] || (path === '/' || path === '/index.html' ? 'inicio' : 'nao-encontrada')
}

export default function App() {
  const [cookieConsent, setCookieConsent] = useState(() => window.localStorage.getItem('cookie-consent'))
  const page = getPage()

  const saveConsent = (choice) => {
    window.localStorage.setItem('cookie-consent', choice)
    setCookieConsent(choice)
  }

  return (
    <>
      <Analytics consent={cookieConsent} />
      <Header />
      {page === 'inicio' ? <Home /> : <InfoPage page={page} />}
      <Footer />
      <WhatsAppFloat />
      {!cookieConsent && <CookieBanner onChoice={saveConsent} />}
    </>
  )
}
