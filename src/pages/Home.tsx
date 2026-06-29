import React from "react"
import { PageShell } from "../components/layout/PageShell"
import { ContactSection } from "../components/sections/ContactSection"
import { HeroSection } from "../components/sections/HeroSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { TimelineSection } from "../components/sections/TimelineSection"
import { portfolio } from "../config/portfolio"

function Home() {
  return (
    <PageShell>
      <HeroSection hero={portfolio.hero} identity={portfolio.identity} />
      <ProjectsSection projects={portfolio.projects} />
      <TimelineSection
        education={portfolio.education}
        experience={portfolio.experience}
      />
      <ContactSection contact={portfolio.contact} />
    </PageShell>
  )
}

export default React.memo(Home)
