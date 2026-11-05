import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { Particles } from './Particles'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-dvh items-center overflow-hidden">
      {/* Background: faint grid horizon plus a few drifting particles */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src="/hero-bg.webp" alt="" className="size-full object-cover object-bottom opacity-25" />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/85 to-background" />
      </div>
      <Particles count={30} />

      <div className="content-column py-32">
        <p className="animate-fade-in font-mono text-sm text-primary md:text-base">Hi, I’m</p>
        <h1
          id="hero-title"
          className="mt-5 animate-fade-in text-5xl leading-[1.05] font-semibold tracking-tight animation-delay-100 sm:text-6xl lg:text-7xl"
        >
          {site.name}.
        </h1>
        <p className="mt-3 animate-fade-in text-4xl leading-[1.1] font-semibold tracking-tight text-muted-foreground animation-delay-200 sm:text-5xl lg:text-6xl">
          I build scalable systems and clean interfaces.
        </p>

        <p className="mt-8 max-w-xl animate-fade-in text-lg leading-relaxed text-pretty text-muted-foreground animation-delay-300">
          I’m a full-stack developer with four years of agency work behind me, now finishing a Master’s in Software
          Engineering at <span className="text-primary">Memorial University</span>. Canadian Permanent Resident,{' '}
          {site.availability.headline.toLowerCase()}.
        </p>

        <div className="mt-12 flex animate-fade-in flex-wrap items-center gap-6 animation-delay-400">
          <Link to={{ pathname: '/', hash: 'projects' }} className="btn-outline">
            See my work
          </Link>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-foreground/90 underline decoration-primary/50 underline-offset-[6px] transition-colors hover:text-primary hover:decoration-primary"
          >
            Download résumé
          </a>
        </div>
      </div>
    </section>
  )
}
