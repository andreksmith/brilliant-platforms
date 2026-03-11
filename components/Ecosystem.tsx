import Container from './Container'
import RevealGroup from './RevealGroup'
import Reveal from './Reveal'

const leftItems = [
  'Project scope definition',
  'Equipment specifications',
  'Delivery coordination',
  'Multi-year program timelines',
]

const rightItems = [
  'Product availability',
  'Lead time data',
  'Capacity and pricing',
  'Delivery execution',
]

function NodeDot() {
  return (
    <div className="relative w-2.5 h-2.5 shrink-0">
      <div className="absolute inset-0 rounded-full bg-accent/40 status-live" />
      <div className="absolute inset-0 rounded-full bg-accent/60" />
    </div>
  )
}

export default function Ecosystem() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-charcoal/50">
      <Container>
        <Reveal className="mb-16">
          <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
            Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Where Brilliant sits in the stack.
          </h2>
        </Reveal>

        {/* Desktop diagram */}
        <div className="hidden lg:block">
          <RevealGroup className="max-w-5xl mx-auto">
            {/* Three-panel layout with connectors */}
            <div className="reveal-item grid grid-cols-[1fr_100px_minmax(200px,240px)_100px_1fr] items-stretch">
              {/* Left panel — Developers */}
              <div className="card-system p-8">
                <p className="font-mono text-[11px] text-off-white/40 tracking-[0.15em] uppercase mb-6">
                  Data Center Developers
                </p>
                <ul className="space-y-3">
                  {leftItems.map((item) => (
                    <li key={item} className="text-sm text-off-white/50 font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-off-white/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Left connector */}
              <div className="flex flex-col items-center justify-center gap-1 relative">
                <div className="w-full connector-flow" />
                <div className="my-2"><NodeDot /></div>
                <div className="w-full connector-flow-reverse" />
              </div>

              {/* Center panel — Brilliant */}
              <div className="border border-accent/20 rounded-xl px-6 py-8 bg-accent/[0.03] shadow-[0_0_60px_-12px_rgba(59,130,246,0.12)] flex flex-col items-center justify-center text-center">
                <div className="w-2 h-2 rounded-full bg-accent/50 mb-4 animate-blink-slow" />
                <p className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-2">
                  Brilliant Platforms
                </p>
                <div className="accent-line mx-auto mb-3" />
                <p className="text-xs text-off-white/40 font-light leading-relaxed">
                  Procurement<br />coordination layer
                </p>
              </div>

              {/* Right connector */}
              <div className="flex flex-col items-center justify-center gap-1 relative">
                <div className="w-full connector-flow-reverse" />
                <div className="my-2"><NodeDot /></div>
                <div className="w-full connector-flow" />
              </div>

              {/* Right panel — Vendors */}
              <div className="card-system p-8">
                <p className="font-mono text-[11px] text-off-white/40 tracking-[0.15em] uppercase mb-6">
                  Equipment Vendors
                </p>
                <ul className="space-y-3">
                  {rightItems.map((item) => (
                    <li key={item} className="text-sm text-off-white/50 font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-off-white/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Flow labels below diagram */}
            <div className="reveal-item grid grid-cols-[1fr_100px_minmax(200px,240px)_100px_1fr] mt-4">
              <div />
              <p className="font-mono text-[9px] text-off-white/20 tracking-wider text-center leading-tight">
                Scope &<br />requirements
              </p>
              <div />
              <p className="font-mono text-[9px] text-off-white/20 tracking-wider text-center leading-tight">
                Bids &<br />availability
              </p>
              <div />
            </div>
          </RevealGroup>
        </div>

        {/* Mobile diagram — stacked */}
        <div className="lg:hidden">
          <RevealGroup className="max-w-sm mx-auto space-y-0">
            <div className="reveal-item card-system p-6">
              <p className="font-mono text-[11px] text-off-white/40 tracking-[0.15em] uppercase mb-4">
                Data Center Developers
              </p>
              <ul className="space-y-2">
                {leftItems.map((item) => (
                  <li key={item} className="text-sm text-off-white/50 font-light flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-off-white/20 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal-item flex flex-col items-center py-1">
              <div className="h-8 connector-flow-down" />
              <NodeDot />
              <div className="h-8 connector-flow-down" />
            </div>

            <div className="reveal-item border border-accent/20 rounded-xl px-6 py-6 bg-accent/[0.03] shadow-[0_0_48px_-12px_rgba(59,130,246,0.1)] text-center">
              <div className="w-2 h-2 rounded-full bg-accent/50 mb-3 mx-auto animate-blink-slow" />
              <p className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-1">
                Brilliant Platforms
              </p>
              <p className="text-xs text-off-white/40 font-light">
                Procurement coordination layer
              </p>
            </div>

            <div className="reveal-item flex flex-col items-center py-1">
              <div className="h-8 connector-flow-down" />
              <NodeDot />
              <div className="h-8 connector-flow-down" />
            </div>

            <div className="reveal-item card-system p-6">
              <p className="font-mono text-[11px] text-off-white/40 tracking-[0.15em] uppercase mb-4">
                Equipment Vendors
              </p>
              <ul className="space-y-2">
                {rightItems.map((item) => (
                  <li key={item} className="text-sm text-off-white/50 font-light flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-off-white/20 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
