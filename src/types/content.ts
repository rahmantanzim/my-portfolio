/**
 * Content types shared by the static data files and (later) the backend API.
 * Keep these in sync with the Prisma models so switching the data source
 * from `src/data` to the API is a one-line change in `src/services/content.ts`.
 */

export type ProjectCategory = 'university' | 'business' | 'personal'

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectLinks {
  /** Live site or demo. `null` when there is none. */
  live: string | null
  /** Source code repository. `null` when private or unavailable. */
  github: string | null
}

export interface CaseStudy {
  /** One-paragraph description of the problem and what was built. */
  overview: string
  /** What Tanzim personally did, e.g. "Built the React dashboard". */
  role: string
  /** Concrete things built or decided. */
  highlights: string[]
  /** Measurable results, if any. */
  outcomes?: string[]
}

export interface Project {
  slug: string
  title: string
  /** One or two sentences shown on cards and in the list. */
  summary: string
  category: ProjectCategory
  /** Short context line, e.g. "Team of 3 · Course project". */
  context?: string
  year?: number
  featured: boolean
  /** Lower numbers show first. */
  order: number
  image: ProjectImage | null
  tags: string[]
  links: ProjectLinks
  /** When present, the project gets its own page at /projects/:slug. */
  caseStudy?: CaseStudy
}

export interface Experience {
  id: string
  role: string
  organization: string
  location: string
  /** ISO month, e.g. "2018-06". */
  start: string
  /** ISO month, or `null` for a current role. */
  end: string | null
  summary?: string
  highlights: string[]
  tags: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  start?: string
  end: string
  /** True while the degree is in progress (end date is expected). */
  inProgress: boolean
  note?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}
