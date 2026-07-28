import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Phone, Sun, X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'
import useTheme from '../../hooks/useTheme'
import { navLinks, telLink, whatsappLink } from '../../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Full-width bar: transparent over the hero, frosted once scrolled. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled ? 'glass-bar shadow-soft' : 'border-b border-transparent'
        }`}
      >
        <div className="shell-wide">
          <nav
            className={`flex items-center justify-between gap-4 transition-all duration-500 ${
              scrolled ? 'py-2.5' : 'py-4'
            }`}
          >
            <Logo />

            {/* desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-forest-600 dark:text-leaf-300'
                          : 'text-soft hover:text-forest-600 dark:hover:text-leaf-300'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-forest-500/10 dark:bg-leaf-400/12"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="grid size-10 place-items-center rounded-full border hairline text-soft transition-all duration-300 hover:border-leaf-500/50 hover:text-forest-600 dark:hover:text-leaf-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={dark ? 'moon' : 'sun'}
                    initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {dark ? <Moon className="size-[18px]" /> : <Sun className="size-[18px]" />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <a
                href={telLink}
                className="hidden size-10 place-items-center rounded-full border hairline text-soft transition-all duration-300 hover:border-leaf-500/50 hover:text-forest-600 sm:grid dark:hover:text-leaf-300"
                aria-label="Call AG Fresh Foods"
              >
                <Phone className="size-[18px]" />
              </a>

              <Button href={whatsappLink()} size="sm" className="hidden md:inline-flex">
                Order Now
              </Button>

              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="grid size-10 place-items-center rounded-full border hairline text-soft transition-colors hover:text-forest-600 lg:hidden dark:hover:text-leaf-300"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-forest-950/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="glass-strong fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col overflow-y-auto border-l p-6 pt-24 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.045 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3.5 font-heading text-lg font-semibold transition-colors ${
                          isActive
                            ? 'bg-forest-500/10 text-forest-600 dark:text-leaf-300'
                            : 'hover:bg-forest-500/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 border-t pt-6">
                <Button href={whatsappLink()} size="md" className="w-full">
                  Order on WhatsApp
                </Button>
                <Button to="/dealers" variant="outline" size="md" className="w-full">
                  Become a Dealer
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
