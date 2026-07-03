type SectionHeaderProps = {
  title: string,
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header className="mb-8 flex items-baseline gap-3">
      <span aria-hidden="true" className="font-mono text-sm text-accent">{"//"}</span>
      <h2 className="font-mono text-sm font-medium tracking-wide text-ink">{title}</h2>
      <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
    </header>
  )
}
