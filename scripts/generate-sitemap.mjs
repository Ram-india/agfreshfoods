/**
 * Writes public/sitemap.xml from the route list.
 * Run via `npm run sitemap` (also runs automatically before `npm run build`).
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')

// Kept in step with src/data/site.js — update the domain in both places.
const ORIGIN = process.env.SITE_URL || 'https://www.agfreshfoods.com'

const productSlugs = [
  'karuppu-kavuni-idly-dosa-batter',
  'white-rice-idly-batter',
  'millet-idly-dosa-batter',
  'ragi-dosa-batter',
  'wheat-dosa-batter',
]

const blogSlugs = ['healthy-breakfast-ideas', 'benefits-of-black-rice', 'how-fresh-batter-makes-better-idly']

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/our-story', priority: '0.6', changefreq: 'yearly' },
  { path: '/manufacturing-process', priority: '0.7', changefreq: 'yearly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  ...productSlugs.map((s) => ({ path: `/products/${s}`, priority: '0.9', changefreq: 'monthly' })),
  { path: '/why-karuppu-kavuni', priority: '0.8', changefreq: 'monthly' },
  { path: '/health-benefits-of-black-rice', priority: '0.7', changefreq: 'monthly' },
  { path: '/dealers', priority: '0.9', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.5', changefreq: 'monthly' },
  { path: '/blogs', priority: '0.7', changefreq: 'weekly' },
  ...blogSlugs.map((s) => ({ path: `/blogs/${s}`, priority: '0.6', changefreq: 'monthly' })),
  { path: '/storage-instructions', priority: '0.6', changefreq: 'yearly' },
  { path: '/faqs', priority: '0.7', changefreq: 'monthly' },
  { path: '/quality-standards', priority: '0.6', changefreq: 'yearly' },
  { path: '/contact', priority: '0.8', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
]

const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml written — ${routes.length} URLs at ${ORIGIN}`)
