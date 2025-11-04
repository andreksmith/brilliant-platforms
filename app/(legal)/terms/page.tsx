import Container from '@/components/Container'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service — Brilliant Platforms',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Terms of Service
            </h1>
            <div className="prose prose-invert prose-lg font-light">
              <p className="text-off-white/60 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Acceptance of Terms
                </h2>
                <p className="text-off-white/70 mb-4">
                  By accessing and using this website, you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Use License
                </h2>
                <p className="text-off-white/70 mb-4">
                  Permission is granted to temporarily access the materials
                  (information or software) on Brilliant Platforms' website for
                  personal, non-commercial transitory viewing only.
                </p>
                <p className="text-off-white/70 mb-4">
                  This is the grant of a license, not a transfer of title, and
                  under this license you may not:
                </p>
                <ul className="text-off-white/70 space-y-2 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Disclaimer
                </h2>
                <p className="text-off-white/70 mb-4">
                  The materials on Brilliant Platforms' website are provided on an
                  'as is' basis. Brilliant Platforms makes no warranties, expressed
                  or implied, and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of
                  rights.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Limitations
                </h2>
                <p className="text-off-white/70 mb-4">
                  In no event shall Brilliant Platforms or its suppliers be liable
                  for any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on Brilliant
                  Platforms' website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Revisions and Errata
                </h2>
                <p className="text-off-white/70 mb-4">
                  The materials appearing on Brilliant Platforms' website could
                  include technical, typographical, or photographic errors.
                  Brilliant Platforms does not warrant that any of the materials on
                  its website are accurate, complete, or current.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Modifications
                </h2>
                <p className="text-off-white/70 mb-4">
                  Brilliant Platforms may revise these terms of service at any time
                  without notice. By using this website you are agreeing to be
                  bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light mb-4 text-off-white">
                  Contact Information
                </h2>
                <p className="text-off-white/70 mb-4">
                  If you have any questions about these Terms, please contact us
                  via our contact form.
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
