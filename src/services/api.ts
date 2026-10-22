/**
 * Minimal fetch wrapper for the future backend.
 * Set VITE_API_URL (e.g. https://api.tanzim-rahman.com/api) to enable it.
 */
export const API_URL: string | undefined = import.meta.env.VITE_API_URL || undefined

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_URL) throw new Error('VITE_API_URL is not configured')

  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })

  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText)
    throw new ApiError(res.status, message || res.statusText)
  }

  return (await res.json()) as T
}
