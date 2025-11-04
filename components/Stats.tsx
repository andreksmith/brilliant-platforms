'use client'

import Container from './Container'

const stats = [
  {
    value: '100%',
    label: 'Offline Capable',
    description: 'Field operations without connectivity',
  },
  {
    value: 'Real-time',
    label: 'Intelligence',
    description: 'Supply data aggregation',
  },
  {
    value: 'Multi-party',
    label: 'Coordination',
    description: 'Government, enterprise, community',
  },
  {
    value: '<60s',
    label: 'Intake',
    description: 'From field to dispatch',
  },
]

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-black border-t border-off-white/5">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-accent mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-semibold tracking-wide mb-2 text-off-white">
                {stat.label}
              </div>
              <div className="text-xs text-off-white/50 font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
