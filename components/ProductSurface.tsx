'use client'

import Container from './Container'
import Reveal from './Reveal'

const categories = [
  { name: 'Switchgear', vendors: 12, lead: '24–36 wk', status: 'active' },
  { name: 'UPS Systems', vendors: 8, lead: '28–40 wk', status: 'active' },
  { name: 'Generators', vendors: 6, lead: '32–52 wk', status: 'active' },
  { name: 'Cooling', vendors: 14, lead: '20–48 wk', status: 'active' },
  { name: 'PDUs & Busway', vendors: 10, lead: '16–24 wk', status: 'active' },
  { name: 'Transformers', vendors: 7, lead: '36–60 wk', status: 'pending' },
  { name: 'Fire Suppression', vendors: 5, lead: '12–20 wk', status: 'active' },
  { name: 'Cable & Raceway', vendors: 9, lead: '8–16 wk', status: 'active' },
  { name: 'Controls & BMS', vendors: 6, lead: '16–28 wk', status: 'active' },
]

const leadTimeBars = [
  { name: 'Switchgear', weeks: 36, max: 60 },
  { name: 'UPS', weeks: 40, max: 60 },
  { name: 'Generators', weeks: 52, max: 60 },
  { name: 'Cooling', weeks: 48, max: 60 },
  { name: 'Transformers', weeks: 60, max: 60 },
]

const activity = [
  { id: 'RFP-2847', desc: 'Switchgear package', detail: '4 bids received', time: '2m ago', status: 'bidding' },
  { id: 'RFP-2839', desc: 'Cooling systems', detail: 'Vendor review in progress', time: '18m ago', status: 'review' },
  { id: 'RFP-2831', desc: 'Generator sets', detail: 'Awarded', time: '1h ago', status: 'awarded' },
  { id: 'PO-1204', desc: 'UPS delivery', detail: 'Shipment confirmed — week 24', time: '3h ago', status: 'shipped' },
  { id: 'RFP-2825', desc: 'PDU package', detail: '6 bids received', time: '5h ago', status: 'bidding' },
  { id: 'PO-1198', desc: 'Transformer delivery', detail: 'In transit — week 18', time: '8h ago', status: 'shipped' },
]

const sidebarItems = [
  { abbr: 'Ov', active: false },
  { abbr: 'Ca', active: true },
  { abbr: 'Ac', active: false },
  { abbr: 'Ve', active: false },
]

function statusDotColor(status: string) {
  if (status === 'awarded' || status === 'shipped') return 'bg-success/50'
  return 'bg-accent/40'
}

