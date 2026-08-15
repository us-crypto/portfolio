interface IconProps {
  className?: string
}

export function CodeBracketsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M35 25 L15 50 L35 75" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M65 25 L85 50 L65 75" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="58" y1="20" x2="42" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="10" y="15" width="80" height="70" rx="8" stroke="white" strokeWidth="5" />
      <path d="M25 40 L40 50 L25 60" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="48" y1="60" x2="70" y2="60" stroke="white" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="50" cy="25" rx="30" ry="12" stroke="white" strokeWidth="5" />
      <ellipse cx="50" cy="50" rx="30" ry="12" stroke="white" strokeWidth="5" />
      <ellipse cx="50" cy="75" rx="30" ry="12" stroke="white" strokeWidth="5" />
    </svg>
  )
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 15 L85 32 L50 49 L15 32 Z" stroke="white" strokeWidth="5" strokeLinejoin="round" />
      <path d="M15 50 L50 67 L85 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 68 L50 85 L85 68" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
