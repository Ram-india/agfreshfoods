import Seo, { faqSchema } from '../components/ui/Seo'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import WhyChoose from '../components/home/WhyChoose'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Process from '../components/home/Process'
import BlackRice from '../components/home/BlackRice'
import Promise from '../components/home/Promise'
import Testimonials from '../components/home/Testimonials'
import DealerCTA from '../components/home/DealerCTA'
import Quality from '../components/home/Quality'
import GallerySection from '../components/home/GallerySection'
import FaqSection from '../components/home/FaqSection'
import BlogSection from '../components/home/BlogSection'
import ContactSection from '../components/home/ContactSection'
import { faqs } from '../data/content'

export default function Home() {
  return (
    <>
      <Seo
        title="Fresh Idly & Dosa Batter Made Daily"
        description="AG Fresh Foods grinds healthy traditional idly and dosa batter fresh every morning — Karuppu Kavuni black rice, millet, ragi and classic white rice. No preservatives, delivered cold across Tamil Nadu."
        keywords="idly batter, dosa batter, karuppu kavuni batter, black rice batter, millet batter, ragi dosa batter, fresh batter Coimbatore, idly dosa batter dealership"
        schema={faqSchema(faqs)}
      />

      <Hero />
      <Stats />
      <WhyChoose />
      <FeaturedProducts />
      <Process />
      <BlackRice />
      <Promise />
      <Testimonials />
      <DealerCTA />
      <Quality />
      <GallerySection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </>
  )
}
