import { useEffect } from 'react'
import { config } from '../data/config.js'

export default function Analytics({ consent }) {
  useEffect(() => {
    const measurementId = config.analytics.googleMeasurementId
    if (consent !== 'accepted' || !measurementId || document.getElementById('google-analytics')) return

    const script = document.createElement('script')
    script.id = 'google-analytics'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', measurementId, { anonymize_ip: true })
  }, [consent])

  return null
}
