import { useEffect } from 'react'
import { config } from '../data/config.js'

function updateMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    const [name, content] = selector.match(/\[(?:name|property)="(.+)"\]/)?.slice(1) || []
    if (selector.includes('property=')) element.setAttribute('property', name || content)
    else element.setAttribute('name', name || content)
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

export default function PageMeta({ title, description, noIndex = false }) {
  useEffect(() => {
    const fullTitle = `${title} | ${config.name}`
    const imageUrl = new URL(config.seo.socialImage, window.location.origin).href
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`

    document.title = fullTitle
    updateMeta('meta[name="description"]', 'content', description)
    updateMeta('meta[property="og:title"]', 'content', fullTitle)
    updateMeta('meta[property="og:description"]', 'content', description)
    updateMeta('meta[property="og:image"]', 'content', imageUrl)
    updateMeta('meta[name="twitter:title"]', 'content', fullTitle)
    updateMeta('meta[name="twitter:description"]', 'content', description)
    updateMeta('meta[name="twitter:image"]', 'content', imageUrl)
    updateMeta('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [description, noIndex, title])

  return null
}
