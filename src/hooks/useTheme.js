import { useCallback, useEffect, useState } from 'react'

const KEY = 'agf-theme'

/** Dark mode state, synced to <html class="dark"> and localStorage. */
export default function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light')
    } catch {
      /* private browsing — theme just won't persist */
    }
  }, [dark])

  // Follow the OS only while the user has made no explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      try {
        if (!localStorage.getItem(KEY)) setDark(e.matches)
      } catch {
        setDark(e.matches)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => setDark((d) => !d), [])
  return { dark, toggle }
}
