import type { CSSProperties } from 'react'

interface PlaceholderImageProps {
  label?: string
  className?: string
  style?: CSSProperties
}

export default function PlaceholderImage({ label, className = '', style }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-[#2a2a2e] to-[#0c0c0c] border border-white/10 ${className}`}
      style={style}
    >
      {label && (
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 text-center px-2">
          {label}
        </span>
      )}
    </div>
  )
}
