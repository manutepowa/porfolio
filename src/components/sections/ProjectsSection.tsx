import type { Project } from "../../types/portfolio"
import { ExternalLink } from "../ui/ExternalLink"
import { SectionHeader } from "../ui/SectionHeader"

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="pb-10 sm:pb-16">
      <SectionHeader meta="2026" title="Proyectos Destacados" />

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:border-orange-500/40 hover:bg-orange-500/[0.06] sm:p-6"
            key={project.id}
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
              <ExternalLink label={project.name} url={project.url} />
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">{project.year}</span>
            </div>
            <p className="leading-8 text-neutral-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-neutral-400"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
