import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SampleGallery } from '@/components/sample-gallery'
import { Services } from '@/components/services'
import { Stats } from '@/components/stats'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SampleGallery />
        <Services />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
