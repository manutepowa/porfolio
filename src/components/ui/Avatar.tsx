import type { Identity } from "../../types/portfolio"

type AvatarProps = {
  identity: Identity
}

export function Avatar({ identity }: AvatarProps) {
  if (identity.avatar) {
    return (
      <img
        alt={`Avatar de ${identity.name}`}
        className="size-20 rounded-full border border-ink/10 object-cover grayscale shadow-2xl shadow-black/40"
        src={identity.avatar}
      />
    )
  }

  return (
    <div
      aria-label={`Avatar de ${identity.name}`}
      className="grid size-20 place-items-center rounded-full border border-ink/10 bg-[radial-gradient(circle_at_30%_25%,#ffffff_0_8%,transparent_9%),radial-gradient(circle_at_65%_40%,#ffffff_0_10%,transparent_11%),linear-gradient(135deg,#f5f5f5,#737373_45%,#111)] font-mono text-xl font-black text-black shadow-2xl shadow-black/40"
      role="img"
    >
      {identity.logo}
    </div>
  )
}
