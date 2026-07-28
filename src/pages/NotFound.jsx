import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Button from '../components/ui/Button'
import Art from '../components/ui/Art'
import FloatingIngredients from '../components/ui/FloatingIngredients'
import { navLinks } from '../data/site'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were looking for does not exist. Browse our fresh idly and dosa batter range instead."
        noindex
      />

      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-32 pb-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_20%_0%,rgb(76_175_80_/_0.16),transparent_65%),radial-gradient(ellipse_45%_45%_at_85%_20%,rgb(255_193_7_/_0.14),transparent_60%)]"
        />
        <FloatingIngredients />

        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-heading text-7xl font-extrabold leading-none text-forest-500/25 sm:text-8xl">404</p>
            <h1 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              This page went out with the morning van
            </h1>
            <p className="text-soft mt-5 max-w-lg text-base leading-relaxed">
              The link you followed does not exist — or it moved when we reorganised the site. The batter,
              however, is exactly where it should be.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/" size="lg">
                <Home className="size-4" /> Back home
              </Button>
              <Button to="/products" variant="outline" size="lg">
                Browse products <ArrowRight className="size-4" />
              </Button>
            </div>

            <nav aria-label="Site sections" className="mt-11 border-t pt-7">
              <p className="text-soft text-xs font-bold uppercase tracking-[0.12em]">Or try one of these</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-soft block rounded-full border hairline px-4 py-2 text-[13px] font-semibold transition-all duration-300 hover:border-forest-500 hover:text-forest-600 dark:hover:text-leaf-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-6 -z-10 rounded-full bg-gradient-to-tr from-leaf-500/30 to-turmeric-500/25 blur-3xl"
            />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-lift dark:border-white/10">
              <Art name="idly" className="aspect-square w-full" label="A plate of idlies" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
