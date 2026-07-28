import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin reading-progress bar pinned under the navbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-forest-500 via-leaf-500 to-turmeric-500"
    />
  )
}
