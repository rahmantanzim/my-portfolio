import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="py-8 text-center">
      {/* The side rails carry these links on desktop; phones get them here. */}
      <SocialLinks className="mb-4 justify-center lg:hidden" />
      <a
        href="https://github.com/rahmantanzim/my-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        Built by {site.name} with React and TypeScript
      </a>
    </footer>
  )
}
