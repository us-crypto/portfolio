import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { content } from '../content'

function PlaceholderPortrait() {
  return (
    <div className="aspect-[3/4] w-full rounded-[40px] bg-gradient-to-b from-[#2a2a2e] to-[#0c0c0c] border border-white/10 flex items-center justify-center">
      <span className="text-white/20 text-xs uppercase tracking-widest px-4 text-center">
        Your portrait here
      </span>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {content.navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m {content.name.toLowerCase()}
        </h1>
      </FadeIn>

      <div className="flex-1" />

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {content.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <PlaceholderPortrait />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
