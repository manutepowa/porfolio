import { useEffect, useRef } from "react"
import type { Identity, Hero } from "../../types/portfolio"
import { Avatar } from "../ui/Avatar"

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
        <p className="hidden font-mono text-xs uppercase tracking-[0.28em] text-neutral-600 sm:block">
          {hero.eyebrow}
        </p>
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
