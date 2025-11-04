'use client'

import { useState } from 'react'
import Container from './Container'
import Button from './Button'
import { emailSchema } from '@/lib/validators'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const validation = emailSchema.safeParse({ email })
    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message)
      setStatus('error')
      return
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setStatus('success')
      setEmail('')
    } catch (error) {
      setErrorMessage('Failed to subscribe. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="email-capture" className="py-32 bg-black">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Stay Informed
          </h2>
          <p className="text-lg text-off-white/60 mb-12 font-light">
            Occasional updates on our work. No spam.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === 'submitting' || status === 'success'}
              className="flex-1 px-6 py-4 bg-charcoal border border-off-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-smooth disabled:opacity-50"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              variant="primary"
            >
              {status === 'submitting'
                ? 'Subscribing...'
                : status === 'success'
                ? 'Subscribed!'
                : 'Subscribe'}
            </Button>
          </form>

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-400" role="alert">
              {errorMessage}
            </p>
          )}

          {status === 'success' && (
            <p className="mt-4 text-sm text-success" role="status">
              Thanks for subscribing! We'll be in touch.
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
