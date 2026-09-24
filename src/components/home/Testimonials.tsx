import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'

import { Reseñas } from '@/assets/Reseñas'
import SectionHeading, { Accent } from '@/components/ui/SectionHeading'

type Review = (typeof Reseñas)[number]

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[20rem] shrink-0 flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:w-[24rem]">
      <div className="flex flex-col gap-4">
        <div aria-label={`${review.start} de 5 estrellas`} className="flex text-solaz" role="img">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className={i < review.start ? '' : 'opacity-20'} fontSize="small" />
          ))}
        </div>
        <blockquote className="text-lg leading-snug text-white/85">“{review.text}”</blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <Image
          alt=""
          className="h-10 w-10 rounded-full"
          height={40}
          src={review.avatar}
          width={40}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{review.name}</span>
          <span className="text-xs text-white/50">{review.detail} · Google</span>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden py-24 md:py-36">
      <SectionHeading
        align="center"
        className="mb-14 px-5 md:mb-20"
        eyebrow="Testimonios"
        title={
          <>
            Lo que dicen <Accent>nuestros socios</Accent>
          </>
        }
      />
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-40" />
        <div className="flex w-max animate-marquee [animation-duration:70s] group-hover:[animation-play-state:paused]">
          {[...Reseñas, ...Reseñas].map((review, i) => (
            // eslint-disable-next-line react/no-array-index-key -- la lista se duplica para el loop
            <div key={`${review.name}-${i}`} aria-hidden={i >= Reseñas.length} className="pr-5">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
