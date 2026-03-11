'use client'

import { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import StarburstLogo from './StarburstLogo'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Energy grid background */}
      <div className="absolute inset-0 energy-grid" />

      {/* Ambient glow — center top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Animated starburst */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-pulse-slow">
          <StarburstLogo size={600} />
        </div>
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center py-32">
          <h1
            className={`text-5xl md:text-7xl lg:text-[5.5rem] font-light mb-8 tracking-tight leading-[1.05] transition-all duration-1000 ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            The coordination layer for
            <br />
            data center procurement.
          </h1>

          <p
            className={`text-lg md:text-xl text-off-white/50 max-w-3xl mx-auto font-light leading-relaxed mb-14 transition-all duration-1000 ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '200ms',
            }}
          >
            Brilliant Platforms develops software and media infrastructure for the
            coordination of equipment procurement across large-scale data center
            construction programs.
          </p>

          <div
            className={`transition-all duration-1000 ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '400ms',
            }}
          >
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  )
}
