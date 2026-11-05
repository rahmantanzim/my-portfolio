import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="sheet">
      <div className="flex flex-wrap justify-between gap-4 border-t border-foreground py-6 text-sm text-muted-foreground">
        <p>
          {site.name}, {new Date().getFullYear()}
        </p>
        <p>
          Built with React and TypeScript.{' '}
          <a
            href="https://github.com/rahmantanzim/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="ink-link"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  )
}
