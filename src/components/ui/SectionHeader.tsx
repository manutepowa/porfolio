type SectionHeaderProps = {
  title: string,
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header className="mb-4 flex items-baseline gap-6">
      <h2 className="text-base font-semibold tracking-tight text-neutral-200">
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-orange-500/25" />
    </header>
  )
}
