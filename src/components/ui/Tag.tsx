import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/60 bg-surface/80 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/30',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)} aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  )
}
