import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileBar from './MobileBar'
import FloatingActions from './FloatingActions'
import ScrollProgress from './ScrollProgress'
import Seo, { organizationSchema, websiteSchema } from '../ui/Seo'

/** Restores scroll to the top on navigation, honouring in-page hash links. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <>
      {/* Site-wide schema — page components add their own on top. */}
      <Seo schema={[organizationSchema(), websiteSchema()]} />
      <ScrollManager />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
      <FloatingActions />
    </>
  )
}
