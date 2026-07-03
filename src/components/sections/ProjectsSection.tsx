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

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/[0.06] hover:shadow-xl hover:shadow-black/40 sm:p-6"
            key={project.id}
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
              <ExternalLink label={project.name} url={project.url} />
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
                {project.year}
              </span>
            </div>
            <p className="leading-8 text-neutral-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-neutral-400"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.captures?.length ? (
                <button
                  className="inline-flex shrink-0 items-center justify-center rounded-full p-2 text-orange-300/80 transition duration-200 ease-out hover:-translate-y-0.5 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2 focus:ring-offset-black"
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
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm t-modal ${isClosing ? "is-closing" : "is-open"}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeCaptures()
            }
          }}
          role="dialog"
        >
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950/95 p-5 shadow-2xl shadow-black/70 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-300/80">
                  Capturas
                </p>
                <h3
                  className="mt-2 text-2xl font-semibold text-white"
                  id="project-captures-title"
                >
                  {activeProject.name}
                </h3>
              </div>
              <button
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300 transition duration-200 ease-out hover:border-orange-500/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                onClick={closeCaptures}
                type="button"
              >
                Cerrar
              </button>
            </div>

            <div className="grid gap-6">
              {activeProject.captures.map((capture) => (
                <figure
                  className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                  key={capture.src}
                >
                  <img
                    alt={capture.alt}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    src={capture.src}
                  />
                  {capture.caption ? (
                    <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-neutral-400">
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
