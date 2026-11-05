import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BrutalHeaderProps {
  id: string
  /** Small mono label, e.g. "Index / Work". */
  label: string
  title: ReactNode
  /** Second line of the title, set on a lime block. */
  highlight: ReactNode
  aside?: ReactNode
  className?: string
}

/** Section header for the neo-brutalist panels: heavy uppercase type in ink, one line on a lime block. */
export function BrutalHeader({ id, label, title, highlight, aside, className }: BrutalHeaderProps) {
  return (
    <header className={cn('mb-10 grid gap-6 md:mb-14 lg:grid-cols-12 lg:items-end', className)}>
      <div className="lg:col-span-8">
        <p className="inline-block border-2 border-ink bg-paper px-2 py-0.5 font-mono text-xs font-bold uppercase">
          {label}
        </p>
        <h2
          id={id}
          className="mt-5 text-4xl leading-[0.95] font-extrabold tracking-tight text-ink uppercase sm:text-5xl lg:text-6xl"
        >
          {title}
          <br />
          <span className="mt-2 inline-block border-2 border-ink bg-lime px-2 shadow-[4px_4px_0_#000]">{highlight}</span>
        </h2>
      </div>
      {aside && <div className="font-mono text-sm leading-relaxed text-ink-soft lg:col-span-4">{aside}</div>}
    </header>
  )
}
