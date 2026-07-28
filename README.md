# AG Fresh Foods — Website

Premium, mobile-first marketing site for a fresh idly & dosa batter brand.
React 19 + Vite 8 + Tailwind CSS v4, with Framer Motion, GSAP ScrollTrigger and
Swiper. 24 SEO-friendly routes, schema markup on every page, dark mode, and
generated SVG artwork so the site looks finished before any photography exists.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # regenerates sitemap.xml, then builds to dist/
npm run preview  # serve the production build locally
```

---

## Do these before going live

Everything below is placeholder content. Nothing else needs touching to launch.

| # | What | Where |
|---|------|-------|
| 1 | **Phone, WhatsApp number, email** | `src/data/site.js` — `phone`, `phoneRaw`, `whatsapp`, `email`, `dealerEmail` |
| 2 | **Address + map** | `src/data/site.js` — `address`, `mapEmbedUrl`, `mapLinkUrl`, `geo` |
| 3 | **Live domain** | `src/data/site.js` → `url`, plus `public/robots.txt` and `SITE_URL` in `.env` |
| 4 | **Social links** | `src/data/site.js` — `social` |
| 5 | **Statistics** | `src/data/content.js` → `stats` (packs delivered, stores, families, years) |
| 6 | **Testimonials** | `src/data/content.js` → `testimonials` — replace with real, permissioned quotes |
| 7 | **Business hours** | `src/data/site.js` — `hours` and `schemaHours` (keep the two in step) |
| 8 | **Legal review** | `src/pages/PrivacyPolicy.jsx`, `src/pages/Terms.jsx` — templates, not legal advice |
| 9 | **Photos** | see `public/images/README.md` |
| 10 | **`og-image.png`** | add a 1200×630 social preview at `public/og-image.png` |

> The `whatsapp` field must be digits only with country code and no `+`
> (e.g. `919876543210`), or every WhatsApp link will break.

---

## Routes

**Main** — `/` · `/about` · `/our-story` · `/manufacturing-process` ·
`/products` · `/why-karuppu-kavuni` · `/dealers` · `/gallery` · `/blogs` ·
`/contact`

**Products** — `/products/:slug` for the five batters
(`karuppu-kavuni-idly-dosa-batter`, `white-rice-idly-batter`,
`millet-idly-dosa-batter`, `ragi-dosa-batter`, `wheat-dosa-batter`)

**Information** — `/health-benefits-of-black-rice` · `/storage-instructions` ·
`/faqs` · `/quality-standards` · `/privacy-policy` · `/terms-conditions`

**Blog posts** — `/blogs/:slug` (three long-form articles)

Unknown paths render a branded 404. Every route except the 404 is indexable and
listed in `sitemap.xml`.

---

## Colour system

The palette lives entirely in the `@theme` block of [src/index.css](src/index.css) —
change a token there and it propagates everywhere.

| Token | Value | Role |
|---|---|---|
| `forest-500` | `#2E7D32` | Primary — buttons, active states, gradients |
| `forest-600` | `#276B2A` | Links and hover (higher contrast) |
| `forest-900/950` | `#102D12` / `#08190A` | Dark section and footer backgrounds |
| `leaf-500` | `#4CAF50` | Secondary — highlights, borders, ticks, focus ring |
| `turmeric-500` | `#FFC107` | Accent — badges, "Apply Now", eyebrow text on dark |
| `kavuni-*` | purple | Karuppu Kavuni product sections only |
| `#25D366` | — | WhatsApp brand green |

`forest-500` carries white button text at 5.1:1 and `forest-600` gives 6.4:1 for
links on white, both clearing WCAG AA.

To retheme, edit the two ramps in `@theme` plus `--surface*`, `--text-*`,
`--border-hair` and the three `--shadow-*` tokens. Only three files hold literal
colours outside that: `public/favicon.svg`, the `theme-color` metas in
`index.html`, and the illustration palettes at the top of
[src/components/ui/Art.jsx](src/components/ui/Art.jsx).

## Project structure

```
src/
├─ data/                  ← all editable content lives here
│  ├─ site.js             business details, nav, footer, WhatsApp helpers
│  ├─ products.js         the five products (copy, ingredients, nutrition)
│  └─ content.js          stats, process, FAQs, testimonials, blogs, gallery
├─ components/
│  ├─ ui/                 Seo, Art/SmartImage, Reveal, Counter, Accordion,
│  │                      Breadcrumbs, BeforeAfter, FloatingIngredients, Prose…
│  ├─ layout/             Navbar, Footer, MobileBar, FloatingActions, Layout
│  ├─ home/               the 14 homepage sections
│  ├─ products/           ProductCard
│  ├─ gallery/            GalleryGrid + lightbox
│  ├─ blog/               BlogCard
│  └─ forms/              ContactForm, DealerForm, Field, submitEnquiry
├─ pages/                 one file per route
├─ hooks/useTheme.js      dark mode
└─ index.css              Tailwind v4 theme tokens, palette, utilities
```

