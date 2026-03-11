'use client'

import Container from './Container'
import Reveal from './Reveal'

const projects = ['Atlanta DC-03', 'Phoenix AZ-2', 'Columbus OH-4', 'Dallas TX-1']

const categoryNodes = [
  { abbr: 'SWG', name: 'Switchgear', vendors: 12 },
  { abbr: 'UPS', name: 'UPS Systems', vendors: 8 },
  { abbr: 'GEN', name: 'Generators', vendors: 6 },
  { abbr: 'CLG', name: 'Cooling', vendors: 14 },
  { abbr: 'PDU', name: 'PDUs', vendors: 10 },
  { abbr: 'XFR', name: 'Transformers', vendors: 7 },
  { abbr: 'FIR', name: 'Fire Supp.', vendors: 5 },
  { abbr: 'CBL', name: 'Cable', vendors: 9 },
  { abbr: 'BMS', name: 'Controls', vendors: 6 },
]

const networkStats = [
  { value: '57+', label: 'qualified vendors' },
  { value: '9', label: 'equipment categories' },
  { value: '213+', label: 'product types' },
]

const telemetry = [
  { value: '57', label: 'vendors coordinated' },
  { value: '23', label: 'active packages' },
  { value: '4', label: 'programs in review' },
]

/* Animated flow indices — Switchgear (0) and Cooling (3) */
const animatedIndices = new Set([0, 3])

/* Cross-connection pairs: Switchgear↔Transformers, Cooling↔Controls */
const crossConnections: [number, number][] = [[0, 5], [3, 8]]

