import Container from './Container'

const domains = [
  {
    title: 'Industrial Procurement',
    description:
      "Multi-party marketplaces where visibility and accountability aren't optional. Connecting stakeholders who need precision at scale.",
  },
  {
    title: 'Crisis Coordination',
    description:
      "Systems that work when connectivity fails. Platforms built for the moments when every second counts and offline isn't an excuse.",
  },
  {
    title: 'Supply Intelligence',
    description:
      'Real-time visibility into lead times, availability, and performance. Turning fragmented supplier data into operational clarity.',
  },
]

export default function Platforms() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-charcoal">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Different industries. Different constraints. Same principles.
            </h2>
            <p className="text-xl text-off-white/60 font-light max-w-3xl mx-auto">
              From critical infrastructure to emergency response — we build platforms
              where failure isn't an option.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {domains.map((domain) => (
              <div
                key={domain.title}
                className="group border border-off-white/10 rounded-lg p-8 hover:border-accent/30 transition-smooth bg-black/60"
              >
                <h3 className="text-2xl font-light mb-4 tracking-tight group-hover:text-accent transition-smooth">
                  {domain.title}
                </h3>
                <p className="text-off-white/70 font-light leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
