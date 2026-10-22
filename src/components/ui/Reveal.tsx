import { useEffect, useRef, useState, type ElementType, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  /** Delay in ms, for staggering items in a list. */
  delay?: number
  as?: ElementType
}

/**
 * Fades content in the first time it scrolls into view.
 * Disabled automatically for users who prefer reduced motion (see index.css).
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div', style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
