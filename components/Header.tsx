import Link from 'next/link'
import Container from './Container'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-off-white/5 bg-black/80 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wider hover:text-accent transition-smooth"
          >
            BRILLIANT PLATFORMS
          </Link>
        </nav>
      </Container>
    </header>
  )
}
