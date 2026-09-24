'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import bgHome from '@/assets/img/bg_page_home.jpg'
import ButtonLink from '@/components/ui/ButtonLink'
import { EASE_OUT } from '@/components/ui/motion'

const HEADLINE = [
  { text: 'Descubrí tu', className: '' },
  { text: 'mejor versión.', className: 'font-serif font-normal italic text-solaz' },
]

const HIGHLIGHTS = [
  ['Pase libre', 'Sin turnos'],
  ['Life Fitness', 'Equipamiento'],
  ['7 a 22 hs', 'Lunes a viernes'],
]

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
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
            alt="Mujer entrenando con barra en Solaz Club"
            className="object-cover object-[70%_center]"
            placeholder="blur"
            sizes="100vw"
            src={bgHome}
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col justify-end gap-14 px-5 pb-12 pt-32 md:justify-center md:px-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="flex flex-col gap-8">
          <motion.span
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          >
            <span className="h-2 w-2 rounded-full bg-solaz" />
            Gimnasio en Mendiolaza, Córdoba
          </motion.span>

          <h1 className="font-display text-[clamp(3.25rem,10vw,9rem)] font-extrabold leading-[0.88] tracking-tight">
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  animate={{ y: '0%' }}
                  className={`block ${line.className}`}
                  initial={{ y: '110%' }}
                  transition={{ duration: 1.1, delay: 0.45 + i * 0.12, ease: EASE_OUT }}
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
            transition={{ duration: 1, delay: 0.9, ease: EASE_OUT }}
          >
            <p className="text-lg text-white/75 md:text-xl">
              En Solaz te ayudamos a alcanzar tus metas de fitness y bienestar. Sumate a la familia
              y transformá tu vida con un estilo activo y saludable.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink arrow href="/contacto">
                Empezá hoy
              </ButtonLink>
              <ButtonLink href="#conocenos" variant="ghost">
                ▶ Conocenos
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.dl
          animate={{ opacity: 1, y: 0 }}
          className="grid max-w-2xl grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1.3, ease: EASE_OUT }}
        >
          {HIGHLIGHTS.map(([value, label]) => (
            <div key={value} className="flex flex-col gap-1 p-4 md:px-6">
              <dt className="text-[10px] uppercase tracking-[0.25em] text-white/50">{label}</dt>
              <dd className="font-display text-base font-bold md:text-2xl">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}
