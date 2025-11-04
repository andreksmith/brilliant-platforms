import Container from '@/components/Container'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — Brilliant Platforms',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <div className="prose prose-invert prose-lg font-light">
              <p className="text-off-white/60 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Information We Collect
                </h2>
                <p className="text-off-white/70 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="text-off-white/70 space-y-2 mb-4">
                  <li>Email addresses submitted through subscription forms</li>
                  <li>Names, email addresses, and messages submitted through contact forms</li>
                  <li>Usage data and analytics (if Plausible Analytics is enabled)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  How We Use Your Information
                </h2>
                <p className="text-off-white/70 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-off-white/70 space-y-2 mb-4">
                  <li>Send occasional updates about our work (if you subscribed)</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Data Storage and Security
                </h2>
                <p className="text-off-white/70 mb-4">
                  We take reasonable measures to protect your information from
                  unauthorized access, use, or disclosure. Email subscriptions are
                  stored locally on our servers in JSON format.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Third-Party Services
                </h2>
                <p className="text-off-white/70 mb-4">
                  We may use Plausible Analytics, a privacy-friendly analytics
                  service that does not use cookies or collect personal data.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Your Rights
                </h2>
                <p className="text-off-white/70 mb-4">
                  You have the right to:
                </p>
                <ul className="text-off-white/70 space-y-2 mb-4">
                  <li>Request access to your personal information</li>
                  <li>Request correction or deletion of your personal information</li>
                  <li>Unsubscribe from our email list at any time</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Contact Us
                </h2>
                <p className="text-off-white/70 mb-4">
                  If you have questions about this Privacy Policy, please contact
                  us via our contact form.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
