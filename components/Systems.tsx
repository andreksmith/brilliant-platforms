import Container from './Container'

const systems = ['Crisis Response', 'Connectivity', 'Logistics', 'Coordination']

export default function Systems() {
  return (
    <section className="py-32 bg-black border-t border-off-white/5">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-widest mb-8 text-accent uppercase">
            Systems we touch
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-12 tracking-tight">
            Procurement • Crisis Response • Supply Chain • Coordination
          </p>
          <div className="space-y-4 text-lg text-off-white/60 font-light">
            <p>
              From data center RFP marketplaces to disaster relief operations — platforms that connect the right people at the right time.
            </p>
            <p>Three platforms. One philosophy: clarity from complexity.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
