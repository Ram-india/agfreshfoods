import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import Section, { SectionHeading } from '../ui/Section'
import Stars from '../ui/Stars'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="shell">
        <SectionHeading
          eyebrow="Customer Love"
          title="What families tell us at the breakfast table"
          body="Unedited words from customers and store partners across Tamil Nadu."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            a11y={{ enabled: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="surface-card flex h-full flex-col rounded-3xl border hairline p-7 shadow-soft">
                  <Quote className="size-8 text-forest-500/25" aria-hidden="true" />
                  <Stars rating={t.rating} className="mt-4 size-[17px]" />
                  <blockquote className="mt-4 flex-1 font-heading text-[17px] font-medium leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest-500 to-leaf-500 font-heading text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold">{t.name}</span>
                      <span className="text-soft block text-xs">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  )
}
