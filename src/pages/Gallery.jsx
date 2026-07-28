import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import GalleryGrid from '../components/gallery/GalleryGrid'
import BeforeAfter from '../components/ui/BeforeAfter'
import { galleryItems } from '../data/content'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery — Inside Our Unit"
        description="Look inside AG Fresh Foods: the production unit, stone grinding hall, quality lab, hygienic packing room, cold storage and refrigerated delivery vans."
        keywords="AG Fresh Foods gallery, batter factory photos, idly batter production unit, food processing Coimbatore"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Gallery"
        title="Come and see where breakfast is made"
        subtitle="The grinding hall, the cold rooms, the packing line and the vans that leave before sunrise. Click any image to open it."
        trail={trail}
      >
        <Button to="/manufacturing-process">
          How it's made <ArrowRight className="size-4" />
        </Button>
        <Button to="/contact" variant="outline">
          Arrange a visit
        </Button>
      </PageHero>

      <Section>
        <div className="shell">
          <GalleryGrid items={galleryItems} />
        </div>
      </Section>

      <Section alt>
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal x={-30} y={0}>
            <BeforeAfter
              beforeArt="fermentation"
              afterArt="idly"
              beforeSrc="batter-fresh.jpg"
              afterSrc="idly-steamed.jpg"
              beforeLabel="In the vessel"
              afterLabel="On the plate"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Before & after"
              title="Batter at its peak, and what it becomes"
              body="Drag the handle. On the left is naturally fermented batter at the point we seal it; on the right is the same batter twelve minutes on a steamer."
              className="!mx-0"
            />
            <Button to="/products" className="mt-8">
              Browse the range <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
