'use client'
import Image from 'next/image'
import NumberFlow from '@number-flow/react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import RecyclingIcon from '@mui/icons-material/Recycling'
import NoDrinksIcon from '@mui/icons-material/NoDrinks'
import SportsBarIcon from '@mui/icons-material/LocalDrink'

import bgAmbiente from '@/assets/img/bg_ambiente.jpg'
import botella from '@/assets/img/botella.webp'
import PageHero from '@/components/ui/PageHero'
import ScrollStatement from '@/components/ui/ScrollStatement'
import SectionHeading, { Accent } from '@/components/ui/SectionHeading'
import { EASE_OUT } from '@/components/ui/motion'

function DispensersCard() {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.li
      ref={ref}
      className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2rem] bg-solaz p-8 sm:col-span-2 md:p-10"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      viewport={{ once: true, margin: '-60px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <WaterDropIcon className="absolute -right-6 -top-6 !text-[12rem] text-white/10" />
      <span className="font-display text-[7rem] font-extrabold leading-none md:text-[9rem]">
        <NumberFlow value={inView ? 8 : 0} />
      </span>
      <div className="relative max-w-md">
        <h3 className="font-display text-2xl font-bold">Dispensadores de agua</h3>
        <p className="mt-2 text-white/85">
          Agua baja en sodio distribuida en todo el gimnasio, para que cada socio se mantenga
          correctamente hidratado.
        </p>
      </div>
    </motion.li>
  )
}

const INITIATIVES = [
  {
    icon: SportsBarIcon,
    title: 'Ecobotella personalizada',
    text: 'Cada socio recibe su propia ecobotella para rellenar cuando quiera.',
  },
  {
    icon: NoDrinksIcon,
    title: 'Chau plásticos de un solo uso',
    text: 'Una iniciativa para dejar atrás las botellas y los vasos descartables.',
  },
  {
    icon: RecyclingIcon,
    title: 'Separación de residuos',
    text: 'Estaciones para separar residuos y contribuir a un ambiente más sostenible.',
  },
]

function Initiatives() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Observer en el contenedor: un elemento con clip-path cerrado nunca dispara whileInView
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-36">
      <SectionHeading
        className="mb-14 md:mb-20"
        description="En Solaz prestamos atención a todos los detalles y adoptamos un enfoque integral: tu hidratación y el cuidado del ambiente van de la mano."
        eyebrow="Responsabilidad ambiental"
        title={
          <>
            Eco-conciencia <Accent>y salud</Accent>
          </>
        }
      />
      <div ref={ref} className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          animate={{
            clipPath: inView ? 'inset(0% 0% 0% 0% round 32px)' : 'inset(0% 0% 100% 0% round 32px)',
          }}
          className="relative min-h-[26rem] overflow-hidden rounded-[2rem] lg:sticky lg:top-28 lg:h-[36rem]"
          initial={false}
          transition={{ duration: 1.2, ease: EASE_OUT }}
        >
          <motion.div className="absolute inset-[-8%_0]" style={{ y: imageY }}>
            <Image
              fill
              alt="Ecobotella de Solaz Club"
              className="object-cover"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={botella}
            />
          </motion.div>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2">
          <DispensersCard />
          {INITIATIVES.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              className={`group flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-solaz/40 hover:bg-solaz/[0.07] ${
                i === INITIATIVES.length - 1 ? 'sm:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: EASE_OUT }}
              viewport={{ once: true, margin: '-60px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-solaz/15 text-solaz transition-colors duration-500 group-hover:bg-solaz group-hover:text-white">
                <Icon />
              </span>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="text-white/60">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function AmbienteLanding() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        description="Estamos comprometidos con tu bienestar y con tu proceso, y eso también incluye cuidar el lugar donde vivimos."
        eyebrow="Compromiso con el ambiente"
        image={bgAmbiente}
        imageAlt="Voluntarios recolectando botellas plásticas"
        title={
          <>
            Cuidamos tu bienestar{' '}
            <span className="font-serif font-normal italic text-solaz">y el del planeta</span>
          </>
        }
      />
      <ScrollStatement text="Solaz está a punto de certificarse como Empresa B: una empresa que genera triple impacto." />
      <Initiatives />
    </main>
  )
}
