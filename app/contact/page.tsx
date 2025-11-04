'use client'

import { useState } from 'react'
import Container from '@/components/Container'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
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

  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-off-white/60 mb-12 font-light">
              Questions about our work? Want to explore collaboration? Reach out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-off-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-smooth"
                  disabled={formState === 'submitting'}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-off-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-smooth"
                  disabled={formState === 'submitting'}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-off-white/10 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-smooth resize-none"
                  disabled={formState === 'submitting'}
                />
              </div>

              {formState === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              {formState === 'success' && (
                <p className="text-success text-sm">
                  Message sent successfully. We'll be in touch soon.
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
