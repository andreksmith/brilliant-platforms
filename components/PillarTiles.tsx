import Container from './Container'

const pillars = [
  {
    title: 'VISIBILITY',
    description:
      "Information symmetry for industries that can't afford blind spots.",
  },
  {
    title: 'PRECISION',
    description:
      'From design to deployment — software that removes friction.',
  },
  {
    title: 'CONTINUITY',
    description: 'Resilience engineered into every process.',
  },
]

export default function PillarTiles() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-charcoal">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-8 lg:p-10 border border-off-white/10 rounded-lg hover:border-accent/50 transition-smooth bg-black/40"
            >
              <h3 className="text-sm font-bold tracking-widest mb-6 text-accent">
                {pillar.title}
              </h3>
              <p className="text-lg text-off-white/70 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
