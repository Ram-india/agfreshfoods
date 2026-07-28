import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Keeps the big third-party libraries in their own long-lived cache chunks. */
const vendorChunk = (id) => {
  if (!id.includes('node_modules')) return
  if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'react'
  if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils|gsap)[\\/]/.test(id)) return 'motion'
  if (/[\\/]node_modules[\\/]swiper[\\/]/.test(id)) return 'swiper'
  if (/[\\/]node_modules[\\/](react-hook-form|zod|@hookform)[\\/]/.test(id)) return 'forms'
  if (/[\\/]node_modules[\\/]lucide-react[\\/]/.test(id)) return 'icons'
  return 'vendor'
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: { manualChunks: vendorChunk },
    },
  },
})
