import Container from './Container'

const pillars = [
  {
    title: 'PROCUREMENT SOFTWARE',
    description:
      'Brilliant Build coordinates equipment procurement across electrical, mechanical, and auxiliary systems for data center development programs.',
  },
  {
    title: 'MARKET VISIBILITY',
    description:
      'Insight into equipment availability, lead times, and vendor capacity across the data center supply chain.',
  },
  {
    title: 'INDUSTRY COVERAGE',
    description:
      'Brilliant Media covers the projects, people, and market dynamics shaping digital infrastructure.',
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
