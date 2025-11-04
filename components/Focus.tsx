import Container from './Container'

const focusAreas = [
  {
    title: 'Multi-Party Coordination',
    areas: [
      'Platforms where trust is verified, not assumed',
      'Role-based workflows for complex stakeholder networks',
      'Accountability at every handoff',
      'Real-time visibility across organizational boundaries',
    ],
  },
  {
    title: 'Offline-First Operations',
    areas: [
      "Field work that doesn't stop when connectivity fails",
      'Background sync and intelligent retry',
      "Mobile-first for environments where desktop doesn't exist",
      'Proof of delivery, even in remote areas',
    ],
  },
  {
    title: 'Intelligence & Forecasting',
    areas: [
      'Turn supplier chaos into predictable timelines',
      'Aggregate fragmented data into actionable insights',
      'Performance tracking that surfaces truth',
      'Simulation tools for planning under uncertainty',
    ],
  },
]

export default function Focus() {
  return (
    <section className="py-32 bg-black">
      <Container>
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Where we focus
          </h2>
          <p className="text-xl text-off-white/60 font-light leading-relaxed">
            We work across industries where downtime isn't an option and precision
            is non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {focusAreas.map((area) => (
            <div key={area.title} className="space-y-6">
              <h3 className="text-xl font-semibold tracking-tight text-accent">
                {area.title}
              </h3>
              <ul className="space-y-3">
                {area.areas.map((item) => (
                  <li
                    key={item}
                    className="text-off-white/70 font-light flex items-start"
                  >
                    <span className="text-accent mr-3 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
