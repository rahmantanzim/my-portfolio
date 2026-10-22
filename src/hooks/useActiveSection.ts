import { useEffect, useState } from 'react'

/** Returns the id of the section currently in the middle of the viewport. */
export function useActiveSection(ids: readonly string[], enabled = true): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A thin band across the middle of the screen decides what's "active".
      { rootMargin: '-45% 0px -50% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      setActive(null)
    }
  }, [ids, enabled])

  return enabled ? active : null
}
