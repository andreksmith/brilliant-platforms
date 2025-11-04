import Container from './Container'

const updates = [
  {
    date: 'Q1 2025',
    title: 'Crisis Coordination Systems',
    description:
      'Engineering government-grade disaster relief infrastructure. Multi-stakeholder coordination connecting emergency agencies with community organizations. Offline-first mobile operations targeting <60s case intake in remote areas.',
  },
  {
    date: 'Q4 2024',
    title: 'Supply Intelligence',
    description:
      'Building real-time product intelligence aggregating lead time data across vendors. Simulation tools for project timeline forecasting. Turning supplier fragmentation into operational clarity.',
  },
  {
    date: 'Q3 2024',
    title: 'Industrial Procurement',
    description:
      'Architecting full lifecycle procurement for critical infrastructure. NDA-gated workflows, performance-based vendor analytics, milestone payments. Privacy and accountability at enterprise scale.',
  },
  {
    date: 'Q2 2024',
    title: 'Offline-First Foundation',
    description:
      'Developing production-grade offline capabilities. Service Workers, background sync, and intelligent retry. Field operations continuing without connectivity. Photo, signature, and GPS verification at point of action.',
  },
]

export default function JournalTeaser() {
  return (
    <section className="py-32 bg-gradient-to-b from-charcoal to-black">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Recent milestones
            </h2>
            <p className="text-lg text-off-white/60 font-light">
              Shipping production systems, not press releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <div
                key={index}
                className="group border border-off-white/10 rounded-lg p-6 hover:border-accent/30 transition-smooth bg-black/40"
              >
                <p className="text-xs text-accent/70 font-semibold tracking-wider mb-3">
                  {update.date}
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-smooth">
                  {update.title}
                </h3>
                <p className="text-off-white/60 font-light leading-relaxed text-sm">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