export default function NetworkScale() {
  /*
   * Layout geometry (desktop) — tightened ~12%
   * - SVG viewBox width: 800, height: 380
   * - Projects row:  y = 26
   * - Brilliant bar: y = 110 top, y = 168 bottom (58px, accommodates label + metrics)
   * - Categories:    y = 278
   */
  const svgW = 800
  const svgH = 380

  const padX = 60
  const usableW = svgW - padX * 2

  // Project positions (4 nodes, evenly spaced)
  const projY = 26
  const projSpacing = usableW / (projects.length - 1)
  const projXs = projects.map((_, i) => padX + i * projSpacing)

  // Brilliant bar
  const barTop = 110
  const barBottom = 168
  const barLeft = padX - 20
  const barRight = svgW - padX + 20

  // Category positions (9 nodes, evenly spaced)
  const catY = 278
  const catSpacing = usableW / (categoryNodes.length - 1)
  const catXs = categoryNodes.map((_, i) => padX + i * catSpacing)

  return (
    <section className="py-32 bg-gradient-to-b from-black to-charcoal/30">
      <Container>
        <Reveal className="mb-16">
          <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
            Network Scale
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-5">
            The coordination topology.
          </h2>
          <p className="text-off-white/40 font-light max-w-3xl leading-relaxed">
            Every data center program generates hundreds of procurement coordination
            points across equipment categories and qualified vendors. Brilliant operates
            as the orchestration layer managing this network.
          </p>
        </Reveal>

        {/* Desktop visualization */}
        <Reveal>
          <div className="hidden lg:block max-w-4xl mx-auto mb-16">
            <div className="relative" style={{ height: svgH }}>
              {/* SVG connection lines */}
              <svg
                viewBox={`0 0 ${svgW} ${svgH}`}
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Project → Brilliant bar lines */}
                {projXs.map((x, i) => (
                  <line
                    key={`proj-${i}`}
                    x1={x}
                    y1={projY + 18}
                    x2={x}
                    y2={barTop}
                    stroke="rgba(250,250,250,0.06)"
                    strokeWidth="1"
                  />
                ))}

                {/* Brilliant bar → Category lines */}
                {catXs.map((x, i) => (
                  <line
                    key={`cat-${i}`}
                    x1={x}
                    y1={barBottom}
                    x2={x}
                    y2={catY - 14}
                    stroke="rgba(59,130,246,0.08)"
                    strokeWidth="1"
                  />
                ))}

                {/* Animated flow lines (Switchgear + Cooling) */}
                {catXs.map((x, i) =>
                  animatedIndices.has(i) ? (
                    <line
                      key={`flow-${i}`}
                      x1={x}
                      y1={barBottom}
                      x2={x}
                      y2={catY - 14}
                      stroke="rgba(59,130,246,0.15)"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      style={{ animation: 'dash-flow 3s linear infinite' }}
                    />
                  ) : null
                )}

                {/* Cross-connections */}
                {crossConnections.map(([a, b], i) => (
                  <line
                    key={`cross-${i}`}
                    x1={catXs[a]}
                    y1={catY}
                    x2={catXs[b]}
                    y2={catY}
                    stroke="rgba(250,250,250,0.03)"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>

              {/* Project nodes (HTML overlay) */}
              {projects.map((name, i) => (
                <div
                  key={name}
                  className="absolute flex items-center justify-center card-system !rounded-md !bg-[rgba(22,23,26,0.5)]"
                  style={{
                    left: `${(projXs[i] / svgW) * 100}%`,
                    top: `${(projY / svgH) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    width: 100,
                    height: 36,
                  }}
                >
                  <span className="font-mono text-[9px] text-off-white/30 tracking-wide">
                    {name}
                  </span>
                </div>
              ))}

              {/* Brilliant orchestration bar */}
              <div
                className="absolute network-bar flex flex-col items-center justify-center gap-2"
                style={{
                  left: `${(barLeft / svgW) * 100}%`,
                  top: `${(barTop / svgH) * 100}%`,
                  width: `${((barRight - barLeft) / svgW) * 100}%`,
                  height: barBottom - barTop,
                }}
              >
                <span className="font-mono text-[10px] text-accent/60 tracking-[0.2em] uppercase">
                  Brilliant Platforms
                </span>
                {/* Operational telemetry */}
                <div className="flex items-center gap-4">
                  {telemetry.map((t, i) => (
                    <span key={t.label} className="flex items-center gap-1.5">
                      {i > 0 && (
                        <span className="text-off-white/[0.06] mr-2.5">|</span>
                      )}
                      <span className="font-mono text-[9px] text-off-white/25">
                        {t.value}
                      </span>
                      <span className="font-mono text-[8px] text-off-white/[0.12]">
                        {t.label}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Category nodes */}
              {categoryNodes.map((cat, i) => (
                <div
                  key={cat.abbr}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${(catXs[i] / svgW) * 100}%`,
                    top: `${(catY / svgH) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="network-category-node">
                    <span className="font-mono text-[7px] text-off-white/40 tracking-wide">
                      {cat.abbr}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-off-white/20 mt-1.5 whitespace-nowrap">
                    {cat.name}
                  </span>
                  <span className="font-mono text-[8px] text-off-white/[0.15]">
                    {cat.vendors} vendors
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile visualization — simplified */}
          <div className="lg:hidden max-w-sm mx-auto mb-12">
            {/* Brilliant bar */}
            <div className="network-bar flex flex-col items-center justify-center py-3 gap-1.5 mb-6">
              <span className="font-mono text-[10px] text-accent/60 tracking-[0.2em] uppercase">
                Brilliant Platforms
              </span>
              <div className="flex items-center gap-3">
                {telemetry.map((t, i) => (
                  <span key={t.label} className="flex items-center gap-1">
                    {i > 0 && (
                      <span className="text-off-white/[0.06] mr-1.5">|</span>
                    )}
                    <span className="font-mono text-[8px] text-off-white/25">
                      {t.value}
                    </span>
                    <span className="font-mono text-[7px] text-off-white/[0.12]">
                      {t.label}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Category nodes in a wrapped grid */}
            <div className="grid grid-cols-3 gap-4">
              {categoryNodes.map((cat) => (
                <div key={cat.abbr} className="flex flex-col items-center">
                  <div className="network-category-node">
                    <span className="font-mono text-[7px] text-off-white/40 tracking-wide">
                      {cat.abbr}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-off-white/20 mt-1.5 text-center">
                    {cat.name}
                  </span>
                  <span className="font-mono text-[8px] text-off-white/[0.15]">
                    {cat.vendors} vendors
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal>
          <div className="grid-line mb-10" />
          <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
            {networkStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl text-accent/70 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-off-white/35 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
