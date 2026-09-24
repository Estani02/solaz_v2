'use client'
import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { EASE_OUT, Eyebrow } from './motion'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  image: StaticImageData
  imageAlt: string
  children?: ReactNode
}

// Hero de páginas internas: foto con parallax, título que sube desde una máscara y bajada.
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-[80svh] overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <motion.div
          animate={{ scale: 1 }}
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          transition={{ duration: 2.2, ease: EASE_OUT }}
        >
          <Image
            fill
            priority
            alt={imageAlt}
            className="object-cover"
            placeholder="blur"
            sizes="100vw"
            src={image}
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/50" />

      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col justify-end gap-8 px-5 pb-16 pt-32 md:justify-center md:px-10"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
        >
          <Eyebrow tone="solaz">{eyebrow}</Eyebrow>
        </motion.div>
        <h1 className="max-w-4xl overflow-hidden pb-[0.08em] font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight">
          <motion.span
            animate={{ y: '0%' }}
            className="block"
            initial={{ y: '105%' }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE_OUT }}
          >
            {title}
          </motion.span>
        </h1>
        {description || children ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex max-w-xl flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8, ease: EASE_OUT }}
          >
            {description ? <p className="text-lg text-white/75 md:text-xl">{description}</p> : null}
            {children}
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  )
}
