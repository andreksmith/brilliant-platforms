import Container from './Container'

const capabilities = [
  {
    category: 'Marketplace Platforms',
    items: [
      'Multi-sided platforms for regulated environments',
      'Privacy controls that actually work',
      'Workflows that enforce accountability',
      "Performance metrics that can't be gamed",
    ],
  },
  {
    category: 'Operational Intelligence',
    items: [
      'Real-time aggregation across data silos',
      'Predictive models for supply planning',
      'Timeline simulation under constraints',
      'Analytics that drive decisions, not dashboards',
    ],
  },
  {
    category: 'Crisis-Grade Systems',
    items: [
      'Coordination platforms for government and NGOs',
      'Offline functionality as default, not fallback',
      'Photo and location verification at point of action',
      'Multi-channel alerts (WhatsApp, SMS, push)',
    ],
  },
  {
    category: 'Platform Engineering',
    items: [
      'Progressive Web Apps for any device',
      'Background sync and retry for unreliable networks',
      'Geographic intelligence and mapping',
      'Role-based access at infrastructure level',
    ],
  },
]

export default function Capabilities() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-charcoal/50 to-black">
      <Container>
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            What we build
          </h2>
          <p className="text-xl text-off-white/60 font-light leading-relaxed">
            End-to-end platform capabilities that scale with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {capabilities.map((cap) => (
            <div
              key={cap.category}
              className="border-l-2 border-accent/30 pl-6 hover:border-accent/60 transition-smooth"
            >
              <h3 className="text-xl font-semibold mb-6 tracking-tight">
                {cap.category}
              </h3>
              <ul className="space-y-3">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-off-white/70 font-light flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3" />
                    {item}
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
