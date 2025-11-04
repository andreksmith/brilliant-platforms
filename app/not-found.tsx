import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'

export const metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Container>
        <div className="text-center py-24">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            404
          </h1>
          <p className="text-xl md:text-2xl text-off-white/60 mb-12 max-w-md mx-auto font-light">
            The page you're looking for doesn't exist.
          </p>
          <Button href="/" variant="primary">
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  )
}
