import { site } from '@/config/site'

/** Fixed social links on the left and email on the right, desktop only. */
export function SideRails() {
  return (
    <>
      <div className="fixed bottom-0 left-6 z-10 hidden w-10 flex-col items-center gap-5 lg:flex xl:left-10">
        <ul className="flex flex-col items-center gap-5">
          {site.socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block p-1.5 text-muted-foreground transition-[color,transform] duration-200 hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="size-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <span aria-hidden className="block h-24 w-px bg-muted-foreground/60" />
      </div>

      <div className="fixed right-6 bottom-0 z-10 hidden w-10 flex-col items-center gap-6 lg:flex xl:right-10">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs tracking-[0.15em] text-muted-foreground transition-[color,transform] duration-200 [writing-mode:vertical-rl] hover:-translate-y-1 hover:text-primary"
        >
          {site.email}
        </a>
        <span aria-hidden className="block h-24 w-px bg-muted-foreground/60" />
      </div>
    </>
  )
}
