import { useEffect, useRef } from "react"
import type { Identity, Hero } from "../../types/portfolio"
import { Avatar } from "../ui/Avatar"
import { TypeScript } from "../icons/tech/TypeScript"
import { Nodejs } from "../icons/tech/Nodejs"
import { ReactIcon } from "../icons/tech/ReactIcon"
import { PayloadCMS } from "../icons/tech/PayloadCMS"
import { Drupal } from "../icons/tech/Drupal"

const techStack = [
  {
    Icon: TypeScript,
    label: "TypeScript",
    url: "https://www.typescriptlang.org/",
    iconClassName: "size-6 rounded-sm",
  },
  {
    Icon: Nodejs,
    label: "Node.js",
    url: "https://nodejs.org/",
    iconClassName: "h-6 w-auto",
  },
  {
    Icon: ReactIcon,
    label: "React",
    url: "https://react.dev/",
    iconClassName: "size-6",
  },
  {
    Icon: PayloadCMS,
    label: "Payload CMS",
    url: "https://payloadcms.com/",
    iconClassName: "size-6",
  },
  {
    Icon: Drupal,
    label: "Drupal",
    url: "https://www.drupal.org/",
    iconClassName: "size-6",
  },
]

type HeroSectionProps = {
  contactUrl: string,
  identity: Identity,
  hero: Hero,
}

export function HeroSection({ contactUrl, identity, hero }: HeroSectionProps) {
  const blockRef = useRef<HTMLDivElement>(null)
  const techIconsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const block = blockRef.current
    if (!block) return
    block.classList.remove("is-shown")
    void block.offsetHeight
    block.classList.add("is-shown")
  }, [])

  const setTechIconShifts = (activeIdx: number | null, phase: "in" | "out") => {
    if (!techIconsRef.current) return

    const cs = getComputedStyle(document.documentElement)
    const num = (name: string, fb: number) => {
      const v = parseFloat(cs.getPropertyValue(name))
      return Number.isFinite(v) ? v : fb
    }
    const ease = (name: string, fb: string) =>
      cs.getPropertyValue(name).trim() || fb

    const lift = num("--avatar-lift", -4)
    const falloff = num("--avatar-falloff", 0.45)
    const scale = num("--avatar-scale", 1.05)
    const tf =
      phase === "out"
        ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
        : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)")

    techIconsRef.current
      .querySelectorAll<HTMLElement>(".t-avatar")
      .forEach((el, i) => {
        el.style.transitionTimingFunction = tf
        if (activeIdx == null) {
          el.style.setProperty("--shift", "0px")
          el.style.setProperty("--scale-active", "1")
          return
        }
        const d = Math.abs(i - activeIdx)
        el.style.setProperty(
          "--shift",
          (lift * Math.pow(falloff, d)).toFixed(3) + "px",
        )
        el.style.setProperty(
          "--scale-active",
          i === activeIdx ? String(scale) : "1",
        )
      })
  }

  return (
    <section className="scroll-mt-24 pb-20 sm:pb-28" id="inicio">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <div ref={blockRef} className="t-stagger max-w-3xl">
          <p className="t-stagger-line t-stagger-line--1 font-mono text-sm text-ink-dim">
            <span className="text-accent">{">"}</span>{" "}
            <span>
              {identity.nickname}@{identity.location.city.toLowerCase()}
            </span>
            <span className="text-ink-dim">:~$ </span>
            <span className="text-ink">whoami</span>
          </p>

          <h1 className="t-stagger-line t-stagger-line--1 mt-5 font-pixel text-4xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl">
            {identity.name}
          </h1>

          <p className="t-stagger-line t-stagger-line--1 mt-4 max-w-2xl font-mono text-base leading-relaxed tracking-tight text-ink-dim sm:text-lg">
            {identity.role}
          </p>

          <p className="t-stagger-line t-stagger-line--2 mt-8 max-w-2xl text-lg leading-8 text-ink sm:text-xl sm:leading-9">
            {hero.description}
          </p>

          <div className="t-stagger-line t-stagger-line--2 mt-9 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-sm">
            <a
              className="text-accent transition-colors duration-200 hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href="#proyectos"
            >
              Ver proyectos →
            </a>
            <span aria-hidden="true" className="text-ink-faint">
              /
            </span>
            <a
              className="text-ink-dim transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={contactUrl}
            >
              Escríbeme
            </a>
          </div>
        </div>

        <aside className="border-l border-ink/10 pl-5 lg:mt-1" aria-label="Perfil y herramientas principales">
          <div className="flex items-center gap-4">
            <Avatar identity={identity} />
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-accent">
                FOCUS
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-dim">
                Producto web · IA aplicada · open source
              </p>
            </div>
          </div>

          <p className="mt-7 font-mono text-xs tracking-[0.16em] text-ink-dim">TOOLCHAIN</p>
          <ul
            ref={techIconsRef}
            className="t-avatar-group mt-3 flex flex-wrap items-center gap-2"
            aria-label="Tecnologías principales"
            onMouseLeave={() => setTechIconShifts(null, "out")}
          >
            {techStack.map(({ Icon, label, url, iconClassName }, i) => (
              <li
                key={label}
                className="t-avatar flex size-8 items-center justify-center rounded-md border border-ink/10 bg-surface/60"
                onMouseEnter={() => setTechIconShifts(i, "in")}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir la página oficial de ${label}`}
                  title={label}
                  className="flex size-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon
                    className={`${iconClassName} opacity-60 transition-opacity duration-200 hover:opacity-100`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
