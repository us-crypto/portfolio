import { useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const withinRange =
      e.clientX > rect.left - padding &&
      e.clientX < rect.right + padding &&
      e.clientY > rect.top - padding &&
      e.clientY < rect.bottom + padding

    if (withinRange) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setIsActive(true)
      setOffset({
        x: (e.clientX - centerX) / strength,
        y: (e.clientY - centerY) / strength,
      })
    } else {
      setIsActive(false)
      setOffset({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
