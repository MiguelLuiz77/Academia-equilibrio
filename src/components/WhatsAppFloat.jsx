import { MessageCircle } from 'lucide-react'
import { config } from '../data/config.js'
import { getWhatsAppLink } from '../utils/whatsapp.js'

export default function WhatsAppFloat() {
  return <a href={getWhatsAppLink(config.messages.general)} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Fale conosco pelo WhatsApp"><MessageCircle size={25} aria-hidden="true" /><span className="sr-only">Abrir WhatsApp</span></a>
}
