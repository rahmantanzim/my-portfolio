import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Small label above the title, e.g. "Selected work". */
  eyebrow: string
  title: ReactNode
  /** Second half of the title, set in italic serif. */
  accent?: ReactNode
  description?: ReactNode
  /** id for the <h2>, so the section can use aria-labelledby. */
  id?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, accent, description, id, align = 'left', className }: SectionHeaderProps) {
  return (
    <header className={cn('mb-12 max-w-3xl md:mb-16', align === 'center' && 'mx-auto text-center', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-3xl leading-tight font-bold text-balance text-primary md:text-5xl">
        {title}
        {accent && (
          <>
            {' '}
            <span className="font-serif font-normal text-foreground italic">{accent}</span>
          </>
        )}
      </h2>
      {description && <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">{description}</p>}
    </header>
  )
}
