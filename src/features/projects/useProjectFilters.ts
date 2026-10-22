import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PROJECT_CATEGORIES } from '@/data/projects'
import type { Project, ProjectCategory } from '@/types/content'

export type CategoryFilter = (typeof PROJECT_CATEGORIES)[number]['id']

const isCategory = (value: string | null): value is CategoryFilter =>
  PROJECT_CATEGORIES.some((c) => c.id === value)

export const categoryLabel = (category: ProjectCategory) =>
  PROJECT_CATEGORIES.find((c) => c.id === category)?.label ?? category

/**
 * Category + technology filters, stored in the URL (?category=university&tech=React)
 * so filtered views can be shared and survive the back button.
 */
export function useProjectFilters(projects: Project[]) {
  const [params, setParams] = useSearchParams()

  const rawCategory = params.get('category')
  const category: CategoryFilter = isCategory(rawCategory) ? rawCategory : 'all'
  const tech = params.get('tech')

  const inCategory = useMemo(
    () => (category === 'all' ? projects : projects.filter((p) => p.category === category)),
    [projects, category],
  )

  // Technologies available within the current category, most used first.
  const techOptions = useMemo(() => {
    const counts = new Map<string, number>()
    inCategory.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([t]) => t)
  }, [inCategory])

  const activeTech = tech && techOptions.includes(tech) ? tech : null

  const filtered = useMemo(
    () => (activeTech ? inCategory.filter((p) => p.tags.includes(activeTech)) : inCategory),
    [inCategory, activeTech],
  )

  const update = (next: { category?: CategoryFilter; tech?: string | null }) => {
    setParams(
      (prev) => {
        const p = new URLSearchParams(prev)
        if (next.category !== undefined) {
          if (next.category === 'all') p.delete('category')
          else p.set('category', next.category)
          p.delete('tech') // tech options depend on the category
        }
        if (next.tech !== undefined) {
          if (next.tech) p.set('tech', next.tech)
          else p.delete('tech')
        }
        return p
      },
      { replace: true, preventScrollReset: true },
    )
  }

  return {
    category,
    activeTech,
    techOptions,
    filtered,
    setCategory: (c: CategoryFilter) => update({ category: c }),
    setTech: (t: string | null) => update({ tech: t }),
    reset: () => update({ category: 'all', tech: null }),
  }
}
