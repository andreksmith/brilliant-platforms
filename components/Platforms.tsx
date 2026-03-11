import Container from './Container'
import Reveal from './Reveal'
import RevealGroup from './RevealGroup'

const platforms = [
  {
    title: 'Brilliant Build',
    description:
      'A procurement coordination platform for data center infrastructure equipment. Brilliant Build provides structured workflows for the teams managing scope, vendor coordination, and delivery across large-scale construction programs.',
    badge: null,
  },
  {
    title: 'Brilliant Media',
    description:
      'Brilliant Media covers the data center infrastructure ecosystem through interviews, analysis, and industry programming.',
    badge: 'Coming Soon',
  },
]

export default function Platforms() {
  return (
    <section className="py-32 bg-gradient-to-b from-charcoal/50 to-black">
      <div className="grid-line" />

      <Container>
        <Reveal className="mb-14 pt-8">
          <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            What we provide.
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="reveal-item card-system p-8 lg:p-10"
            >
              <div className="accent-line mb-6" />
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-medium tracking-tight">
                  {platform.title}
                </h3>
                {platform.badge && (
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent/60 border border-accent/20 rounded px-2 py-0.5">
                    {platform.badge}
                  </span>
                )}
              </div>
              <p className="text-off-white/50 font-light leading-relaxed">
                {platform.description}
              </p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
