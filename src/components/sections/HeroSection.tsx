import { useEffect, useRef } from "react"
import type { Identity, Hero } from "../../types/portfolio"
import { Avatar } from "../ui/Avatar"
import { PayloadCMS } from "../icons/tech/PayloadCMS"
import { OpenCode } from "../icons/tech/OpenCode"
import { Nodejs } from "../icons/tech/Nodejs"
import { Nextjs } from "../icons/tech/Nextjs"
import { TypeScript } from "../icons/tech/TypeScript"
import { Neovim } from "../icons/tech/Neovim"

const techStack = [
  { Icon: PayloadCMS, iconClassName: "size-6" },
  {
    Icon: OpenCode,
    iconClassName: "size-6 rounded-sm",
    itemClassName: "rounded-md bg-white/[0.04] ring-1 ring-white/10",
  },
  { Icon: Nodejs, iconClassName: "h-6 w-auto" },
  {
    Icon: Nextjs,
    iconClassName: "size-6",
    itemClassName: "rounded-full bg-white/[0.04] ring-1 ring-white/10",
  },
  { Icon: TypeScript, iconClassName: "size-6 rounded-sm" },
  { Icon: Neovim, iconClassName: "h-6 w-auto" },
]

type HeroSectionProps = {
  identity: Identity,
  hero: Hero,
}

export function HeroSection({ identity, hero }: HeroSectionProps) {
  const blockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const block = blockRef.current
    if (!block) return
    block.classList.remove("is-shown")
    void block.offsetHeight
    block.classList.add("is-shown")
  }, [])

  return (
    <section className="pb-16 pt-2 sm:pb-20">
      <div className="mb-10 flex items-center justify-between gap-6">
        <Avatar identity={identity} />
        <ul className="hidden list-none items-center gap-3 sm:flex" aria-hidden="true">
          {techStack.map(({ Icon, iconClassName, itemClassName = "" }, i) => (
            <li
              key={i}
              className={`flex size-7 cursor-pointer items-center justify-center ${itemClassName}`}
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
