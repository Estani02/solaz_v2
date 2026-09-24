'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { EASE_OUT } from './motion'
import { TULUM_PHOTOS } from './data'

const HEADLINE = [
  { text: 'Entrená hoy.', className: '' },
  { text: 'Llegá en forma', className: '' },
  { text: 'al verano.', className: 'font-serif italic font-normal text-reef' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y: imageY, scale: imageScale }}>
        <motion.div
          animate={{ scale: 1 }}
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          transition={{ duration: 2.4, ease: EASE_OUT }}
        >
          <Image
            fill
            priority
            alt={TULUM_PHOTOS.hero.alt}
            className="object-cover"
            sizes="100vw"
            src={TULUM_PHOTOS.hero.src}
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ocean/70 via-ocean/20 to-ocean" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ocean/80 via-ocean/30 to-transparent" />

      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-12 px-5 py-10 md:px-10 md:pt-28"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE_OUT }}
        >
          <Image
            alt="Solaz Club"
            className="h-9 w-auto md:h-12"
            height={235}
            src="/images/logos/solaz-club-logo-blanco.svg"
            width={585}
          />
          <span className="font-serif text-2xl italic text-white/60 md:text-3xl">×</span>
          <Image
            alt="Gira Mundial"
            className="h-9 w-auto md:h-12"
            height={158}
            src="/images/logos/gira-mundial-logo-blanco.svg"
            width={539}
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.span
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solaz opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-solaz" />
            </span>
            Sorteo · Caribe mexicano
          </motion.span>

          <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-extrabold leading-[0.9] tracking-tight text-white">
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  animate={{ y: '0%' }}
                  className={`block ${line.className}`}
                  initial={{ y: '110%' }}
                  transition={{ duration: 1.1, delay: 0.6 + i * 0.12, ease: EASE_OUT }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex max-w-xl flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE_OUT }}
          >
            <p className="text-lg text-white/80 md:text-xl">
              Solaz te da una motivación más y te lleva al espectacular{' '}
              <strong className="font-semibold text-white">Caribe mexicano</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="group inline-flex items-center gap-3 rounded-full bg-solaz px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_40px_-10px_rgba(225,40,38,0.8)] transition-transform duration-300 hover:scale-105"
                href="#participar"
              >
                Quiero participar
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
                href="#premio"
              >
                Ver el premio
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          className="flex items-end justify-between gap-6"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
            <span className="relative h-10 w-6 rounded-full border border-white/40">
              <motion.span
                animate={{ y: [0, 14, 0] }}
                className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-white"
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            Scroll
          </div>
          <dl className="divide-white/15 border-white/15 ml-auto grid grid-cols-3 divide-x rounded-2xl border bg-white/10 text-white backdrop-blur-xl">
            {[
              ['Destino', 'Tulum'],
              ['Viajan', '2 personas'],
              ['Estadía', '7 noches'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 px-4 py-3 md:px-6 md:py-4">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-white/60">{label}</dt>
                <dd className="font-display text-sm font-bold md:text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  )
}
