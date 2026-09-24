'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import phones from '@/assets/img/phones.png'
import bgApp from '@/assets/img/bg_app.jpeg'
import googlePlay from '@/assets/img/google_play.png'
import appStore from '@/assets/img/app_store.png'
import { ItemApp } from '@/assets/ItemApp'
import { SITE } from '@/config/site'
import SectionHeading, { Accent } from '@/components/ui/SectionHeading'
import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {[
        { href: SITE.playStore, img: googlePlay, alt: 'Descargar en Google Play' },
        { href: SITE.appStore, img: appStore, alt: 'Descargar en App Store' },
      ].map((store) => (
        <motion.a
          key={store.alt}
          className="overflow-hidden rounded-xl ring-1 ring-white/15"
          href={store.href}
          rel="noopener noreferrer"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
        >
          <Image alt={store.alt} className="h-12 w-auto md:h-14" src={store.img} />
        </motion.a>
      ))}
    </div>
  )
}

function AppHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const phonesY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const phonesRotate = useTransform(scrollYProgress, [0, 1], [0, -6])

  return (
    <section ref={ref} className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-10 -z-10 h-[40rem] w-[40rem] rounded-full bg-solaz/25 blur-[160px]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-8">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          >
            <Eyebrow tone="solaz">App Solaz</Eyebrow>
          </motion.div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tight">
            {['Entrená y', 'medí tu progreso.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  animate={{ y: '0%' }}
                  className={`block ${i === 1 ? 'font-serif font-normal italic text-solaz' : ''}`}
                  initial={{ y: '110%' }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: EASE_OUT }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex max-w-lg flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8, ease: EASE_OUT }}
          >
            <p className="text-lg text-white/70 md:text-xl">
              Tu plan de entrenamiento, tu alimentación y tu evolución en un solo lugar. Descargala
              gratis y empezá a disfrutar sus beneficios.
            </p>
            <StoreBadges />
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, y: 80 }}
          style={{ y: phonesY, rotate: phonesRotate }}
          transition={{ duration: 1.3, delay: 0.4, ease: EASE_OUT }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              priority
              alt="Pantallas de la app Solaz Club"
              className="h-auto w-full drop-shadow-[0_40px_80px_rgba(225,40,38,0.35)]"
              sizes="(min-width: 1024px) 28rem, 90vw"
              src={phones}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AppFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading
        className="mb-14 md:mb-20"
        eyebrow="Aprovechá los beneficios"
        title={
          <>
            Todo lo que necesitás, <Accent>en tu celular</Accent>
          </>
        }
      />
      <ol className="grid gap-5 md:grid-cols-2">
        {ItemApp.map((item, i) => (
          <motion.li
            key={item.title}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-solaz/40 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: EASE_OUT }}
            viewport={{ once: true, margin: '-60px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="absolute right-8 top-6 font-display text-7xl font-extrabold text-white/[0.04] transition-colors duration-500 group-hover:text-solaz/20">
              0{i + 1}
            </span>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-solaz transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              {item.icon}
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              <p className="text-white/60">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}

function AppDownload() {
  return (
    <section className="px-3 pb-24 md:px-6">
      <Reveal className="relative isolate mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-solaz md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8 p-8 md:p-14">
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Descargala <span className="font-serif font-normal italic">gratis</span> y empezá hoy
          </h2>
          <p className="max-w-md text-white/85 md:text-lg">
            Disponible en Google Play y App Store. Llevá tu entrenamiento a donde vayas.
          </p>
          <StoreBadges />
        </div>
        <div className="relative min-h-[18rem]">
          <Image
            fill
            alt="Socia de Solaz usando la app en el gimnasio"
            className="object-cover"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            src={bgApp}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solaz via-solaz/20 to-transparent max-md:bg-gradient-to-b" />
        </div>
      </Reveal>
    </section>
  )
}

export default function AppLanding() {
  return (
    <main className="overflow-x-clip">
      <AppHero />
      <AppFeatures />
      <AppDownload />
    </main>
  )
}
