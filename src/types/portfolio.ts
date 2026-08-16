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
  description: string
}

export type Project = {
  id: string
  name: string
  url: string
  year: string
  description: string
  tags: string[]
  captures?: ProjectCapture[]
}

export type ProjectCapture = {
  src: string
  alt: string
  caption?: string
}

type OpenSourceProject = {
  id: string
  name: string
  description: string
  repositoryUrl: string
  packageUrl?: string
  installCommand?: string
  tags: string[]
  license: string
  status: "active" | "maintenance" | "archived"
}

export type OpenSource = {
  profileUrl: string
  projects: OpenSourceProject[]
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
  projects: Project[]
  openSource: OpenSource
  experience: TimelineEntry[]
  education: TimelineEntry[]
  contact: Contact
}
