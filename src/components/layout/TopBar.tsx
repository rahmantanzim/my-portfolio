import { Link } from 'react-router-dom'
import { site } from '@/config/site'

const links = [
  { hash: 'work', label: 'Work' },
  { hash: 'before', label: 'Before' },
  { hash: 'contact', label: 'Contact' },
]

/** A plain line of text at the top of the page. Not fixed; it scrolls away with the page. */
export function TopBar() {
  return (
    <header className="sheet">
      <nav aria-label="Main" className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6">
        <Link to="/" className="font-semibold hover:text-primary">
          {site.name}
        </Link>
        <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-[0.9375rem]">
          {links.map((l) => (
            <li key={l.hash}>
              <Link to={{ pathname: '/', hash: l.hash }} className="ink-link">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="ink-link">
              Résumé <span className="text-muted-foreground">(PDF)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
