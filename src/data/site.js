/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Everything marked TODO is placeholder data — replace before going live.
 * Phone numbers must stay in international format for WhatsApp links to work.
 */
export const site = {
  name: 'AG Fresh Foods',
  legalName: 'AG Fresh Foods',
  tagline: 'Freshness You Can Taste',
  description:
    'Healthy traditional idly & dosa batter ground fresh every day from carefully selected ingredients — no preservatives, no shortcuts.',

  // TODO: replace with the live domain (used for canonical URLs + schema).
  url: 'https://www.agfreshfoods.com',

  // TODO: replace with real contact details.
  phone: '+91 90000 00000',
  phoneRaw: '+919000000000',
  whatsapp: '919000000000',
  email: 'hello@agfreshfoods.com',
  dealerEmail: 'dealers@agfreshfoods.com',

  address: {
    line1: 'AG Fresh Foods Production Unit',
    line2: 'Food Processing Zone',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    postalCode: '641001',
    country: 'India',
  },

  // Google Maps embed. Swap `q=` for your exact address or a place ID.
  mapEmbedUrl:
    'https://www.google.com/maps?q=Coimbatore%2C%20Tamil%20Nadu%2C%20India&output=embed',
  mapLinkUrl: 'https://www.google.com/maps/search/?api=1&query=Coimbatore%2C+Tamil+Nadu',

  geo: { latitude: 11.0168, longitude: 76.9558 },

  hours: [
    { day: 'Monday – Saturday', time: '5:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '5:00 AM – 1:00 PM' },
    { day: 'Fresh dispatch', time: 'Every morning by 6:00 AM' },
  ],
  // Schema.org opening hours (machine readable mirror of the above).
  schemaHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '05:00', closes: '20:00' },
    { days: ['Sunday'], opens: '05:00', closes: '13:00' },
  ],

  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },

  serviceAreas: ['Coimbatore', 'Tiruppur', 'Erode', 'Salem', 'Pollachi', 'Mettupalayam'],
}

export const whatsappLink = (message = "Hi AG Fresh Foods, I'd like to place an order.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const telLink = `tel:${site.phoneRaw}`
export const mailLink = `mailto:${site.email}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Benefits', to: '/why-karuppu-kavuni' },
  { label: 'Dealers', to: '/dealers' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = [
  {
    title: 'Company',
    links: [
      { label: 'About AG Fresh Foods', to: '/about' },
      { label: 'Our Story', to: '/our-story' },
      { label: 'Manufacturing Process', to: '/manufacturing-process' },
      { label: 'Quality Standards', to: '/quality-standards' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Karuppu Kavuni Batter', to: '/products/karuppu-kavuni-idly-dosa-batter' },
      { label: 'White Rice Idly Batter', to: '/products/white-rice-idly-batter' },
      { label: 'Millet Idly & Dosa Batter', to: '/products/millet-idly-dosa-batter' },
      { label: 'Ragi Dosa Batter', to: '/products/ragi-dosa-batter' },
      { label: 'Wheat Dosa Batter', to: '/products/wheat-dosa-batter' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Why Karuppu Kavuni?', to: '/why-karuppu-kavuni' },
      { label: 'Health Benefits of Black Rice', to: '/health-benefits-of-black-rice' },
      { label: 'Storage Instructions', to: '/storage-instructions' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Blogs', to: '/blogs' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'Dealer & Distributor', to: '/dealers' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms-conditions' },
    ],
  },
]
