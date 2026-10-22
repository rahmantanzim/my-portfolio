import { queryOptions } from '@tanstack/react-query'
import { projects as staticProjects } from '@/data/projects'
import type { Project } from '@/types/content'
import { API_URL, ApiError, apiRequest } from './api'

/**
 * Content data access. Components never import from `src/data` directly;
 * they go through these queries so the source can switch to the backend
 * by setting VITE_API_URL — no component changes needed.
 */

const byOrder = (a: Project, b: Project) => a.order - b.order
const useStatic = !API_URL

async function fetchProjects(): Promise<Project[]> {
  if (useStatic) return [...staticProjects].sort(byOrder)
  const data = await apiRequest<Project[]>('/projects')
  return data.sort(byOrder)
}

async function fetchProject(slug: string): Promise<Project | null> {
  if (useStatic) return staticProjects.find((p) => p.slug === slug) ?? null
  try {
    return await apiRequest<Project>(`/projects/${encodeURIComponent(slug)}`)
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return null
    throw err
  }
}

export const projectsQuery = queryOptions({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  // Static content is available synchronously, so render it without a loading state.
  initialData: useStatic ? [...staticProjects].sort(byOrder) : undefined,
})

export const projectQuery = (slug: string) =>
  queryOptions({
    queryKey: ['projects', slug],
    queryFn: () => fetchProject(slug),
    initialData: useStatic ? (staticProjects.find((p) => p.slug === slug) ?? null) : undefined,
  })
