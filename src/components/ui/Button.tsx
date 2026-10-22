import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn, isExternal } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'animated'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ' +
  'disabled:pointer-events-none disabled:opacity-60 cursor-pointer'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/40',
  secondary: 'border border-border-strong text-foreground hover:border-primary hover:text-primary',
  ghost: 'text-muted-foreground hover:text-foreground hover:bg-surface',
  // Outline with a teal stroke that races around the border on hover.
  animated: 'animated-border relative border border-border-strong text-foreground hover:border-transparent',
}

function AnimatedStroke() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 size-full overflow-visible"
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
    >
      <path
        d="M 30,1 A 29,29 0 0 0 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 A 29,29 0 0 0 170,1 Z"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="animated-border-path"
      />
    </svg>
  )
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<'button'> & { href?: undefined }
type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
    /** Internal paths use the router; external URLs and PDFs open in a new tab. */
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/** One button for every case: <button>, internal <Link>, or external <a>. */
export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)
  if (variant === 'animated') {
    children = (
      <>
        <AnimatedStroke />
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </>
    )
  }

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink
    if (isExternal(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
