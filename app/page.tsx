import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ecosystem from '@/components/Ecosystem'
import ProductSurface from '@/components/ProductSurface'
import NetworkScale from '@/components/NetworkScale'
import Platforms from '@/components/Platforms'
import Philosophy from '@/components/Philosophy'
import Stats from '@/components/Stats'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ecosystem />
        <ProductSurface />
        <NetworkScale />
        <Platforms />
        <Philosophy />
        <Stats />
        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
