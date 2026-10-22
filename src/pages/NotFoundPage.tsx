import { Button } from '@/components/ui/Button'
import { site } from '@/config/site'

export default function NotFoundPage() {
  return (
    <div className="container-page flex min-h-[70dvh] flex-col items-center justify-center pt-24 pb-16 text-center">
      <title>{`Page not found — ${site.name}`}</title>
      <meta name="robots" content="noindex" />
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn’t exist</h1>
      <p className="mt-3 text-muted-foreground">The link may be broken, or the page may have moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/projects" variant="secondary">
          See projects
        </Button>
      </div>
    </div>
  )
}
