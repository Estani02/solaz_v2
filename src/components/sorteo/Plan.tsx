'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import EvaluationIcon from '@mui/icons-material/MonitorHeart'
import TrainingIcon from '@mui/icons-material/FitnessCenter'
import StaffIcon from '@mui/icons-material/School'
import WaterIcon from '@mui/icons-material/WaterDrop'
import CoffeeIcon from '@mui/icons-material/LocalCafe'
import ClimateIcon from '@mui/icons-material/AcUnit'
import ParkingIcon from '@mui/icons-material/LocalParking'
import KioskIcon from '@mui/icons-material/Storefront'

import { SITE } from '@/config/site'
import ButtonLink from '@/components/ui/ButtonLink'
import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

import { PLAN_HOURS, TULUM_PHOTOS } from './data'

const BENEFITS = [
  {
    icon: EvaluationIcon,
    title: 'Evaluación física completa',
    text: 'Medimos masa muscular, grasa corporal, movilidad, fuerza y recuperación cardíaca.',
  },
  {
    icon: TrainingIcon,
    title: 'Entrenamiento a tu medida',
    text: 'Un plan realmente personalizado, armado según tus objetivos y tu evaluación.',
  },
  {
    icon: StaffIcon,
    title: 'Staff profesional',
    text: 'Todo el equipo de sala son profesores y licenciados en Educación Física.',
  },
  {
    icon: WaterIcon,
    title: 'Hidratación full',
    text: 'Agua disponible durante todo tu entrenamiento, sin costo extra.',
  },
  { icon: CoffeeIcon, title: 'Café de cortesía', text: 'Café libre antes o después de entrenar.' },
  {
    icon: ClimateIcon,
    title: 'Ambiente climatizado',
    text: 'Entrená cómodo todo el año, en invierno y en verano.',
  },
  { icon: ParkingIcon, title: 'Estacionamiento propio', text: 'Llegás y estacionás sin vueltas.' },
  {
    icon: KioskIcon,
    title: 'Kiosco saludable',
    text: 'Vending con snacks saludables y bebidas para recargar energía.',
  },
]

export default function Plan() {
  return (
    <section className="px-3 py-12 md:px-6" id="plan">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
        <Image
          fill
          alt={TULUM_PHOTOS.costaTurquesa.alt}
          className="-z-10 object-cover"
          sizes="100vw"
          src={TULUM_PHOTOS.costaTurquesa.src}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ocean/95 via-ocean/85 to-lagoon/50" />

        <div className="flex flex-col gap-14 px-6 py-16 md:px-14 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Tu pasaje</Eyebrow>
              <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-7xl">
                Plan <span className="font-serif font-normal italic text-reef">semestral</span>
              </h2>
              <p className="max-w-md text-white/70 md:text-lg">
                Seis meses para entrenar en serio, con todo lo que necesitás en un solo lugar. Y con
                la compra o renovación ya participás del sorteo del viaje a Tulum.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink arrow external href={SITE.mapsUrl}>
                  Cómo llegar al club
                </ButtonLink>
                <ButtonLink href="#participar" variant="ghost">
                  Quiero que me contacten
                </ButtonLink>
              </div>
              <p className="text-sm text-white/60">
                Consultá valores y formas de pago en recepción · {SITE.address}
              </p>
            </Reveal>

            <Reveal
              className="flex flex-col gap-6 rounded-[2rem] border border-white/15 bg-white/10 p-8 text-white backdrop-blur-2xl md:p-10"
              delay={0.15}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Horarios del club
              </span>
              <dl className="flex flex-col divide-y divide-white/10">
                {PLAN_HOURS.map(({ days, ranges }) => (
                  <div
                    key={days}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 first:pt-0 last:pb-0"
                  >
                    <dt className="font-semibold text-white/80">{days}</dt>
                    <dd className="font-display text-xl font-bold text-reef md:text-2xl">
                      {ranges.join(' · ')}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-colors duration-500 hover:border-lagoon/50 hover:bg-lagoon/10"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: EASE_OUT }}
                viewport={{ once: true, margin: '-60px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lagoon/15 text-reef">
                  <Icon fontSize="small" />
                </span>
                <h3 className="font-display text-lg font-bold text-sand">{title}</h3>
                <p className="text-sm text-white/60">{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
