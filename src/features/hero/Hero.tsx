import { ArrowRight, FileText, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/config/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Single soft accent glow — decorative only */}
      <div aria-hidden className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]" />

      <div className="container-page grid items-center gap-12 gap-y-8 pt-28 pb-4 md:pt-40 md:pb-8 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="order-2 max-w-2xl lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <span className="relative flex size-2" aria-hidden>
              <span className="pulse-dot absolute inline-flex size-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {site.availability.headline}
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl text-foreground/90 sm:text-2xl">
            {site.role} <span className="text-muted-foreground">·</span>{' '}
            <span className="text-muted-foreground">{site.education}</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Four years building client websites with PHP, Laravel and WordPress. Now building full-stack apps with{' '}
            <span className="text-foreground">React, Node.js, TypeScript and Python</span>.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden />
            St. John’s, NL · Canadian PR · Open to remote or relocation
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/#projects" size="lg">
              View my work
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href={site.resumeUrl} variant="secondary" size="lg">
              <FileText className="size-4" aria-hidden />
              Résumé
            </Button>
            <SocialLinks className="ml-1" />
          </div>
        </div>

        <div className="order-1 w-28 sm:w-40 lg:order-2 lg:w-72">
          <div className="rounded-2xl border border-border bg-surface p-1.5 lg:rounded-3xl lg:p-2">
            <img
              src="/tanzim.jpg"
              alt={`Portrait of ${site.name}`}
              width={534}
              height={776}
              fetchPriority="high"
              className="aspect-square w-full rounded-xl object-cover object-top lg:aspect-[4/5] lg:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
