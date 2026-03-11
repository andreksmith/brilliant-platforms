import Container from './Container'
import Reveal from './Reveal'
import RevealGroup from './RevealGroup'

const stats = [
  { value: '$500B+', label: 'in committed pipeline', context: 'Projected data center infrastructure investment through the next decade' },
  { value: '24–60 wk', label: 'average lead times', context: 'For critical-path power and cooling equipment' },
  { value: '9', label: 'equipment categories', context: 'Electrical, mechanical, power generation, cooling, and auxiliary' },
  { value: '50+ MW', label: 'per campus', context: 'Individual hyperscale sites requiring multi-year procurement' },
]

const equipmentCategories = [
  'Switchgear', 'UPS Systems', 'Generators', 'Cooling Systems',
  'PDUs & Busway', 'Transformers', 'Fire Suppression', 'Cable & Raceway', 'Controls & BMS',
]

export default function Stats() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-charcoal/30">
      <Container>
        <Reveal className="mb-14">
          <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
            The Coordination Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Procurement at data center scale.
          </h2>
          <p className="text-off-white/40 font-light max-w-3xl leading-relaxed">
            Large-scale data center programs require coordination across hundreds of vendors,
            multi-year timelines, and critical-path equipment categories.
          </p>
        </Reveal>

        <div className="grid-line mb-12" />

        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal-item text-center lg:text-left px-0 lg:px-8 ${
                index < stats.length - 1 ? 'lg:border-r lg:border-off-white/5' : ''
              } ${index === 0 ? 'lg:pl-0' : ''}`}
            >
              <div className="font-mono text-3xl md:text-4xl font-light text-accent mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-off-white/70 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-off-white/35 font-light leading-relaxed">
                {stat.context}
              </div>
            </div>
          ))}
        </RevealGroup>

        {/* Equipment categories density strip */}
        <Reveal>
          <div className="grid-line mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <p className="font-mono text-[10px] text-off-white/25 tracking-[0.15em] uppercase">
              Coverage
            </p>
            <div className="accent-line" />
          </div>
          <div className="flex flex-wrap gap-2">
            {equipmentCategories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[11px] text-off-white/30 tracking-wide px-3 py-1.5 rounded border border-off-white/[0.04] bg-charcoal/30"
              >
                {cat}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
