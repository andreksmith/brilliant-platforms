import Container from './Container'

export default function Philosophy() {
  return (
    <section className="py-40 bg-gradient-to-b from-black via-charcoal/30 to-black relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs text-accent/70 font-semibold tracking-widest mb-8 uppercase">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tight leading-tight">
            The infrastructure that runs the world shouldn't be guesswork.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-off-white/70 leading-relaxed font-light">
            <p>
              Critical systems demand precision. Not approximations. Not "good enough."
              Real-time visibility, predictive intelligence, and automated resilience.
            </p>
            <p>
              We're building software that turns complexity into clarity—so teams can
              make decisions with confidence, not hope.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
