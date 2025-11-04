import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PillarTiles from '@/components/PillarTiles'
import Systems from '@/components/Systems'
import Philosophy from '@/components/Philosophy'
import Platforms from '@/components/Platforms'
import Approach from '@/components/Approach'
import Focus from '@/components/Focus'
import Capabilities from '@/components/Capabilities'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import JournalTeaser from '@/components/JournalTeaser'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PillarTiles />
        <Philosophy />
        <Platforms />
        <Approach />
        <Focus />
        <Capabilities />
        <Stats />
        <Systems />
        <Testimonial />
        <JournalTeaser />
        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
