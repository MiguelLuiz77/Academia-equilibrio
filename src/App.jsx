import { config } from './data/config.js'
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
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

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

export default function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }} />
      <Header />
      <main>
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
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
