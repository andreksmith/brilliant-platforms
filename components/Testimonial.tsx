import Container from './Container'

export default function Testimonial() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-off-white/90 mb-12 italic">
              "When crisis hits, you need systems that work offline, coordinate dozens of organizations in real-time, and actually get adopted by field teams. This is that system."
            </p>
            <footer className="text-sm text-off-white/50 tracking-wide">
              <span className="font-semibold text-off-white/70">
                Emergency Response Coordinator
              </span>
              <span className="mx-2">—</span>
              <span>National Disaster Management Agency</span>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  )
}
