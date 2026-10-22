import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { useScrollManagement } from '@/hooks/useScrollManagement'

export function RootLayout() {
  useScrollManagement()

  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<div className="min-h-dvh" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
