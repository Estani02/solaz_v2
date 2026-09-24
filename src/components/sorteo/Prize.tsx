'use client'
import type { MouseEvent } from 'react'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import FlightIcon from '@mui/icons-material/FlightTakeoff'
import PlaneIcon from '@mui/icons-material/Flight'
import ShuttleIcon from '@mui/icons-material/AirportShuttle'
import HotelIcon from '@mui/icons-material/Hotel'
import BreakfastIcon from '@mui/icons-material/FreeBreakfast'

import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

const INCLUDED = [
  {
    icon: FlightIcon,
    title: 'Aéreos',
    text: 'Vuelo directo Córdoba → Cancún y Cancún → Córdoba por Arajet.',
  },
  { icon: ShuttleIcon, title: 'Traslado al hotel', text: 'Incluido en el paquete.' },
  {
    icon: HotelIcon,
    title: 'Hotel 4★',
    text: 'Alojamiento en primera línea de playa durante 7 noches.',
  },
  {
    icon: BreakfastIcon,
    title: 'Desayuno incluido',
    text: 'Del 1/12/26 al 8/12/26.',
  },
]

function BoardingPass() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 15,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 15,
  })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="[perspective:1200px]">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] bg-sand text-ocean shadow-[0_40px_120px_-30px_rgba(46,181,192,0.5)]"
        initial={{ opacity: 0, y: 60, rotate: -4 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
        viewport={{ once: true, margin: '-100px' }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        onMouseLeave={handleLeave}
        onMouseMove={handleMove}
      >
        <div className="flex items-center justify-between bg-ocean px-7 py-4 text-sand">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em]">
            Boarding pass
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lagoon">
            2 pasajeros
          </span>
        </div>

        <div className="flex flex-col gap-8 p-7 md:p-9">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                COR
              </span>
              <span className="text-sm text-ocean/60">Córdoba</span>
            </div>
            <div className="relative flex-1">
              <svg className="h-10 w-full" preserveAspectRatio="none" viewBox="0 0 200 40">
                <motion.path
                  d="M4 34 Q100 -14 196 34"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  stroke="#2EB5C0"
                  strokeDasharray="4 6"
                  strokeWidth="2"
                  transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ pathLength: 1 }}
                />
              </svg>
              <motion.span
                className="absolute top-0 -translate-x-1/2 -translate-y-1/2 text-lagoon"
                initial={{ left: '2%', top: '85%', opacity: 0 }}
                transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{
                  left: ['2%', '50%', '98%'],
                  top: ['85%', '10%', '85%'],
                  rotate: [-20, 0, 20],
                  opacity: [0, 1, 1],
                }}
              >
                <PlaneIcon className="rotate-90" />
              </motion.span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                CUN
              </span>
              <span className="text-sm text-ocean/60">Cancún</span>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
            {[
              ['Salida', '01 DIC 2026'],
              ['Regreso', '08 DIC 2026'],
              ['Aerolínea', 'Arajet'],
              ['Destino', 'Tulum, MX'],
              ['Hotel', '4★ frente al mar'],
              ['Régimen', 'Con desayuno'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ocean/50">
                  {label}
                </dt>
                <dd className="font-display text-base font-bold md:text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center">
          <span className="absolute -left-4 h-8 w-8 rounded-full bg-ocean" />
          <span className="mx-6 w-full border-t-2 border-dashed border-ocean/20" />
          <span className="absolute -right-4 h-8 w-8 rounded-full bg-ocean" />
        </div>

        <div className="flex items-center justify-between gap-6 p-7 md:px-9">
          <div className="flex items-center gap-3">
            <Image
              alt="Gira Mundial"
              className="h-10 w-auto"
              height={211}
              src="/images/logos/gira-mundial-isotipo-color.svg"
              width={295}
            />
            <span className="text-xs leading-tight text-ocean/60">
              De la mano de
              <br />
              <strong className="text-sm text-ocean">Gira Mundial</strong>
            </span>
          </div>
          <div aria-hidden className="flex h-12 items-end gap-[3px]">
            {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 2].map((w, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={i} className="h-full bg-ocean" style={{ width: w * 2 }} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Prize() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" id="premio">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-lagoon/20 blur-[140px]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>El premio</Eyebrow>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-7xl">
              Un viaje a las playas de{' '}
              <span className="font-serif font-normal italic text-lagoon">Tulum</span> para 2
              personas
            </h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {INCLUDED.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-500 hover:border-lagoon/50 hover:bg-lagoon/10"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_OUT }}
                viewport={{ once: true, margin: '-60px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lagoon/15 text-lagoon">
                  <Icon fontSize="small" />
                </span>
                <h3 className="font-display text-lg font-bold text-sand">{title}</h3>
                <p className="text-sm text-white/60">{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <BoardingPass />
      </div>
    </section>
  )
}
