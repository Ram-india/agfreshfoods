import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered entrance. Animates once, and collapses to a plain fade when
 * the user has asked for reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  scale = 1,
  duration = 0.7,
  className = '',
  once = true,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: reduce ? 0.3 : duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/** Staggers direct children — pair with <RevealItem>. */
export function RevealGroup({ children, className = '', stagger = 0.09, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '', y = 24 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
