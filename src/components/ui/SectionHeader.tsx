import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Small label above the title, e.g. "Selected work". */
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** id for the <h2>, so the section can use aria-labelledby. */
  id?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, description, id, align = 'left', className }: SectionHeaderProps) {
  return (
    <header className={cn('mb-10 max-w-2xl md:mb-14', align === 'center' && 'mx-auto text-center', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty text-muted-foreground">{description}</p>}
    </header>
  )
}
