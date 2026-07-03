import type { TimelineEntry } from "../../types/portfolio"
import { ExternalLink } from "./ExternalLink"

type TimelineItemProps = {
  entry: TimelineEntry,
}

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <article className="timeline-item relative grid gap-3 py-10 pr-0 md:grid-cols-[minmax(0,1fr)_9rem] md:gap-8 md:pr-16">
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
        <h3 className="text-lg font-semibold tracking-tight text-ink">
          {entry.role}
        </h3>
      </div>

      <p className="font-mono text-sm tracking-wider text-ink-dim md:text-right">
        {entry.period}
      </p>

      <div className="md:col-span-2 md:pr-36">
        <p className="text-base leading-8 text-ink">{entry.description}</p>
        {entry.highlights?.length ? (
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-ink-dim">
            {entry.highlights.map((highlight) => (
              <li className="flex gap-2" key={highlight}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
