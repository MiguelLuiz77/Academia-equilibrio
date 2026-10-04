import { config } from '../data/config.js'

export function getWhatsAppLink(mensagem) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(mensagem)}`
}
