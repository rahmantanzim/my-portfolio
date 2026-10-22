import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge class names, letting later Tailwind classes override earlier ones. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const monthFormat = new Intl.DateTimeFormat('en-CA', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/** "2018-06" → "Jun 2018"; "2020" → "2020". */
export function formatMonth(value: string): string {
  if (/^\d{4}$/.test(value)) return value
  const [year, month] = value.split('-').map(Number)
  return monthFormat.format(new Date(Date.UTC(year, month - 1, 1)))
}

/** "Jun 2018 – Jun 2022", or "Sep 2025 – Present" when `end` is null. */
export function formatRange(start: string | undefined, end: string | null, endLabel?: string): string {
  const endText = end ? `${endLabel ? `${endLabel} ` : ''}${formatMonth(end)}` : 'Present'
  return start ? `${formatMonth(start)} – ${endText}` : endText
}

export const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.endsWith('.pdf')
