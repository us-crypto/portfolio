import FadeIn from '../components/FadeIn'
import { content } from '../content'

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {content.services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={
                i < content.services.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : undefined
              }
            >
              <span className="text-[#0C0C0C] font-black shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {service.number}
              </span>
              <div className="flex flex-col gap-2 justify-center">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
