import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface Sample {
  x: number
  y: number
  t: number
}

interface Reading {
  ms: number
  speed: number
  straightness: number
  samples: number
}

const HANDLE = 56 // px, matches size-14
const DONE_AT = 0.9

/** The same kinds of features the swipe-2FA project extracts, from one swipe. */
function measure(samples: Sample[]): Reading | null {
  if (samples.length < 3) return null
  const first = samples[0]
  const last = samples[samples.length - 1]
  const ms = Math.max(1, last.t - first.t)
  let path = 0
  for (let i = 1; i < samples.length; i++) {
    path += Math.hypot(samples[i].x - samples[i - 1].x, samples[i].y - samples[i - 1].y)
  }
  const direct = Math.hypot(last.x - first.x, last.y - first.y)
  return { ms: Math.round(ms), speed: path / ms, straightness: path ? direct / path : 1, samples: samples.length }
}

function scrollToWork() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('work')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
}

/**
 * "Swipe to see my work": a small, honest nod to the swipe-based 2FA project.
 * It measures the drag (duration, speed, straightness) and shows the numbers,
 * then scrolls to the work. Works with a keyboard too.
 */
export function SwipeGate() {
  const trackRef = useRef<HTMLDivElement>(null)
  const samples = useRef<Sample[]>([])
  const startX = useRef(0)
  const [x, setX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [reading, setReading] = useState<Reading | 'keyboard' | null>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  // Track the slider's width so the handle's range stays right on resize.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setTrackWidth(entry.contentRect.width))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const range = Math.max(1, trackWidth - HANDLE)
  const max = () => range
  const done = reading !== null
  const pct = Math.round((x / range) * 100) || 0
  // Keep a finished handle pinned to the end if the track resizes.
  const handleX = done ? range : Math.min(x, range)

  const finish = (r: Reading | 'keyboard') => {
    setX(max())
    setReading(r)
    window.setTimeout(scrollToWork, 1400)
  }

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    if (done) return
    e.currentTarget.setPointerCapture(e.pointerId)
    startX.current = e.clientX - x
    samples.current = [{ x: e.clientX, y: e.clientY, t: e.timeStamp }]
    setDragging(true)
  }

  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return
    samples.current.push({ x: e.clientX, y: e.clientY, t: e.timeStamp })
    setX(Math.min(max(), Math.max(0, e.clientX - startX.current)))
  }

  const onPointerUp = () => {
    if (!dragging) return
    setDragging(false)
    if (x >= max() * DONE_AT) finish(measure(samples.current) ?? 'keyboard')
    else setX(0)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (done) return
    const step = max() / 5
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(max(), x + step)
      if (next >= max() * DONE_AT) finish('keyboard')
      else setX(next)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      setX(Math.max(0, x - step))
    } else if (e.key === 'End' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      finish('keyboard')
    }
  }

  return (
    <div className="max-w-md">
      <div
        ref={trackRef}
        className={cn(
          'relative h-14 overflow-hidden border-[1.5px] border-foreground bg-card select-none',
          done && 'border-primary',
        )}
      >
        {/* Fill that follows the handle */}
        <div
          aria-hidden
          className={cn('absolute inset-y-0 left-0 bg-primary', !dragging && 'transition-[width] duration-300 ease-out')}
          style={{ width: handleX + HANDLE }}
        />
        <p
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 flex items-center text-[0.9375rem] font-medium transition-opacity',
            done ? 'pr-[4.5rem] pl-5' : 'pl-[4.75rem]',
            handleX > 40 && !done ? 'opacity-0' : 'opacity-100',
            done && 'text-primary-foreground',
          )}
        >
          {done ? 'Recorded. Taking you to the work…' : 'Swipe to see my work'}
        </p>
        <button
          type="button"
          role="slider"
          aria-label="Swipe to see my work"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={done ? 100 : pct}
          aria-valuetext={done ? 'Done' : `${pct}%`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
          className={cn(
            'absolute inset-y-0 left-0 flex w-14 cursor-grab touch-none items-center justify-center bg-foreground text-background active:cursor-grabbing',
            !dragging && 'transition-transform duration-300 ease-out',
            done && 'cursor-default bg-primary-foreground text-primary',
          )}
          style={{ transform: `translateX(${handleX}px)` }}
        >
          {done ? <Check className="size-5" aria-hidden /> : <ArrowRight className="size-5" aria-hidden />}
        </button>
      </div>

      <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-muted-foreground" aria-live="polite">
        {reading === null && (
          <>
            It measures your swipe the way my{' '}
            <Link to="/projects/swipe-based-2fa" className="ink-link">
              swipe-based 2FA project
            </Link>{' '}
            does. Or{' '}
            <button type="button" onClick={scrollToWork} className="ink-link cursor-pointer">
              skip straight to it
            </button>
            .
          </>
        )}
        {reading === 'keyboard' && 'Done with the keyboard, so there was no swipe to measure.'}
        {reading !== null && reading !== 'keyboard' && (
          <span className="font-mono text-[0.8125rem] text-foreground">
            {reading.ms} ms, {reading.speed.toFixed(2)} px/ms, {Math.round(reading.straightness * 100)}% straight,{' '}
            {reading.samples} touch samples.
          </span>
        )}
      </p>
    </div>
  )
}
