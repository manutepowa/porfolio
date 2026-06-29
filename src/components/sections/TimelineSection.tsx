import type { TimelineEntry } from "../../types/portfolio"
import { SectionHeader } from "../ui/SectionHeader"
import { TimelineItem } from "../ui/TimelineItem"

type TimelineSectionProps = {
  experience: TimelineEntry[]
  education: TimelineEntry[]
}

export function TimelineSection({ experience, education }: TimelineSectionProps) {
  const entries = [...experience, ...education]

  return (
    <section className="relative py-4 sm:py-8">
      <SectionHeader title="Experiencia y Formación" />
      <div className="timeline relative">
        {entries.map((entry) => (
          <TimelineItem entry={entry} key={entry.id} />
        ))}
      </div>
    </section>
  )
}
