'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import InstagramIcon from '@/assets/svg/InstagramIcon'
import { Reveal } from '@/components/ui/motion'

import { GIRA_MUNDIAL_INSTAGRAM, PHOTO_CREDITS } from './data'

export default function Partner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
      <Reveal className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-sand p-8 text-ocean md:flex-row md:p-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <Image
            alt="Gira Mundial"
            className="h-16 w-auto md:h-20"
            height={158}
            src="/images/logos/gira-mundial-logo-color.svg"
            width={539}
          />
          <p className="max-w-sm text-center text-ocean/70 md:text-left">
            El viaje es de la mano de la empresa de viajes{' '}
            <strong className="text-ocean">Gira Mundial</strong>.
          </p>
        </div>
        <motion.a
          className="inline-flex items-center gap-3 rounded-full bg-ocean px-7 py-4 text-sm font-bold uppercase tracking-wider text-sand"
          href={GIRA_MUNDIAL_INSTAGRAM}
          rel="noopener noreferrer"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <InstagramIcon className="h-5 w-5 [&_g]:fill-sand" />
          Seguilos en Instagram
        </motion.a>
      </Reveal>

      <p className="mt-10 text-center text-[11px] leading-relaxed text-white/30">
        Fotos de Tulum vía Wikimedia Commons:{' '}
        {PHOTO_CREDITS.map((credit, i) => (
          <span key={credit.file}>
            <a
              className="underline-offset-2 hover:underline"
              href={`https://commons.wikimedia.org/wiki/File:${credit.file}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {credit.author}
            </a>{' '}
            ({credit.license}){i < PHOTO_CREDITS.length - 1 ? ', ' : '.'}
          </span>
        ))}
      </p>
    </section>
  )
}
