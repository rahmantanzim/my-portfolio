import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/config/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const sectionIds = navLinks.map((l) => l.id)
const number = (i: number) => `${String(i + 1).padStart(2, '0')}.`

export function Navbar() {
  const { pathname, hash } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastY = useRef(0)
  const active = useActiveSection(sectionIds, pathname === '/')

  // Solid background once scrolled; hide while scrolling down, show again on the way up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 16)
      setIsHidden(y > 120 && y > lastY.current)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route or hash changes.
  const [lastLocation, setLastLocation] = useState(pathname + hash)
  if (lastLocation !== pathname + hash) {
    setLastLocation(pathname + hash)
    setIsOpen(false)
  }

  // Close on Escape, and stop the page scrolling behind the open menu.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isProjectsRoute = pathname.startsWith('/projects')

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-300',
          isScrolled && 'bg-background/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md',
          isHidden && !isOpen && '-translate-y-full',
        )}
      >
        <nav aria-label="Main" className="flex h-[4.5rem] items-center justify-between px-6 md:px-10">
          <Link
            to="/"
            aria-label={`${site.name}, home`}
            className="flex size-10 items-center justify-center rounded-sm border-2 border-primary font-mono text-sm font-bold text-primary transition-colors hover:bg-primary/10"
          >
            {site.shortName}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <ol className="flex items-center gap-7">
              {navLinks.map((link, i) => {
                const current = active === link.id || (link.id === 'projects' && isProjectsRoute)
                return (
                  <li key={link.id}>
                    <Link
                      to={{ pathname: '/', hash: link.id }}
                      aria-current={current ? 'true' : undefined}
                      className={cn(
                        'font-mono text-[0.8125rem] transition-colors hover:text-primary',
                        current ? 'text-primary' : 'text-foreground/90',
                      )}
                    >
                      <span className="mr-1 text-primary">{number(i)}</span>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ol>
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline is-small">
              Résumé
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="relative z-10 -mr-2 flex size-10 items-center justify-center text-primary md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="size-7" aria-hidden /> : <Menu className="size-7" aria-hidden />}
          </button>
        </nav>
      </header>

      {/* Mobile: full-height panel from the right (outside the header so its blur doesn't trap it) */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 flex w-[min(75vw,20rem)] flex-col items-center justify-center gap-10 bg-surface shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.7)]">
            <ol className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <Link to={{ pathname: '/', hash: link.id }} className="font-mono text-foreground hover:text-primary">
                    <span className="block text-sm text-primary">{number(i)}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ol>
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Résumé
            </a>
          </aside>
        </div>
      )}
    </>
  )
}
