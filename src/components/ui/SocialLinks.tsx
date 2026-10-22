import { site } from '@/config/site'
import { cn } from '@/lib/utils'

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {site.socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
          >
            <Icon className="size-5" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  )
}
