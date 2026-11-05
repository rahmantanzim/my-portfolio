import { useState } from 'react'
import { PROJECT_CATEGORIES } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { CategoryFilter } from './useProjectFilters'

interface ProjectFiltersProps {
  category: CategoryFilter
  onCategoryChange: (c: CategoryFilter) => void
  techOptions: string[]
  activeTech: string | null
  onTechChange: (t: string | null) => void
}

/** Show the most-used technologies first; the rest sit behind "Show more". */
const VISIBLE_TECH = 10

const chip = 'cursor-pointer text-[0.9375rem] transition-colors'

export function ProjectFilters({
  category,
  onCategoryChange,
  techOptions,
  activeTech,
  onTechChange,
}: ProjectFiltersProps) {
  const [showAll, setShowAll] = useState(false)
  const hidden = techOptions.length - VISIBLE_TECH
  const visibleTech =
    showAll || hidden <= 0 ? techOptions : techOptions.filter((t, i) => i < VISIBLE_TECH || t === activeTech) // keep the active one visible

  return (
    <div className="space-y-5">
      <div role="group" aria-label="Filter by type" className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <span className="w-20 text-sm text-muted-foreground">Type</span>
        {PROJECT_CATEGORIES.map((c) => {
          const active = category === c.id
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(c.id)}
              className={cn(
                'cursor-pointer text-[0.9375rem] underline-offset-[0.2em] transition-colors',
                active ? 'font-semibold text-primary underline decoration-2' : 'text-foreground hover:text-primary',
              )}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <div role="group" aria-label="Filter by technology" className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="w-20 text-sm text-muted-foreground">Tech</span>
        <button
          type="button"
          aria-pressed={activeTech === null}
          onClick={() => onTechChange(null)}
          className={cn(
            chip,
            activeTech === null
              ? 'font-semibold text-primary underline decoration-2 underline-offset-[0.2em]'
              : 'text-foreground hover:text-primary',
          )}
        >
          Any
        </button>
        {visibleTech.map((t) => {
          const active = activeTech === t
          return (
            <button
              key={t}
              type="button"
              aria-pressed={active}
              onClick={() => onTechChange(active ? null : t)}
              className={cn(
                chip,
                active
                  ? 'font-semibold text-primary underline decoration-2 underline-offset-[0.2em]'
                  : 'text-foreground hover:text-primary',
              )}
            >
              {t}
            </button>
          )
        })}
        {hidden > 0 && (
          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((v) => !v)}
            className="ink-link cursor-pointer text-[0.9375rem] text-muted-foreground"
          >
            {showAll ? 'Show fewer' : `+${hidden} more`}
          </button>
        )}
      </div>
    </div>
  )
}
