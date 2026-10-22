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

const chip =
  'cursor-pointer rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-primary'

export function ProjectFilters({ category, onCategoryChange, techOptions, activeTech, onTechChange }: ProjectFiltersProps) {
  const [showAll, setShowAll] = useState(false)
  const hidden = techOptions.length - VISIBLE_TECH
  const visibleTech =
    showAll || hidden <= 0
      ? techOptions
      : techOptions.filter((t, i) => i < VISIBLE_TECH || t === activeTech) // keep the active one visible

  return (
    <div className="space-y-5">
      <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border">
        {PROJECT_CATEGORIES.map((c) => {
          const active = category === c.id
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(c.id)}
              className={cn(
                '-mb-px cursor-pointer border-b-2 pb-3 text-sm transition-colors',
                active
                  ? 'border-primary font-medium text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground',
              )}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <div role="group" aria-label="Filter by technology" className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          aria-pressed={activeTech === null}
          onClick={() => onTechChange(null)}
          className={cn(
            chip,
            activeTech === null
              ? 'border-primary bg-primary/10 text-foreground'
              : 'border-border text-muted-foreground hover:text-foreground',
          )}
        >
          Any tech
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
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground',
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
            className="cursor-pointer px-2 py-1 text-xs text-primary hover:underline"
          >
            {showAll ? 'Show fewer' : `+${hidden} more`}
          </button>
        )}
      </div>
    </div>
  )
}
