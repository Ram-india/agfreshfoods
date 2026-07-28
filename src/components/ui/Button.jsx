import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap'

const variants = {
  primary:
    'bg-forest-500 text-white shadow-[0_10px_30px_-10px_rgb(46_125_50_/_0.7)] hover:bg-forest-600 hover:shadow-[0_16px_40px_-12px_rgb(46_125_50_/_0.8)] hover:-translate-y-0.5',
  accent:
    'bg-turmeric-500 text-forest-900 shadow-[0_10px_30px_-10px_rgb(255_193_7_/_0.65)] hover:bg-turmeric-400 hover:-translate-y-0.5',
  outline:
    'border-2 border-forest-500 text-forest-600 hover:bg-forest-500 hover:text-white dark:text-leaf-300 dark:border-leaf-400 dark:hover:bg-leaf-500 dark:hover:text-forest-950',
  ghost: 'text-forest-600 hover:bg-forest-500/10 dark:text-leaf-300 dark:hover:bg-leaf-400/10',
  light:
    'bg-white text-forest-700 shadow-soft hover:-translate-y-0.5 hover:shadow-lift dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  whatsapp: 'bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgb(37_211_102_/_0.6)] hover:brightness-105 hover:-translate-y-0.5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

/**
 * Renders as <Link> for internal `to`, <a> for external `href`, else <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href)
    return (
      <a
        href={href}
        className={cls}
        {...(external && href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
