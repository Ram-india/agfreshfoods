import { ArrowRight } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import GalleryGrid from '../gallery/GalleryGrid'
import { galleryItems } from '../../data/content'

export default function GallerySection() {
  return (
    <Section id="gallery" alt>
      <div className="shell">
        <SectionHeading
          eyebrow="Inside AG Fresh Foods"
          title="Where your breakfast actually comes from"
          body="No stock photos. This is our unit, our grinders, our packing hall and our vans."
        />

        <div className="mt-14">
          <GalleryGrid items={galleryItems} limit={6} />
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Button to="/gallery" variant="outline">
            View full gallery <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </Section>
  )
}
