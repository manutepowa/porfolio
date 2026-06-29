import type { Contact } from "../../types/portfolio"
import { ExternalLink } from "../ui/ExternalLink"

type ContactSectionProps = {
  contact: Contact
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <footer className="pb-12 pt-20 sm:pb-16 sm:pt-28">
      <h2 className="text-xl font-medium tracking-tight text-white">{contact.title}</h2>
      <p className="mt-5 max-w-xl leading-8 text-neutral-400">{contact.description}</p>
      <div className="mt-6 flex flex-col items-start gap-2 text-base text-neutral-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
        {contact.links.map((link) => (
          <ExternalLink key={link.label} {...link} />
        ))}
      </div>
    </footer>
  )
}
