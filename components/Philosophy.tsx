import Container from './Container'
import Reveal from './Reveal'

export default function Philosophy() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/[0.03] via-transparent to-transparent" />

      <Container>
        <div className="max-w-3xl relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight leading-[1.1]">
              Hundreds of millions in equipment.
            </h2>
            <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-tight leading-[1.1] text-off-white/40">
              Coordinated through email and spreadsheets.
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-lg text-off-white/50 font-light leading-relaxed">
              <p>
                Data center construction programs source critical equipment — switchgear,
                generators, cooling systems, UPS — across dozens of vendors and multi-year
                timelines. Yet most procurement coordination still happens through email
                threads, PDF attachments, and manual tracking.
              </p>
              <p className="text-off-white/60">
                Brilliant Platforms exists because this process should have purpose-built
                infrastructure.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
