import { useCallback, useEffect, useMemo, useState } from "react"
import type { Project } from "../../types/portfolio"
import { ExternalLink } from "../ui/ExternalLink"
import { SectionHeader } from "../ui/SectionHeader"
import { ImagesIcon } from "../icons/ImagesIcon"

type ProjectsSectionProps = {
  projects: Project[],
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId, projects],
  )

  const closeCaptures = useCallback(() => {
    if (isClosing) {
      return
    }

    setIsClosing(true)

    const closeMs = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--modal-close-dur",
      ),
    ) || 150

    window.setTimeout(() => {
      setActiveProjectId(null)
      setIsClosing(false)
    }, closeMs)
  }, [isClosing])

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCaptures()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeProject, closeCaptures])

  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader title="Proyectos Destacados" />

      <div className="grid divide-y divide-ink/10">
        {projects.map((project) => (
          <article
            className="group py-6 transition-colors duration-200 first:pt-0 hover:bg-surface/30 sm:py-8"
            key={project.id}
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
              <ExternalLink label={project.name} url={project.url} />
              <span className="font-mono text-xs tracking-[0.15em] text-ink-dim">
                {project.year}
              </span>
            </div>
            <p className="leading-8 text-ink-dim">{project.description}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="border border-ink/10 px-2 py-0.5 font-mono text-xs text-ink-dim"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.captures?.length ? (
                <button
                  className="inline-flex shrink-0 items-center justify-center rounded-md border border-ink/10 p-2 text-ink-dim transition duration-200 ease-out hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-bg"
                  onClick={() => setActiveProjectId(project.id)}
                  type="button"
                  aria-label={`Ver capturas de ${project.name}`}
                >
                  <ImagesIcon />
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {activeProject?.captures?.length ? (
        <div
          aria-labelledby="project-captures-title"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-bg/85 p-4 backdrop-blur-sm t-modal ${isClosing ? "is-closing" : "is-open"}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeCaptures()
            }
          }}
          role="dialog"
        >
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-ink/10 bg-surface p-5 shadow-2xl shadow-black/70 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-accent">
                  // capturas
                </p>
                <h3
                  className="mt-2 font-mono text-2xl font-semibold text-ink"
                  id="project-captures-title"
                >
                  {activeProject.name}
                </h3>
              </div>
              <button
                className="rounded-md border border-ink/10 px-3 py-2 text-sm text-ink-dim transition duration-200 ease-out hover:border-accent/40 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent/60"
                onClick={closeCaptures}
                type="button"
              >
                Cerrar
              </button>
            </div>

            <div className="grid gap-6">
              {activeProject.captures.map((capture) => (
                <figure
                  className="overflow-hidden rounded-lg border border-ink/10 bg-bg"
                  key={capture.src}
                >
                  <img
                    alt={capture.alt}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    src={capture.src}
                  />
                  {capture.caption ? (
                    <figcaption className="border-t border-ink/10 px-4 py-3 text-sm leading-6 text-ink-dim">
                      {capture.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
