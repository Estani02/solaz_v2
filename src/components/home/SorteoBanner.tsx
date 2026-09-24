'use client'
import Image from 'next/image'
import Link from 'next/link'
import NumberFlow from '@number-flow/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { SORTEO_DATE, TULUM_PHOTOS } from '@/components/sorteo/data'
import { useCountdown } from '@/components/sorteo/countdown'
import { EASE_OUT } from '@/components/ui/motion'

export default function SorteoBanner() {
  const ref = useRef<HTMLAnchorElement>(null)
  const left = useCountdown(SORTEO_DATE)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  if (left?.done) return null

  return (
    <section className="px-3 py-8 md:px-6">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        transition={{ duration: 1, ease: EASE_OUT }}
        viewport={{ once: true, margin: '-80px' }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
      >
        <Link
          ref={ref}
          className="group relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-[2.5rem] p-7 md:min-h-[32rem] md:p-14"
          href="/sorteo"
        >
          <motion.div className="absolute inset-[-12%_0] -z-10" style={{ y: imageY }}>
            <Image
              fill
              alt={TULUM_PHOTOS.hero.alt}
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              sizes="100vw"
              src={TULUM_PHOTOS.hero.src}
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean via-ocean/60 to-ocean/10" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ocean/80 to-transparent" />

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="flex max-w-2xl flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lagoon opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lagoon" />
                </span>
                Sorteo · Caribe mexicano
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.92] tracking-tight text-white">
                Entrená y ganá un viaje a{' '}
                <span className="font-serif font-normal italic text-reef">Tulum</span>
              </h2>
              <p className="text-white/80 md:text-lg">
                Con la compra o renovación de tu plan semestral participás del sorteo de un viaje
                para 2 personas.
              </p>
              <span className="inline-flex w-fit items-center gap-3 rounded-full bg-lagoon px-7 py-4 text-sm font-bold uppercase tracking-wider text-ocean transition-transform duration-300 group-hover:scale-105">
                Conocé el sorteo
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>

            <div className="flex w-fit flex-col items-start gap-1 rounded-3xl border border-white/20 bg-white/10 px-7 py-5 text-white backdrop-blur-xl md:items-end">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Faltan
              </span>
              <span className="font-display text-6xl font-extrabold leading-none md:text-7xl">
                <NumberFlow
                  className={`transition-opacity duration-500 ${
                    left ? 'opacity-100' : 'opacity-0'
                  }`}
                  trend={-1}
                  value={left?.days ?? 0}
                />
              </span>
              <span className="text-sm text-white/80">días para el sorteo</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
