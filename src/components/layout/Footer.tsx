import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="glass-strong border-x-0 border-b-0">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
