import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

/** `trail` = [{ label, to }] including Home; the last item renders as current. */
export default function Breadcrumbs({ trail, light = false }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol
        className={`no-scrollbar flex items-center gap-1.5 overflow-x-auto text-[13px] font-medium ${
          light ? 'text-white/65' : 'text-soft'
        }`}
      >
        {trail.map((item, i) => {
          const last = i === trail.length - 1
          return (
            <li key={item.to} className="flex shrink-0 items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5 opacity-50" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className={light ? 'text-white' : 'text-forest-600 dark:text-leaf-300'}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`flex items-center gap-1.5 transition-colors hover:underline ${
                    light ? 'hover:text-white' : 'hover:text-forest-600 dark:hover:text-leaf-300'
                  }`}
                >
                  {i === 0 && <Home className="size-3.5" aria-hidden="true" />}
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