export default function ProductSurface() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Ambient glow behind the window */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <Reveal className="mb-12">
          <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
            The System
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Purpose-built for procurement coordination.
          </h2>
        </Reveal>

        <Reveal>
          <div className="app-window max-w-6xl mx-auto relative z-10">
            {/* Window chrome */}
            <div className="app-window-bar">
              <div className="app-window-dot bg-[#ff5f57]" />
              <div className="app-window-dot bg-[#febc2e]" />
              <div className="app-window-dot bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-off-white/30 tracking-wider">
                BRILLIANT BUILD
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <span className="font-mono text-[10px] text-accent/40">PREVIEW</span>
              </div>
            </div>

            {/* Summary strip */}
            <div className="px-4 py-2.5 border-b border-off-white/[0.03] flex items-center gap-1">
              <span className="font-mono text-[9px] text-off-white/20 tracking-[0.1em] uppercase mr-2">Illustrative</span>
              <span className="font-mono text-[11px] text-accent/50">57</span>
              <span className="font-mono text-[11px] text-off-white/25">vendors</span>
              <span className="font-mono text-[11px] text-off-white/15 mx-1.5">&middot;</span>
              <span className="font-mono text-[11px] text-accent/50">23</span>
              <span className="font-mono text-[11px] text-off-white/25">packages</span>
              <span className="font-mono text-[11px] text-off-white/15 mx-1.5">&middot;</span>
              <span className="font-mono text-[11px] text-accent/50">4</span>
              <span className="font-mono text-[11px] text-off-white/25">awarded</span>
            </div>

            {/* Main layout: sidebar + content + lead times */}
            <div className="flex">
              {/* Sidebar — desktop only */}
              <div className="hidden lg:flex flex-col items-center gap-5 py-6 px-3 bg-[rgba(16,17,20,0.6)] border-r border-off-white/[0.04]">
                {sidebarItems.map((item) => (
                  <div
                    key={item.abbr}
                    className={`flex flex-col items-center gap-1.5 ${
                      item.active ? 'border-l-2 border-accent/50 -ml-[2px] pl-[2px]' : ''
                    }`}
                  >
                    <div
                      className={`w-[6px] h-[6px] rounded-[1px] ${
                        item.active ? 'bg-accent/50' : 'bg-off-white/10'
                      }`}
                    />
                    <span
                      className={`font-mono text-[8px] tracking-wide ${
                        item.active ? 'text-accent/60' : 'text-off-white/20'
                      }`}
                    >
                      {item.abbr}
                    </span>
                  </div>
                ))}
              </div>

              {/* Content area */}
              <div className="flex-1 min-w-0">
                <div className="flex">
                  {/* Main content — categories */}
                  <div className="flex-1 min-w-0 p-6 md:p-8">
                    {/* Equipment categories grid */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-mono text-[10px] text-off-white/30 tracking-[0.15em] uppercase">
                        Equipment Categories
                      </p>
                      <p className="font-mono text-[10px] text-off-white/20">
                        9 of 9 active
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {categories.map((cat) => (
                        <div key={cat.name} className="category-tile">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-mono text-[11px] text-off-white/60 tracking-wide">
                              {cat.name}
                            </p>
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                cat.status === 'active' ? 'bg-success/60' : 'bg-off-white/20'
                              }`}
                            />
                          </div>
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[10px] text-off-white/30">
                              {cat.vendors} vendors
                            </span>
                            <span className="font-mono text-[10px] text-accent/40">
                              {cat.lead}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lead time panel — desktop only */}
                  <div className="hidden lg:block w-[180px] border-l border-off-white/[0.04] p-5">
                    <p className="font-mono text-[10px] text-off-white/25 tracking-[0.15em] uppercase mb-5">
                      Lead Times
                    </p>
                    <div className="space-y-4">
                      {leadTimeBars.map((bar) => (
                        <div key={bar.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-mono text-[9px] text-off-white/20">
                              {bar.name}
                            </span>
                            <span className="font-mono text-[9px] text-off-white/15">
                              {bar.weeks} wk
                            </span>
                          </div>
                          <div className="h-1 rounded-full bg-off-white/[0.04]">
                            <div
                              className="h-full rounded-full bg-accent/30"
                              style={{ width: `${(bar.weeks / bar.max) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 md:mx-8 grid-line mb-0" />

                {/* Activity feed */}
                <div className="p-6 md:p-8 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-[10px] text-off-white/30 tracking-[0.15em] uppercase">
                      Recent Activity
                    </p>
                  </div>

                  <div className="space-y-0">
                    {activity.map((item, i) => (
                      <div
                        key={item.id}
                        className={`flex items-center gap-4 py-2.5 ${
                          i < activity.length - 1 ? 'border-b border-off-white/[0.03]' : ''
                        } ${i >= 4 ? 'hidden sm:flex' : ''}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDotColor(item.status)}`} />
                        <span className="font-mono text-[10px] text-accent/50 w-[72px] shrink-0">
                          {item.id}
                        </span>
                        <span className="text-[13px] text-off-white/50 font-light">
                          {item.desc}
                        </span>
                        <span className="text-[12px] text-off-white/25 font-light hidden sm:inline">
                          — {item.detail}
                        </span>
                        <span className="font-mono text-[10px] text-off-white/15 ml-auto shrink-0">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
