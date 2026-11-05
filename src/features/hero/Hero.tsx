import { site } from '@/config/site'
import { SwipeGate } from './SwipeGate'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-16 md:pt-16 md:pb-24">
      <h1
        id="hero-title"
        className="display text-[clamp(5.25rem,25vw,13.5rem)] animate-[rise_0.8s_cubic-bezier(0.2,0.7,0.2,1)_both]"
      >
        Tanzim
        <br />
        Rahman
      </h1>

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <p className="max-w-[30ch] text-[1.375rem] leading-snug font-medium text-balance md:text-2xl">
          Full-stack developer in St. John’s, Newfoundland. I build web apps end to end, and I test them properly.
        </p>
        <SwipeGate />
      </div>

      <p className="sr-only">{site.availability.headline}</p>
    </section>
  )
}
