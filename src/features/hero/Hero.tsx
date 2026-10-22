import { ArrowRight, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/config/site'
import { Particles } from './Particles'
import { SkillMarquee } from './SkillMarquee'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Background: grid horizon image fading into the page, plus drifting particles */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src="/hero-bg.webp" alt="" className="size-full object-cover object-[center_70%] opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/40 to-background" />
        {/* Darken behind the text column so the horizon line doesn't compete with copy */}
        <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/30 to-transparent lg:via-background/10" />
      </div>
      <Particles />

      <div className="container-page pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="order-2 max-w-2xl lg:order-1">
            <p className="glass inline-flex animate-fade-in items-center gap-2.5 rounded-full px-4 py-2 text-sm text-foreground/90">
              <span className="relative flex size-2" aria-hidden>
                <span className="pulse-dot absolute inline-flex size-full rounded-full bg-primary" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {site.availability.headline}
            </p>

            <h1
              id="hero-title"
              className="mt-8 animate-fade-in text-4xl leading-[1.1] font-bold tracking-tight text-balance animation-delay-100 sm:text-5xl lg:text-6xl"
            >
              Building <span className="glow-text text-primary">scalable</span> systems and{' '}
              <span className="glow-text text-primary">clean</span> interfaces
            </h1>

            <p className="mt-6 max-w-xl animate-fade-in text-lg leading-relaxed text-pretty text-muted-foreground animation-delay-200">
              I’m <span className="font-serif text-xl text-foreground italic">{site.name}</span>, a full-stack developer
              doing a Master’s in Software Engineering at Memorial University. Four years of client web work, now
              building with <span className="text-foreground">React, TypeScript, Node.js and Python</span>.
            </p>

            <p className="mt-5 flex animate-fade-in items-center gap-2 text-sm text-muted-foreground animation-delay-300">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
              St. John’s, NL · Canadian Permanent Resident · Open to remote or relocation
            </p>

            <div className="mt-9 flex animate-fade-in flex-wrap items-center gap-4 animation-delay-400">
              <Button href="/#projects" size="lg">
                View my work
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button href={site.resumeUrl} variant="animated" size="lg">
                <Download className="size-4" aria-hidden />
                Download résumé
              </Button>
            </div>

            <SocialLinks className="mt-6 -ml-2 animate-fade-in animation-delay-400" />
          </div>

          {/* Portrait */}
          <div className="relative order-1 w-36 animate-fade-in animation-delay-300 sm:w-48 lg:order-2 lg:mx-auto lg:w-80">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-full bg-primary/15 blur-3xl" />
            <div className="glass glow-border rounded-3xl p-1.5 lg:p-2">
              <img
                src="/tanzim.jpg"
                alt={`Portrait of ${site.name}`}
                width={534}
                height={776}
                fetchPriority="high"
                className="aspect-square w-full rounded-2xl object-cover object-top lg:aspect-[4/5]"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="mb-5 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">Tech I work with</p>
          <SkillMarquee />
        </div>
      </div>
    </section>
  )
}
