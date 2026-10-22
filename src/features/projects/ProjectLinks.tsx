import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/content'

interface ProjectLinksProps {
  project: Project
  /** `icon` for compact cards, `button` for the detail page. */
  variant?: 'icon' | 'button'
  className?: string
}

export function ProjectLinks({ project, variant = 'icon', className }: ProjectLinksProps) {
  const { live, github } = project.links
  if (!live && !github) return null

  const items = [
    github && { href: github, label: 'Code', icon: <FiGithub className="size-4" aria-hidden /> },
    live && { href: live, label: 'Live site', icon: <ExternalLink className="size-4" aria-hidden /> },
  ].filter(Boolean) as { href: string; label: string; icon: ReactNode }[]

  return (
    <div className={cn('relative z-10 flex items-center gap-1', className)}>
      {items.map((item) =>
        variant === 'icon' ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — ${item.label}`}
            title={item.label}
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            {item.icon}
          </a>
        ) : (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border-strong px-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            {item.icon}
            {item.label}
          </a>
        ),
      )}
    </div>
  )
}
