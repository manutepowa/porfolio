import { useEffect, useRef } from "react"
import type { Identity, Hero } from "../../types/portfolio"
import { Avatar } from "../ui/Avatar"
import { TypeScript } from "../icons/tech/TypeScript"
import { Nodejs } from "../icons/tech/Nodejs"
import { ReactIcon } from "../icons/tech/ReactIcon"
import { PayloadCMS } from "../icons/tech/PayloadCMS"
import { TailwindCSS } from "../icons/tech/TailwindCSS"
import { Neovim } from "../icons/tech/Neovim"
import { Linux } from "../icons/tech/Linux"
import { OpenCode } from "../icons/tech/OpenCode"

const techStack = [
  { Icon: TypeScript, iconClassName: "size-6 rounded-sm" },
  { Icon: Nodejs, iconClassName: "h-6 w-auto" },
  { Icon: ReactIcon, iconClassName: "size-6" },
  { Icon: PayloadCMS, iconClassName: "size-6" },
  { Icon: TailwindCSS, iconClassName: "size-6" },
  { Icon: Neovim, iconClassName: "h-6 w-auto" },
  { Icon: Linux, iconClassName: "size-6" },
  {
    Icon: OpenCode,
    iconClassName: "size-6 rounded-sm",
    itemClassName: "rounded-md bg-white/[0.04] ring-1 ring-white/10",
  },
]

type HeroSectionProps = {
  identity: Identity,
  hero: Hero,
}

export function HeroSection({ identity, hero }: HeroSectionProps) {
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
    const tf = phase === "out"
      ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
      : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)")

    techIconsRef.current.querySelectorAll<HTMLElement>(".t-avatar").forEach((el, i) => {
      el.style.transitionTimingFunction = tf
      if (activeIdx == null) {
        el.style.setProperty("--shift", "0px")
        el.style.setProperty("--scale-active", "1")
        return
      }
      const d = Math.abs(i - activeIdx)
      el.style.setProperty(
        "--shift",
        (lift * Math.pow(falloff, d)).toFixed(3) + "px"
      )
      el.style.setProperty(
        "--scale-active",
        i === activeIdx ? String(scale) : "1"
      )
    })
  }

  return (
    <section className="pb-16 pt-2 sm:pb-20">
      <div className="mb-10 flex items-center justify-between gap-6">
        <Avatar identity={identity} />
        <ul
          ref={techIconsRef}
          className="t-avatar-group flex list-none items-center gap-2 sm:gap-3"
          aria-hidden="true"
          onMouseLeave={() => setTechIconShifts(null, "out")}
        >
          {techStack.map(({ Icon, iconClassName, itemClassName = "" }, i) => (
            <li
              key={i}
              className={`t-avatar flex size-7 cursor-pointer items-center justify-center ${itemClassName}`}
              onMouseEnter={() => setTechIconShifts(i, "in")}
            >
              <Icon
                className={`${iconClassName} opacity-70 transition-opacity duration-200 hover:opacity-100`}
              />
            </li>
          ))}
        </ul>
      </div>

      <div ref={blockRef} className="t-stagger max-w-3xl">
        <h1 className="t-stagger-line t-stagger-line--1 text-balance text-4xl font-normal leading-tight tracking-[-0.045em] text-white sm:text-5xl">
          {hero.greeting}
          <br />
          <strong className="font-semibold">{hero.headline}</strong>
        </h1>

        <p className="t-stagger-line t-stagger-line--2 mt-10 max-w-2xl text-xl leading-9 tracking-[-0.025em] text-neutral-300 sm:text-2xl sm:leading-10">
          {hero.description}
        </p>
      </div>
    </section>
  )
}
