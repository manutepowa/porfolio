type ExternalLinkIconProps = {
  className?: string
}

export function ExternalLinkIcon({ className = "size-4" }: ExternalLinkIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
