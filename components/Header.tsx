'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './Container'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-off-white/8 shadow-[0_1px_8px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wider hover:text-accent transition-smooth"
          >
            BRILLIANT PLATFORMS
          </Link>
          <Link
            href="/contact"
            className="text-sm text-off-white/70 hover:text-accent transition-smooth"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  )
}
