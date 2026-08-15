import { useEffect, useRef, useState } from 'react'
import PlaceholderImage from '../components/PlaceholderImage'

const ROW_1_COUNT = 11
const ROW_2_COUNT = 10

function tripled(count: number) {
  const base = Array.from({ length: count }, (_, i) => i + 1)
  return [...base, ...base, ...base]
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = tripled(ROW_1_COUNT)
  const row2 = tripled(ROW_2_COUNT)

  return (
    <section ref={sectionRef} className="bg-[#0c0c0c] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}>
        {row1.map((n, i) => (
          <PlaceholderImage key={i} label={`Project ${n}`} className="shrink-0 w-[420px] h-[270px] rounded-2xl" />
        ))}
      </div>
      <div className="flex gap-3 mt-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}>
        {row2.map((n, i) => (
          <PlaceholderImage key={i} label={`Project ${n}`} className="shrink-0 w-[420px] h-[270px] rounded-2xl" />
        ))}
      </div>
    </section>
  )
}
