import type { ExternalLink as ExternalLinkType } from "../../types/portfolio"
import { ExternalLinkIcon } from "../icons/ExternalLinkIcon"

type ExternalLinkProps = ExternalLinkType & {
  className?: string
}

export function ExternalLink({ label, url, icon = "↗", className = "" }: ExternalLinkProps) {
  return (
    <a
      className={`group inline-flex items-baseline gap-1 font-medium text-accent decoration-accent/40 underline-offset-4 transition hover:text-accent-soft hover:decoration-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
      href={url}
      rel="noreferrer"
      target={url.startsWith("http") ? "_blank" : undefined}
    >
      <span>{label}</span>
      <span className="inline-flex transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        {icon ? <ExternalLinkIcon className="size-3.5" /> : null}
      </span>
    </a>
  )
}
