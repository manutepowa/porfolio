import type { ReactNode } from "react"

type PageShellProps = {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-bg text-ink">
      <a
        className="sr-only z-50 bg-accent px-4 py-2 font-mono text-sm font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#contenido"
      >
        Saltar al contenido
      </a>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.035),transparent_34%),radial-gradient(circle_at_12%_20%,rgba(245,158,11,0.025),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(255,255,255,0.025),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:6px_6px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(115deg,transparent_0_17%,rgba(0,0,0,0.96)_17%_25%,transparent_25%_42%,rgba(0,0,0,0.92)_42%_52%,transparent_52%_100%)]" />

      <header className="relative mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 pb-4 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        <a
          className="font-mono text-sm font-semibold text-ink transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#inicio"
        >
          mtercero<span className="text-accent">.dev</span>
        </a>
        <nav aria-label="Navegación principal">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-ink-dim sm:gap-x-6">
            <li>
              <a
                className="transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="#proyectos"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="#open-source"
              >
                Open source
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="#experiencia"
              >
                Trayectoria
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="#contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main
        className="relative mx-auto w-full max-w-5xl px-6 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20 lg:pt-16"
        id="contenido"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  )
}
