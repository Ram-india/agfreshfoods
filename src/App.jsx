import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

/**
 * Home is bundled eagerly (it is the landing route); everything else is
 * code-split so the first paint stays light.
 */
const About = lazy(() => import('./pages/About'))
const OurStory = lazy(() => import('./pages/OurStory'))
const ManufacturingProcess = lazy(() => import('./pages/ManufacturingProcess'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const WhyKavuni = lazy(() => import('./pages/WhyKavuni'))
const Dealers = lazy(() => import('./pages/Dealers'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Blogs = lazy(() => import('./pages/Blogs'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const BlackRiceBenefits = lazy(() => import('./pages/BlackRiceBenefits'))
const StorageInstructions = lazy(() => import('./pages/StorageInstructions'))
const Faqs = lazy(() => import('./pages/Faqs'))
const QualityStandards = lazy(() => import('./pages/QualityStandards'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <span className="size-10 animate-spin rounded-full border-[3px] border-forest-500/20 border-t-forest-500" />
        <span className="text-soft text-sm font-medium">Loading…</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                {/* main pages */}
                <Route path="about" element={<About />} />
                <Route path="our-story" element={<OurStory />} />
                <Route path="manufacturing-process" element={<ManufacturingProcess />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:slug" element={<ProductDetail />} />
                <Route path="why-karuppu-kavuni" element={<WhyKavuni />} />
                <Route path="dealers" element={<Dealers />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:slug" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />

                {/* information pages */}
                <Route path="health-benefits-of-black-rice" element={<BlackRiceBenefits />} />
                <Route path="storage-instructions" element={<StorageInstructions />} />
                <Route path="faqs" element={<Faqs />} />
                <Route path="quality-standards" element={<QualityStandards />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-conditions" element={<Terms />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
