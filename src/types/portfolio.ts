export type ExternalLink = {
  label: string
  url: string
  icon?: string
}

export type Location = {
  city: string
  country: string
  alternateCity?: string
  alternateCountry?: string
}

export type Identity = {
  name: string
  nickname: string
  role: string
  location: Location
  avatar?: string
  logo?: string
}

export type Seo = {
  title: string
  description: string
}

export type Hero = {
  eyebrow: string
  greeting: string
  headline: string
  description: string
}

export type Project = {
  id: string
  name: string
  url: string
  year: string
  description: string
  tags: string[]
  featured?: boolean
}

export type TimelineEntry = {
  id: string
  organization: string
  organizationUrl?: string
  role: string
  period: string
  description: string
  highlights?: string[]
}

export type Contact = {
  title: string
  description: string
  links: ExternalLink[]
}

export type PortfolioConfig = {
  identity: Identity
  seo: Seo
  hero: Hero
  social: Record<string, ExternalLink>
  projects: Project[]
  experience: TimelineEntry[]
  education: TimelineEntry[]
  contact: Contact
}