**Content changes almost never need component edits.** Adding a product means
one object in `products.js`; a new FAQ, testimonial or blog post is one object in
`content.js`. New routes are the only thing that also needs `App.jsx` and
`scripts/generate-sitemap.mjs`.

---

## How forms work

`ContactForm` and `DealerForm` validate with React Hook Form + Zod, then hand
off through `src/components/forms/submitEnquiry.js`.

**Default (no backend):** opens WhatsApp with the whole enquiry prefilled as a
message. This works immediately and suits a business that already runs on
WhatsApp.

**With a backend:** set `VITE_FORM_ENDPOINT` in `.env` and the same forms POST
JSON there instead — Formspree, Web3Forms, a Netlify/Vercel function, or your own
Express route. No code changes needed:

```env
VITE_FORM_ENDPOINT=https://api.example.com/enquiries
```

Payload shape: `{ subject, Name, Phone, Email, City, ... }`. Respond `2xx` for
success; anything else surfaces an inline error with a call/WhatsApp fallback.

---

## Images without photography

Every image slot renders a **generated SVG illustration** built from the brand
palette — the packets, plate of idlies, tawa, grinder, factory, van, packing
line and grain bowls are all drawn in `src/components/ui/Art.jsx`.

`<SmartImage>` layers a real photo on top of that artwork when the file exists,
fading it in on load. A missing file causes no broken-image icon and no layout
shift, so you can add photos one at a time. See `public/images/README.md` for the
filenames.

---

## SEO

- Per-route `<title>`, meta description, keywords, canonical, Open Graph and
  Twitter card, managed by `src/components/ui/Seo.jsx`
- **Schema markup**: `FoodEstablishment` + `WebSite` site-wide, plus
  `BreadcrumbList` on every inner page, `Product` on product pages, `FAQPage` on
  the home/FAQ/black-rice pages, `BlogPosting` on articles, `ItemList` on the
  product index
- Visible breadcrumbs matching the structured data
- `sitemap.xml` generated at build time; `robots.txt` in `public/`
- Semantic landmarks, skip-to-content link, one `<h1>` per page

After deploying, submit `https://yourdomain.com/sitemap.xml` in Google Search
Console and validate a product page in the Rich Results Test.

---

## Features

Glassmorphism navbar · scroll progress bar · smooth scrolling · animated
counters · GSAP ScrollTrigger process timeline · Framer Motion reveals ·
floating ingredients with mouse parallax · draggable before/after slider ·
auto-playing testimonial carousel · gallery lightbox with keyboard nav ·
accordion FAQs · dark mode with no flash on load · app-style sticky bottom bar
on mobile · WhatsApp floating button · lazy-loaded images · code-split routes.

**Accessibility:** every animation respects `prefers-reduced-motion`, all
interactive controls are keyboard reachable with visible focus rings, the
before/after slider is arrow-key driven, and decorative artwork is correctly
hidden from screen readers when a captioned photo sits on top.

---

## Deploying

Any static host. SPA rewrites are already configured:

- **Netlify** — `public/_redirects` is in place. Build `npm run build`, publish `dist`.
- **Vercel** — `vercel.json` is in place. Framework preset: Vite.
- **Nginx** — add `try_files $uri $uri/ /index.html;`
- **Apache** — add an `.htaccess` rewriting all paths to `/index.html`

Without a rewrite rule, direct links to `/products` will 404 on refresh.

---

## Verification

The build was checked by mounting all 25 routes in a real DOM and asserting on
behaviour rather than eyeballing output:

- **25/25 routes** render with an `<h1>` and substantive content, with zero
  console errors, warnings or unhandled rejections
- **32/32 interaction checks** — contact and dealer form validation (empty
  submit, malformed phone) and successful submission, accordion open/close,
  dark-mode toggle and persistence, mobile drawer, skip link, JSON-LD validity,
  canonical URLs, and lazy-loading attributes

To re-run these after making changes, see the note at the bottom of this file.

---

## Tech

| | |
|---|---|
| React 19 · React Router 7 | UI + routing |
| Vite 8 (rolldown) | build tooling |
| Tailwind CSS v4 | styling via `@theme` tokens in `index.css` |
| Framer Motion 12 | reveals, drawer, layout animation |
| GSAP 3 + ScrollTrigger | scrub-driven process timeline |
| Swiper 14 | testimonial carousel |
| React Hook Form + Zod 4 | form state and validation |
| lucide-react | icons |

Fonts (Poppins + Inter) load from Google Fonts in `index.html`. To self-host for
privacy or speed, download them into `public/fonts/` and swap the `<link>` for
`@font-face` rules.

<details>
<summary>Re-running the verification suites</summary>

The two harnesses (`__smoke.mjs`, `__interact.mjs`) were removed after the final
run to keep the project clean. They mounted the app under `jsdom` via
`vite.ssrLoadModule`. To reinstate a permanent test setup, the conventional route
is Vitest:

```bash
npm i -D vitest jsdom @testing-library/react @testing-library/user-event
```

Then move those assertions into `src/**/*.test.jsx` with
`environment: 'jsdom'` in a `vitest.config.js`.
</details>
