import type { Contact } from "../../types/portfolio"
import { ExternalLink } from "../ui/ExternalLink"

type ContactSectionProps = {
  contact: Contact
}

export function ContactSection({ contact }: ContactSectionProps) {
  const emailLink = contact.links.find((link) => link.url.startsWith("mailto:"))
  const secondaryLinks = contact.links.filter(
    (link) => !link.url.startsWith("mailto:"),
  )
  const emailAddress = emailLink?.url.replace("mailto:", "")

  return (
    <footer
      className="scroll-mt-24 border-t border-ink/10 pb-10 pt-16 sm:pb-14 sm:pt-20"
      id="contacto"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <div>
          <p className="font-mono text-sm text-accent">{"// contacto"}</p>
          <h2 className="mt-4 max-w-xl font-pixel text-2xl tracking-tight text-ink sm:text-3xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-dim sm:text-lg">
            {contact.description}
          </p>
          <p className="mt-5 flex items-center gap-2 font-mono text-xs text-ink-dim">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_rgba(245,158,11,0.55)]" />
            Disponible para proyectos y colaboraciones
          </p>
        </div>

        {emailLink ? (
          <a
            className="group inline-flex min-h-12 items-center justify-between gap-6 border border-accent bg-accent px-4 font-mono text-sm font-semibold text-bg transition-colors duration-200 hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href={emailLink.url}
          >
            <span>Escríbeme</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ) : null}
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-5 text-sm text-ink-dim sm:flex-row sm:items-center sm:justify-between">
        {emailAddress ? (
          <a
            className="font-mono transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href={emailLink?.url}
          >
            {emailAddress}
          </a>
        ) : null}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {secondaryLinks.map((link) => (
            <ExternalLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </footer>
  )
}
