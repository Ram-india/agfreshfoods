import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../../data/site'

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  return el
}

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Head manager: title, description, canonical, Open Graph, Twitter card and
 * JSON-LD schema. Written imperatively so it works without extra dependencies.
 * `schema` accepts a single object or an array of schema.org objects.
 */
export default function Seo({ title, description, keywords, schema, image, type = 'website', noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`
    const desc = description || site.description
    const canonical = `${site.url}${pathname === '/' ? '' : pathname}`
    const ogImage = image ? `${site.url}${image}` : `${site.url}/og-image.png`

    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: desc })
    if (keywords) upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    })

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: desc })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: site.name })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: desc })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })

    upsertLink('canonical', canonical)
  }, [title, description, keywords, image, type, noindex, pathname])

  useEffect(() => {
    if (!schema) return
    const blocks = (Array.isArray(schema) ? schema : [schema]).filter(Boolean)
    const nodes = blocks.map((block) => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.dataset.seo = 'route'
      el.textContent = JSON.stringify(block)
      document.head.appendChild(el)
      return el
    })
    return () => nodes.forEach((n) => n.remove())
  }, [schema])

  return null
}

/* ---------- Reusable schema.org builders ---------- */

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': `${site.url}/#organization`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  servesCuisine: 'South Indian',
  priceRange: '₹₹',
  image: `${site.url}/og-image.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude },
  openingHoursSpecification: site.schemaHours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: site.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
  sameAs: Object.values(site.social),
})

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { '@id': `${site.url}/#organization` },
  inLanguage: 'en-IN',
})

export const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    item: `${site.url}${item.to === '/' ? '' : item.to}`,
  })),
})

export const productSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: `${site.url}/images/${product.image}`,
  brand: { '@type': 'Brand', name: site.name },
  category: 'Idly & Dosa Batter',
  offers: {
    '@type': 'Offer',
    availability:
      product.status === 'available'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
    priceCurrency: 'INR',
    seller: { '@id': `${site.url}/#organization` },
    url: `${site.url}/products/${product.slug}`,
  },
})

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const articleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Organization', name: site.name },
  publisher: { '@id': `${site.url}/#organization` },
  mainEntityOfPage: `${site.url}/blogs/${post.slug}`,
})
