import React from "react"
import { PageShell } from "../components/layout/PageShell"
import { ContactSection } from "../components/sections/ContactSection"
import { HeroSection } from "../components/sections/HeroSection"
import { OpenSourceSection } from "../components/sections/OpenSourceSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { TimelineSection } from "../components/sections/TimelineSection"
import { portfolio } from "../config/portfolio"

function Home() {
  const contactUrl =
    portfolio.contact.links.find((link) => link.url.startsWith("mailto:"))
      ?.url ?? "#contacto"

  return (
    <PageShell>
      <HeroSection
        contactUrl={contactUrl}
        hero={portfolio.hero}
        identity={portfolio.identity}
      />
      <ProjectsSection projects={portfolio.projects} />
      <OpenSourceSection openSource={portfolio.openSource} />
      <TimelineSection
        education={portfolio.education}
        experience={portfolio.experience}
      />
      <ContactSection contact={portfolio.contact} />
    </PageShell>
  )
}

export default React.memo(Home)
