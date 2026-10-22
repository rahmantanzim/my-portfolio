# Portfolio frontend — notes for Claude

Personal portfolio for Tanzim Rahman. Audience: recruiters and hiring managers. Priorities:
clean, uncluttered, fast, accessible, and accurate (everything must match the résumé in
`public/Tanzim_Rahman_Resume.pdf`).

## Stack
React 19 + TypeScript (strict) + Vite + Tailwind CSS v4 (tokens in `src/index.css` `@theme`) +
React Router v7 (declarative `<Routes>`) + TanStack Query. Deployed on Vercel from `main`.

## Rules
- **Backend:** a separate repo (`portfolio-backend`, Express + Prisma + PostgreSQL) is in progress.
  Do not start or change backend work without explicit permission. Keep the frontend ready for it:
  components get content only through `src/services/content.ts`.
- **Content** lives in `src/config/site.ts` (personal details) and `src/data/*` (projects,
  experience, skills), typed by `src/types/content.ts`. Never hard-code personal details in components.
- **No secrets in `VITE_*` env vars** — they ship to the browser.
- **Visual identity (keep it):** dark background, teal `primary`, Roboto Mono throughout, Playfair Display
  italic for the second half of section titles (`SectionHeader accent`), frosted `.glass` panels with
  `.card-hover` glow, `.ambient` background light per section, drifting particles + grid horizon in the hero,
  `Button variant="animated"` for the racing-border outline button. Clean ≠ plain — don't strip these.
- **Styling:** use theme tokens (`bg-card`, `text-muted-foreground`, `border-border`, `text-primary`…),
  not raw hex values. Use `cn()` from `src/lib/utils.ts` to merge classes.
- **Reuse UI:** `Button` (handles button / internal link / external link), `SectionHeader`, `Tag`/`TagList`,
  `Reveal` (scroll-in animation, respects reduced motion), `SocialLinks`.
- **New home-page section:** create `src/features/<name>/<Name>.tsx` with
  `<section id tabIndex={-1} aria-labelledby className="section">` and `container-page`, then add it to
  `src/pages/HomePage.tsx` (and `navLinks` in `site.ts` if it belongs in the navbar).
- **Accessibility:** icon-only links need `aria-label`; decorative icons get `aria-hidden`; external links
  use `target="_blank" rel="noopener noreferrer"`; never remove focus outlines.
- **Commits:** one logical change per commit, Conventional Commits style (`feat:`, `fix:`, `refactor:`,
  `chore:`, `docs:`, `style:`, `build:`).

## Before finishing a change
Run `npm run lint && npm run build` and check the page at mobile (375px) and desktop widths.
