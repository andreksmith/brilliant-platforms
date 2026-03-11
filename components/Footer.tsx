'use client'

import Link from 'next/link'
import Container from './Container'
import StarburstLogo from './StarburstLogo'

export default function Footer() {
  return (
    <footer className="relative border-t border-off-white/5 py-16 overflow-hidden">
      {/* Rotating starburst watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <div className="animate-rotate-slow">
          <StarburstLogo size={400} />
        </div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Brand column */}
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight">
                Brilliant Platforms
              </h3>
              <p className="text-sm text-off-white/60 font-light leading-relaxed mb-5">
                Technology for data center infrastructure procurement.
              </p>

              {/* Product family */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-off-white/45 tracking-wide">Build</span>
                <span className="text-off-white/15">·</span>
                <span className="font-mono text-[11px] text-off-white/25 tracking-wide">Media<span className="text-[9px] text-accent/40 ml-1.5">soon</span></span>
                <span className="text-off-white/15">·</span>
                <span className="font-mono text-[11px] text-off-white/45 tracking-wide">BRI</span>
                <span className="text-off-white/15">·</span>
                <span className="font-mono text-[11px] text-off-white/45 tracking-wide">Blend</span>
              </div>

              <p className="text-xs text-off-white/40 tracking-wider">
                Est. 2025
              </p>
            </div>

            {/* Links column */}
            <div className="flex gap-16">
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-off-white/50 mb-4 uppercase">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-off-white/70 hover:text-accent transition-smooth"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-widest text-off-white/50 mb-4 uppercase">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-off-white/70 hover:text-accent transition-smooth"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-off-white/70 hover:text-accent transition-smooth"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-off-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-off-white/40">
              © {new Date().getFullYear()} Brilliant Platforms. All rights reserved.
            </p>
            <p className="text-xs text-off-white/30 font-light">
              Technology for the systems that matter.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
