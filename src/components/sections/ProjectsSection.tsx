import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import type { Project } from "../../types/portfolio"
import { ImagesIcon } from "../icons/ImagesIcon"
import { ExternalLink } from "../ui/ExternalLink"
import { SectionHeader } from "../ui/SectionHeader"

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [activeCaptureIndex, setActiveCaptureIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId, projects],
  )
  const captures = activeProject?.captures ?? []
  const activeCapture = captures[activeCaptureIndex]

  const openCaptures = (projectId: string, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setActiveCaptureIndex(0)
    setActiveProjectId(projectId)
  }

  const closeCaptures = useCallback(() => {
    if (isClosing) return

    setIsClosing(true)
    const closeMs =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--modal-close-dur",
        ),
      ) || 150

    window.setTimeout(() => {
      setActiveProjectId(null)
      setIsClosing(false)
      window.requestAnimationFrame(() => triggerRef.current?.focus())
    }, closeMs)
  }, [isClosing])

  useEffect(() => {
    if (!activeProject) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCaptures()
        return
      }

      if (event.key === "ArrowLeft" && captures.length > 1) {
        setActiveCaptureIndex((index) =>
          index === 0 ? captures.length - 1 : index - 1,
        )
        return
      }

      if (event.key === "ArrowRight" && captures.length > 1) {
        setActiveCaptureIndex((index) => (index + 1) % captures.length)
        return
      }

      if (event.key !== "Tab" || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeProject, captures.length, closeCaptures])

  const showPreviousCapture = () => {
    setActiveCaptureIndex((index) =>
      index === 0 ? captures.length - 1 : index - 1,
    )
  }

  const showNextCapture = () => {
    setActiveCaptureIndex((index) => (index + 1) % captures.length)
  }

  return (
    <section className="scroll-mt-24 pb-16 sm:pb-24" id="proyectos">
      <SectionHeader title="Proyectos seleccionados" />
      <p className="mb-8 max-w-2xl text-base leading-7 text-ink-dim sm:text-lg sm:leading-8">
        Productos digitales en los que conecto interfaz, arquitectura e
        integraciones con IA para resolver problemas concretos.
      </p>

      <div className="grid divide-y divide-ink/10 border-y border-ink/10">
        {projects.map((project) => {
          const captureCount = project.captures?.length ?? 0

          return (
            <article
              className="group -mx-4 px-4 py-7 transition-colors duration-200 hover:bg-surface/35 sm:py-9"
              key={project.id}
            >
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
                <div>
                  <p className="mb-2 font-mono text-xs tracking-[0.14em] text-ink-dim">
                    {project.year} · PROYECTO
                  </p>
                  <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                    <ExternalLink label={project.name} url={project.url} />
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-ink-dim">
                    {project.description}
                  </p>
                </div>

                {captureCount ? (
                  <button
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-2 self-start border border-ink/15 px-3 font-mono text-xs text-ink-dim transition-colors duration-200 hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    onClick={(event) =>
                      openCaptures(project.id, event.currentTarget)
                    }
                    type="button"
                    aria-label={`Ver ${captureCount} ${captureCount === 1 ? "captura" : "capturas"} de ${project.name}`}
                  >
                    <ImagesIcon />
                    Ver {captureCount} {captureCount === 1 ? "captura" : "capturas"}
                  </button>
                ) : (
                  <span className="font-mono text-xs text-ink-dim/70">
                    Sin capturas públicas
                  </span>
                )}
              </div>

              <ul
                aria-label={`Tecnologías y áreas de ${project.name}`}
                className="mt-5 flex flex-wrap gap-x-4 gap-y-2"
              >
                {project.tags.map((tag) => (
                  <li className="font-mono text-xs text-ink-dim" key={tag}>
                    <span aria-hidden="true" className="mr-1 text-accent/70">
                      #
                    </span>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>

      {activeProject && activeCapture ? (
        <div
          className="fixed inset-0 z-50 bg-bg/90 backdrop-blur-sm sm:flex sm:items-center sm:justify-center sm:p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeCaptures()
          }}
        >
          <div
            aria-describedby="project-captures-description"
            aria-labelledby="project-captures-title"
            aria-modal="true"
            className={`t-modal flex h-dvh w-full flex-col bg-surface shadow-2xl shadow-black/70 sm:h-auto sm:max-h-[92vh] sm:max-w-6xl sm:border sm:border-ink/10 ${isClosing ? "is-closing" : "is-open"}`}
            ref={dialogRef}
            role="dialog"
          >
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-ink/10 px-4 py-4 sm:px-6">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-accent">
                  CAPTURAS · {activeCaptureIndex + 1}/{captures.length}
                </p>
                <h3
                  className="mt-1 font-mono text-lg font-semibold text-ink sm:text-xl"
                  id="project-captures-title"
                >
                  {activeProject.name}
                </h3>
                <p className="sr-only" id="project-captures-description">
                  Visor de capturas del proyecto. Usa las flechas izquierda y
                  derecha para navegar y Escape para cerrar.
                </p>
              </div>
              <button
                className="border border-ink/15 px-3 py-2 font-mono text-xs text-ink-dim transition-colors duration-200 hover:border-accent/50 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeCaptures}
                ref={closeButtonRef}
                type="button"
              >
                Cerrar
              </button>
            </header>

            <figure className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto]">
              <a
                aria-label={`Abrir captura ${activeCaptureIndex + 1} a tamaño completo`}
                className="grid min-h-0 place-items-center overflow-auto bg-bg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent sm:p-6"
                href={activeCapture.src}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={activeCapture.alt}
                  className="max-h-[68vh] w-auto max-w-full cursor-zoom-in object-contain"
                  src={activeCapture.src}
                />
              </a>
              {activeCapture.caption ? (
                <figcaption className="border-t border-ink/10 px-4 py-3 text-sm leading-6 text-ink-dim sm:px-6">
                  {activeCapture.caption}
                </figcaption>
              ) : null}
            </figure>

            <footer className="flex shrink-0 flex-col items-stretch gap-3 border-t border-ink/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <span aria-live="polite" className="font-mono text-xs text-ink-dim">
                Captura {activeCaptureIndex + 1} de {captures.length}
              </span>
              {captures.length > 1 ? (
                <div className="grid grid-cols-2 gap-2 sm:flex">
                  <button
                    className="border border-ink/15 px-3 py-2 font-mono text-xs text-ink transition-colors duration-200 hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    onClick={showPreviousCapture}
                    type="button"
                  >
                    ← Anterior
                  </button>
                  <button
                    className="border border-ink/15 px-3 py-2 font-mono text-xs text-ink transition-colors duration-200 hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    onClick={showNextCapture}
                    type="button"
                  >
                    Siguiente →
                  </button>
                </div>
              ) : null}
            </footer>
          </div>
        </div>
      ) : null}
    </section>
  )
}
