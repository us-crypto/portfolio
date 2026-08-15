import { Github, ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { content } from '../content'

export default function OtherWorkSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-20">
      <FadeIn>
        <h3 className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest mb-8">
          Also on GitHub -- practice &amp; coursework
        </h3>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl">
        {content.otherWork.map((repo, i) => (
          <FadeIn key={repo.name} delay={i * 0.05}>
            <a
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 border border-white/10 rounded-2xl p-4 hover:border-white/30 transition-colors h-full"
            >
              <div className="flex items-start gap-3">
                <Github size={18} className="text-[#D7E2EA]/60 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#D7E2EA] text-sm font-medium">{repo.name}</div>
                  <div className="text-[#D7E2EA]/50 text-xs mt-1">{repo.description}</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#D7E2EA]/40 shrink-0" />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
