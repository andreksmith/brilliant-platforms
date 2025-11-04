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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand column */}
            <div className="md:col-span-4">
              <h3 className="text-xl font-semibold mb-4 tracking-tight">
                Brilliant Platforms
              </h3>
              <p className="text-sm text-off-white/60 font-light leading-relaxed mb-6">
                Building clarity into complexity. Technology for critical systems
                that can't afford to fail.
              </p>
              <p className="text-xs text-off-white/40">
                A Brilliant Company™
              </p>
            </div>

            {/* Company links */}
            <div className="md:col-span-2">
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
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    Careers
                  </span>
                </li>
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    About
                  </span>
                </li>
              </ul>
            </div>

            {/* Resources links */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold tracking-widest text-off-white/50 mb-4 uppercase">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    Documentation
                  </span>
                </li>
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    API Reference
                  </span>
                </li>
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    Case Studies
                  </span>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div className="md:col-span-2">
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
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    Security
                  </span>
                </li>
              </ul>
            </div>

            {/* Connect column */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold tracking-widest text-off-white/50 mb-4 uppercase">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    LinkedIn
                  </span>
                </li>
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    GitHub
                  </span>
                </li>
                <li>
                  <span className="text-sm text-off-white/40 cursor-not-allowed">
                    Twitter
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-off-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-off-white/40">
              © {new Date().getFullYear()} Brilliant Platforms. All rights reserved.
            </p>
            <p className="text-xs text-off-white/30 font-light">
              Built for the systems that matter.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
