import type { ReactNode } from "react"

type PageShellProps = {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-bg text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.035),transparent_34%),radial-gradient(circle_at_12%_20%,rgba(255,77,0,0.025),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(255,255,255,0.025),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:6px_6px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(115deg,transparent_0_17%,rgba(0,0,0,0.96)_17%_25%,transparent_25%_42%,rgba(0,0,0,0.92)_42%_52%,transparent_52%_100%)]" />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16 lg:max-w-4xl lg:px-10 lg:py-20">
        {children}
      </div>
    </main>
  )
}
