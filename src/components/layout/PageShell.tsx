import type { ReactNode } from "react"

type PageShellProps = {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-bg text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16 lg:max-w-4xl lg:px-10 lg:py-20">
        {children}
      </div>
    </main>
  )
}
