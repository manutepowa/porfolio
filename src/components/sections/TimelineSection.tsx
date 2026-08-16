import type { TimelineEntry } from "../../types/portfolio"
import { SectionHeader } from "../ui/SectionHeader"
import { TimelineItem } from "../ui/TimelineItem"

type TimelineSectionProps = {
  experience: TimelineEntry[]
  education: TimelineEntry[]
}

export function TimelineSection({ experience, education }: TimelineSectionProps) {
  return (
    <section className="relative scroll-mt-24 py-4 sm:py-8" id="experiencia">
      <SectionHeader title="Experiencia" />
      <p className="mb-4 max-w-2xl text-base leading-7 text-ink-dim sm:text-lg sm:leading-8">
        Trayectoria construyendo productos, plataformas e integraciones para
        instituciones, empresas y ecosistemas de innovación.
      </p>
      <div className="timeline relative">
        {experience.map((entry) => (
          <TimelineItem entry={entry} key={entry.id} />
        ))}
      </div>

      <div className="mt-16 sm:mt-24">
        <SectionHeader title="Formación" />
        <div className="timeline relative">
          {education.map((entry) => (
            <TimelineItem entry={entry} key={entry.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
