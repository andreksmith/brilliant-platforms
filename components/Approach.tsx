'use client'

import Container from './Container'

const principles = [
  {
    number: '01',
    title: 'First Principles',
    description:
      'We rebuild from the ground up. No legacy assumptions, no inherited constraints—just the question: what should this be?',
  },
  {
    number: '02',
    title: 'Scale by Design',
    description:
      'Systems that work at ten units break at ten thousand. We architect for the scale you\'ll need, not the scale you have.',
  },
  {
    number: '03',
    title: 'Operational Truth',
    description:
      'Real-time visibility into every layer. If you can\'t measure it with precision, you can\'t trust it under pressure.',
  },
]

export default function Approach() {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      <Container>
        <div className="relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              How we work
            </h2>
            <p className="text-xl text-off-white/60 font-light leading-relaxed">
              Our methodology isn't about frameworks or buzzwords. It's about
              building systems that perform when it matters most.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-light text-accent/30 group-hover:text-accent/50 transition-smooth">
                    {principle.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-off-white/70 font-light leading-relaxed max-w-2xl">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
