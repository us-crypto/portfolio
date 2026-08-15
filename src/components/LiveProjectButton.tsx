interface LiveProjectButtonProps {
  href?: string
  className?: string
}

export default function LiveProjectButton({ href, className = '' }: LiveProjectButtonProps) {
  const classes = `rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        Live Project
      </a>
    )
  }

  return (
    <button type="button" className={`${classes} opacity-40 cursor-not-allowed`} disabled>
      Live Project
    </button>
  )
}
