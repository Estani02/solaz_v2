'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

import { TULUM_PHOTOS, TULUM_SHORT_ID } from './data'

const TILES = [
  { photo: TULUM_PHOTOS.palmerasCastillo, className: 'col-span-2', label: 'Ruinas frente al mar' },
  { photo: TULUM_PHOTOS.palmerasMar, className: 'row-span-2', label: 'Palmeras y Caribe' },
  { photo: TULUM_PHOTOS.playaEscondida, className: '', label: 'Arena blanca' },
  { photo: TULUM_PHOTOS.arenaBlanca, className: '', label: 'Agua turquesa' },
]

function PhoneVideo() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '200px' })
  const src = `https://www.youtube-nocookie.com/embed/${TULUM_SHORT_ID}?autoplay=1&mute=1&loop=1&playlist=${TULUM_SHORT_ID}&controls=0&playsinline=1&modestbranding=1&rel=0`

  return (
    <motion.div
      ref={ref}
      className="col-span-2 row-span-2 flex items-center justify-center lg:col-span-1"
      initial={{ opacity: 0, y: 60, rotate: -6 }}
      transition={{ duration: 1.1, ease: EASE_OUT }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
    >
      <div className="relative aspect-[9/19] h-full max-h-[36rem] rounded-[2.75rem] border-[10px] border-[#0b0f12] bg-[#0b0f12] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        <span className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0b0f12]" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-lagoon/20">
          {inView ? (
            <iframe
              allow="autoplay; encrypted-media; picture-in-picture"
              className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2"
              src={src}
              title="Playas de Tulum"
            />
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null)
  // Un solo observer para toda la grilla: con uno por figura, las tiles con clip-path
  // cerrado a veces nunca disparaban el whileInView en mobile.
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div className="flex flex-col gap-5">
          <Eyebrow>El destino</Eyebrow>
          <h2 className="max-w-2xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-7xl">
            El espectacular{' '}
            <span className="font-serif font-normal italic text-lagoon">Caribe mexicano</span>
          </h2>
        </div>
        <p className="max-w-sm text-white/60 md:text-lg">
          Playas de Tulum, hotel en primera línea de playa y 7 noches para disfrutar de a 2.
        </p>
      </Reveal>

      <div
        ref={gridRef}
        className="grid auto-rows-[13rem] grid-cols-2 gap-4 md:auto-rows-[16rem] lg:auto-rows-[17rem] lg:grid-cols-4"
      >
        <PhoneVideo />
        {TILES.map(({ photo, className, label }, i) => (
          <motion.figure
            key={photo.src}
            animate={{
              clipPath: gridInView
                ? 'inset(0% 0% 0% 0% round 28px)'
                : 'inset(100% 0% 0% 0% round 28px)',
            }}
            className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}
            initial={false}
            transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: EASE_OUT }}
          >
            <Image
              fill
              alt={photo.alt}
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={photo.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-5 translate-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
