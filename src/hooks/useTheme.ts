import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
// Matches --color-background for each theme (used by the mobile browser bar).
const THEME_COLOR: Record<Theme, string> = { dark: '#0f1418', light: '#f5f7f8' }

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
}

/** Reads and changes the site theme. The first paint is handled by the script in index.html. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  const toggleTheme = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }, [])

  return { theme, toggleTheme }
}