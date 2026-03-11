'use client'

import { useState } from 'react'
import Container from './Container'
import { emailSchema } from '@/lib/validators'
import { useReveal } from '@/hooks/useReveal'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { ref, isRevealed } = useReveal()

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
      <div className="grid-line" />

      <Container>
        <div
          ref={ref}
          className={`max-w-3xl mx-auto pt-8 reveal ${isRevealed ? 'revealed' : ''}`}
        >
          {/* Card container */}
          <div className="card-system p-10 md:p-14 relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
                Stay Connected
              </p>

              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Occasional updates on our work.
              </h2>
              <p className="text-sm text-off-white/35 font-light mb-10 max-w-md mx-auto leading-relaxed">
                Platform developments, network expansion, and industry intelligence.
                No spam — ever.
              </p>

              {status === 'success' ? (
                <div className="animate-scale-in">
                  <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-success/[0.06] border border-success/15">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-success/80 text-sm font-light">
                      You&apos;re on the list. We&apos;ll be in touch.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        disabled={status === 'submitting'}
                        className="w-full px-5 py-3.5 bg-black/60 border border-off-white/[0.06] rounded-lg text-sm text-off-white placeholder:text-off-white/25 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:bg-black/80 outline-none transition-all duration-300 disabled:opacity-50 font-light"
                        aria-label="Email address"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-7 py-3.5 bg-accent text-white text-sm font-medium tracking-wide rounded-lg transition-all duration-300 hover:bg-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(59,130,246,0.15)] hover:shadow-[0_2px_12px_rgba(59,130,246,0.25),0_0_0_1px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black whitespace-nowrap"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Subscribing
                        </span>
                      ) : (
                        'Subscribe'
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="mt-3 text-xs text-red-400/70 font-light" role="alert">
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
