import { NavLink, useLocation } from 'react-router-dom'
import { Home, MessageCircle, Phone, ShoppingBag } from 'lucide-react'
import { telLink, whatsappLink } from '../../data/site'

const itemCls =
  'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-semibold tracking-wide transition-colors duration-300'

/** App-style sticky bar, mobile only. */
export default function MobileBar() {
  const { pathname } = useLocation()

  return (
    <nav
      aria-label="Quick actions"
      className="glass-strong fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t pb-safe lg:hidden"
    >
      <NavLink
        to="/"
        className={() =>
          `${itemCls} ${pathname === '/' ? 'text-forest-600 dark:text-leaf-300' : 'text-soft'}`
        }
      >
        <Home className="size-[19px]" />
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${itemCls} ${isActive ? 'text-forest-600 dark:text-leaf-300' : 'text-soft'}`
        }
      >
        <ShoppingBag className="size-[19px]" />
        Products
      </NavLink>

      {/* raised primary action */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-end gap-1 pb-2.5 text-[10px] font-semibold text-forest-600 dark:text-leaf-300"
      >
        <span className="-mt-5 grid size-12 place-items-center rounded-full bg-gradient-to-br from-forest-500 to-leaf-500 text-white shadow-[0_10px_24px_-8px_rgb(46_125_50_/_0.85)] ring-4 ring-[var(--surface)]">
          <ShoppingBag className="size-5" />
        </span>
        Order
      </a>

      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${itemCls} text-soft`}>
        <MessageCircle className="size-[19px]" />
        WhatsApp
      </a>

      <a href={telLink} className={`${itemCls} text-soft`}>
        <Phone className="size-[19px]" />
        Call
      </a>
    </nav>
  )
}
