import type { OpenSource } from "../../types/portfolio"
import { ExternalLink } from "../ui/ExternalLink"
import { SectionHeader } from "../ui/SectionHeader"

type OpenSourceSectionProps = {
  openSource: OpenSource
}

const statusLabels = {
  active: "Mantenido",
  maintenance: "Mantenimiento",
  archived: "Archivado",
} as const

export function OpenSourceSection({ openSource }: OpenSourceSectionProps) {
  return (
    <section className="scroll-mt-24 pb-16 sm:pb-24" id="open-source">
      <SectionHeader title="Open source" />
      <p className="mb-8 max-w-2xl text-base leading-7 text-ink-dim sm:text-lg sm:leading-8">
        Herramientas que mantengo y publico para resolver problemas recurrentes
        en proyectos reales, con el código y la documentación disponibles para
        la comunidad.
      </p>

      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {openSource.projects.map((project) => (
          <article
            className="-mx-4 grid gap-6 px-4 py-7 transition-colors duration-200 hover:bg-surface/35 sm:py-9 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10"
            key={project.id}
          >
            <div>
              <p className="mb-2 font-mono text-xs tracking-[0.14em] text-ink-dim">
                <span className="text-accent">
                  {statusLabels[project.status]}
                </span>{" "}
                · {project.license}
              </p>
              <h3 className="font-pixel text-lg tracking-tight text-ink sm:text-xl">
                {project.name}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-dim">
                {project.description}
              </p>
              <ul
                aria-label={`Tecnologías de ${project.name}`}
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
            </div>

            <div className="flex flex-col justify-between gap-5 lg:items-stretch">
              {project.installCommand ? (
                <div className="border border-ink/10 bg-bg/70 px-4 py-3 font-mono text-xs text-ink-dim">
                  <span aria-hidden="true" className="mr-2 text-accent">
                    $
                  </span>
                  <code>{project.installCommand}</code>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
                <ExternalLink
                  className="font-mono"
                  label="Código"
                  url={project.repositoryUrl}
                />
                {project.packageUrl ? (
                  <ExternalLink
                    className="font-mono"
                    label="npm"
                    url={project.packageUrl}
                  />
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-end font-mono text-sm">
        <ExternalLink
          className="font-mono"
          label="Ver todos los repositorios"
          url={openSource.profileUrl}
        />
      </div>
    </section>
  )
}
