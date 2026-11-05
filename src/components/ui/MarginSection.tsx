import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MarginSectionProps {
  id: string
  label: string
  children: ReactNode
  className?: string
}

/** A home-page section with its name in the left margin, like a well-set document. */
export function MarginSection({ id, label, children, className }: MarginSectionProps) {
  return (
    <section id={id} tabIndex={-1} aria-labelledby={`${id}-label`} className={cn('margin-section', className)}>
      <h2 id={`${id}-label`} className="margin-label">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
