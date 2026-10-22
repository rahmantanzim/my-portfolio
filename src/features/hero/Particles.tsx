import { useState } from 'react'

interface Particle {
  size: number
  left: number
  top: number
  opacity: number
  duration: number
  delay: number
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.45 + 0.15,
    duration: 15 + Math.random() * 20,
    delay: -Math.random() * 20, // negative delay: particles start mid-drift, no synchronized jump
  }))
}

/** Slowly drifting teal dots behind the hero. Hidden when reduced motion is preferred. */
export function Particles({ count = 50 }: { count?: number }) {
  // Generated once per mount so positions don't change on re-render.
  const [particles] = useState(() => createParticles(count))

  return (
    <div aria-hidden className="particles pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px var(--color-primary)`,
            animation: `slow-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
