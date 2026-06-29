type SectionHeaderProps = {
  title: string
  meta?: string
}

export function SectionHeader({ title, meta }: SectionHeaderProps) {
  return (
    <header className="mb-4 flex items-baseline justify-between gap-6">
      <h2 className="text-base font-semibold tracking-tight text-neutral-200">{title}</h2>
      {meta ? <p className="font-mono text-xs tracking-[0.2em] text-neutral-500">{meta}</p> : null}
    </header>
  )
}
