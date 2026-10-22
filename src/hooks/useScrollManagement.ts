import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On navigation: scroll to the `#hash` target if there is one (so links like
 * `/#projects` work from any page), otherwise scroll to the top.
 */
export function useScrollManagement() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 })
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    // Wait a frame so the target page has rendered.
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Move focus for keyboard and screen-reader users without a second scroll.
      el.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
    // `key` changes on every navigation, so clicking the same #link twice still scrolls.
  }, [pathname, hash, key])
}
