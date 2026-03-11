import Container from './Container'

export default function Founder() {
  return (
    <section className="py-40 bg-gradient-to-b from-black via-charcoal/30 to-black relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs text-accent/70 font-semibold tracking-widest mb-8 uppercase">
            Leadership
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tight leading-tight">
            Founded by an industry veteran.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-off-white/70 leading-relaxed font-light">
            <p>
              Andre Smith spent more than 17 years in the electrical infrastructure
              industry, working across GE and ABB on commercial strategy and large-scale
              equipment programs for critical infrastructure projects — including
              data centers.
            </p>
            <p>
              He holds a degree in Industrial Engineering from the University of Florida
              and completed graduate studies in finance at Harvard.
            </p>
          </div>
          <p className="mt-12 text-sm text-off-white/40 tracking-wide font-light">
            Atlanta, GA · Delaware C-Corp · Est. 2025
          </p>
        </div>
      </Container>
    </section>
  )
}
