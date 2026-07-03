import type { Contact } from "../../types/portfolio"
import { ExternalLink } from "../ui/ExternalLink"

type ContactSectionProps = {
  contact: Contact
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <footer className="border-t border-ink/10 pb-12 pt-20 sm:pb-16 sm:pt-28">
      <p className="font-mono text-sm text-accent">{"// contacto"}</p>
      <h2 className="mt-3 text-xl font-medium tracking-tight text-ink sm:text-2xl">{contact.title}</h2>
      <p className="mt-5 max-w-xl leading-8 text-ink-dim">{contact.description}</p>
      <div className="mt-6 flex flex-col items-start gap-2 text-base text-ink-dim sm:flex-row sm:flex-wrap sm:gap-x-6">
        {contact.links.map((link) => (
          <ExternalLink key={link.label} {...link} />
        ))}
      </div>
    </footer>
  )
}
