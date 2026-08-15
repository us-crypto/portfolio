import type { CSSProperties } from 'react'

interface ProjectThumbnailProps {
  seed: number
  className?: string
  style?: CSSProperties
}

const GRADIENTS = ['from-[#3a1c5c] to-[#0c0c0c]', 'from-[#1c3a5c] to-[#0c0c0c]', 'from-[#5c1c3a] to-[#0c0c0c]']

export default function ProjectThumbnail({ seed, className = '', style }: ProjectThumbnailProps) {
  const gradient = GRADIENTS[seed % GRADIENTS.length]
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} border border-white/10 ${className}`} style={style}>
      <div className="absolute -right-4 -bottom-6 text-white/10 font-black text-[100px] leading-none select-none">
        {String(seed + 1).padStart(2, '0')}
      </div>
    </div>
  )
}
