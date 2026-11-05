import { cn } from '@/lib/utils'

interface NumberedHeadingProps {
  id: string
  number: string
  children: string
  className?: string
}

/** Section heading with a mono number and a rule that runs to the right: "01. About me ────". */
export function NumberedHeading({ id, number, children, className }: NumberedHeadingProps) {
  return (
    <h2 id={id} className={cn('numbered-heading mb-10', className)}>
      <span className="num">{number}.</span>
      {children}
    </h2>
  )
}
