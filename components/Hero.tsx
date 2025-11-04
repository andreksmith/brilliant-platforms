'use client'

import Container from './Container'
import Button from './Button'
import StarburstLogo from './StarburstLogo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Energy grid background */}
      <div className="absolute inset-0 energy-grid" />

      {/* Animated starburst */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-pulse-slow">
          <StarburstLogo size={600} />
        </div>
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center py-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-tight">
            We build clarity
            <br />
            into complexity.
          </h1>

          <p className="text-lg md:text-xl text-off-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Brilliant Platforms is a technology company advancing how critical
            systems are designed, built, and connected. From digital
            infrastructure to global resilience — we're rethinking the frameworks
            that power the world.
          </p>
        </div>
      </Container>
    </section>
  )
}
