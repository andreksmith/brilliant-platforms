'use client'

import { useState } from 'react'
import Container from '@/components/Container'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { contactFormSchema } from '@/lib/validators'

export default function ContactPage() {
  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    const validation = contactFormSchema.safeParse(data)
    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message)
      setFormState('error')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setFormState('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.')
      setFormState('error')
    }
  }

  const inputClasses =
    'w-full px-5 py-3.5 bg-black/40 border border-off-white/[0.06] rounded-lg text-sm text-off-white placeholder:text-off-white/25 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:bg-black/60 outline-none transition-all duration-300 disabled:opacity-50 font-light'

  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left column — context */}
              <div className="lg:col-span-2">
                <p className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase mb-4">
                  Contact
                </p>
                <h1 className="text-3xl md:text-4xl font-light mb-5 tracking-tight">
                  Get in touch.
                </h1>
                <p className="text-sm text-off-white/40 font-light leading-relaxed mb-10">
                  Questions about the platform, partnership opportunities, or
                  vendor onboarding — we&apos;d like to hear from you.
                </p>

                {/* Quick info */}
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-[10px] text-off-white/25 tracking-[0.15em] uppercase mb-1.5">
                      Response Time
                    </p>
                    <p className="text-sm text-off-white/50 font-light">
                      Within 24 hours
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-off-white/25 tracking-[0.15em] uppercase mb-1.5">
                      For Vendors
                    </p>
                    <p className="text-sm text-off-white/50 font-light">
                      Include your company name and product categories
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-off-white/25 tracking-[0.15em] uppercase mb-1.5">
                      For Developers
                    </p>
                    <p className="text-sm text-off-white/50 font-light">
                      Tell us about your project scope and timeline
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column — form */}
              <div className="lg:col-span-3">
                <div className="card-system p-8 md:p-10 relative overflow-hidden">
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.02] rounded-full blur-2xl pointer-events-none" />

                  {formState === 'success' ? (
                    <div className="relative z-10 py-12 text-center">
                      <div className="w-12 h-12 rounded-full bg-success/[0.08] border border-success/15 flex items-center justify-center mx-auto mb-5">
                        <svg
                          className="w-5 h-5 text-success/80"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-light mb-2 tracking-tight">
                        Message sent.
                      </h3>
                      <p className="text-sm text-off-white/40 font-light">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-mono text-[10px] text-off-white/30 tracking-[0.15em] uppercase mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className={inputClasses}
                          disabled={formState === 'submitting'}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block font-mono text-[10px] text-off-white/30 tracking-[0.15em] uppercase mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          className={inputClasses}
                          disabled={formState === 'submitting'}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block font-mono text-[10px] text-off-white/30 tracking-[0.15em] uppercase mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell us what you're working on..."
                          className={`${inputClasses} resize-none`}
                          disabled={formState === 'submitting'}
                        />
                      </div>

                      {formState === 'error' && (
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-500/[0.06] border border-red-500/15">
                          <svg className="w-3.5 h-3.5 text-red-400/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-xs text-red-400/70 font-light">{errorMessage}</p>
                        </div>
                      )}

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={formState === 'submitting'}
                          className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white text-sm font-medium tracking-wide rounded-lg transition-all duration-300 hover:bg-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(59,130,246,0.15)] hover:shadow-[0_2px_12px_rgba(59,130,246,0.25),0_0_0_1px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                          {formState === 'submitting' ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
