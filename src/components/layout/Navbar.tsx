import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FileText, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { navLinks, site } from '@/config/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const sectionIds = navLinks.map((l) => l.id)

export function Navbar() {
  const { pathname, hash } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const active = useActiveSection(sectionIds, pathname === '/')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
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

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const isActive = (id: string) => active === id
  // Project pages count as "Projects" in the nav.
  const isProjectsRoute = pathname.startsWith('/projects')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300',
        isScrolled || isOpen ? 'glass-strong border-x-0 border-t-0' : 'border-b border-transparent',
      )}
    >
      <nav aria-label="Main" className="container-page flex h-18 items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
          aria-label={`${site.name} — home`}
        >
          {site.shortName}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <ul className="glass hidden items-center gap-1 rounded-full px-2 py-1 md:flex">
          {navLinks.map((link) => {
            const current = isActive(link.id) || (link.id === 'projects' && isProjectsRoute)
            return (
              <li key={link.id}>
                <Link
                  to={{ pathname: '/', hash: link.id }}
                  aria-current={current ? 'true' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm transition-colors',
                    current ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-surface hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Button href="/#contact" size="sm">
            Contact me
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-border md:hidden">
          <ul className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={{ pathname: '/', hash: link.id }}
                  className="block py-3 text-lg text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Button href={site.resumeUrl} variant="secondary" className="w-full">
                <FileText className="size-4" aria-hidden />
                Résumé
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
