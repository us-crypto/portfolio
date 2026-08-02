import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'
import PlaceholderImage from '../components/PlaceholderImage'
import { content } from '../content'

interface Project {
  number: string
  category: string
  name: string
}

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-24 md:top-32 h-[85vh]" style={{ transform: `translateY(${index * 28}px)` }}>
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-baseline gap-4">
            <span className="text-[#D7E2EA] font-black" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] text-lg sm:text-2xl md:text-3xl font-medium uppercase">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          <div className="flex flex-col gap-3" style={{ width: '40%' }}>
            <PlaceholderImage
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              label="image"
            />
            <PlaceholderImage
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              label="image"
            />
          </div>
          <PlaceholderImage
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
            style={{ width: '60%' }}
            label="image"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      {content.projects.map((project, i) => (
        <ProjectCard key={project.number} project={project} index={i} total={content.projects.length} progress={scrollYProgress} />
      ))}
    </section>
  )
}
