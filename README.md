# tanzim-rahman.com

Personal portfolio of Tanzim Rahman — full-stack developer and MASc Software Engineering student at Memorial University.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · TanStack Query · deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in EmailJS keys for the contact form
npm run dev
```

| Script              | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Type-check and build to `dist/`      |
| `npm run typecheck` | Type-check only                      |
| `npm run lint`      | ESLint (TypeScript, hooks, a11y)     |
| `npm run preview`   | Serve the production build locally   |

## Project structure

```
src/
  app/            App (providers + routes) and RootLayout (navbar, footer, scroll handling)
  config/site.ts  Personal details, availability, socials, section on/off switches
  types/          Content types shared with the future backend (Project, Experience, …)
  data/           Static content used until the backend serves it
  services/       Data access: api.ts (fetch wrapper), content.ts (queries), contact.ts
  components/
    ui/           Reusable building blocks: Button, SectionHeader, Tag, Reveal, SocialLinks
    layout/       Navbar, Footer
  features/       One folder per page section: hero, projects, experience, skills, contact,
                  plus future sections (about, testimonials, certifications)
  hooks/          Shared hooks (scroll management, active section)
  pages/          Route components: Home, Projects, ProjectDetail, NotFound
```

## Common edits

- **Change availability, email, socials:** `src/config/site.ts`
- **Add or edit a project:** `src/data/projects.ts`. Add a `caseStudy` to give it its own page at
  `/projects/:slug`; set `featured: true` to show it on the home page (max 4).
- **Project images:** put a WebP (~1200px wide) in `public/projects/<slug>.webp`.
- **Turn on a future section (About, Testimonials, Certifications):** flip its switch in
  `site.sections` in `src/config/site.ts`.

## Connecting the backend (future)

Components never read `src/data` directly — they go through `src/services/content.ts`.
When the API is ready:

1. Serve `GET /projects` and `GET /projects/:slug` returning the `Project` type in `src/types/content.ts`.
2. Serve `POST /contact` accepting `{ name, email, message }` (do spam filtering there).
3. Set `VITE_API_URL` in Vercel. The frontend switches over with no component changes.

> Every `VITE_*` variable is bundled into public JavaScript. Never put secrets in them.
