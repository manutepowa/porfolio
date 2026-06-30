import type { ReactNode } from "react"

type PageShellProps = {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-neutral-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_12%_20%,rgba(255,77,0,0.05),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] [background-image:radial-gradient(circle,rgba(255,255,255,0.72)_1px,transparent_1px)] [background-size:8px_8px]" />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16 lg:max-w-4xl lg:px-10 lg:py-20">
        {children}
      </div>
    </main>
  )
}
