import type { TimelineEntry } from "../../types/portfolio"
import { ExternalLink } from "./ExternalLink"

type TimelineItemProps = {
  entry: TimelineEntry
}

export function TimelineItem({ entry }: TimelineItemProps) {
  const visibleHighlights = entry.highlights?.slice(0, 3) ?? []
  const additionalHighlights = entry.highlights?.slice(3) ?? []

  return (
    <article className="timeline-item relative grid gap-3 border-t border-ink/10 py-9 pr-0 md:grid-cols-[minmax(0,1fr)_9rem] md:gap-8 md:pr-16 md:py-10">
      <div>
        <div className="mb-1">
          {entry.organizationUrl ? (
            <ExternalLink
              label={entry.organization}
              url={entry.organizationUrl}
            />
          ) : (
            <span className="font-medium text-accent">
              {entry.organization}
            </span>
          )}
        </div>
        <h3 className="text-base font-semibold tracking-tight text-ink">
          {entry.role}
        </h3>
      </div>

      <p className="font-mono text-sm tracking-wider text-ink-dim md:text-right">
        {entry.period}
      </p>

      <div className="md:col-span-2 md:pr-36">
        <p className="text-base leading-8 text-ink">{entry.description}</p>
        {visibleHighlights.length ? (
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink-dim">
            {visibleHighlights.map((highlight) => (
              <li className="flex gap-2" key={highlight}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {additionalHighlights.length ? (
          <details className="group mt-4">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-mono text-xs text-ink-dim transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-open:rotate-90"
              >
                →
              </span>
              Ver {additionalHighlights.length} detalles más
            </summary>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink-dim">
              {additionalHighlights.map((highlight) => (
                <li className="flex gap-2" key={highlight}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-dim/60" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </div>
    </article>
  )
}
