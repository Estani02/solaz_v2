'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ShowerIcon from '@mui/icons-material/Shower'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import GroupsIcon from '@mui/icons-material/Groups'

import interior from '@/assets/img/interior_2.webp'
import { SITE } from '@/config/site'
import SectionHeading, { Accent } from '@/components/ui/SectionHeading'
import { EASE_OUT, Reveal } from '@/components/ui/motion'

const FEATURES = [
  {
    icon: FitnessCenterIcon,
    title: 'Equipamiento Life Fitness',
    text: 'Máquinas de calidad mundial para cada objetivo.',
  },
  {
    icon: AllInclusiveIcon,
    title: 'Pase libre',
    text: 'Sin restricciones horarias ni necesidad de turnos.',
  },
  { icon: AcUnitIcon, title: 'Ambiente climatizado', text: 'Aire acondicionado en todo el club.' },
  {
    icon: ShowerIcon,
    title: 'Duchas y vestuarios',
    text: 'Amplias áreas de duchas, vestuarios y lockers.',
  },
  { icon: WaterDropIcon, title: 'Hidratación gratuita', text: 'Agua disponible para cada socio.' },
  {
    icon: LocalParkingIcon,
    title: 'Estacionamiento exclusivo',
    text: 'Llegá y estacioná sin preocuparte.',
  },
]

function VideoCard() {
  const [playing, setPlaying] = useState(false)

  return (
    <Reveal className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-primario lg:aspect-auto lg:h-full">
      {playing ? (
        <iframe
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          className="absolute inset-0 h-full w-full"
          src={`${SITE.videoUrl}?autoplay=1&rel=0`}
          title="Conocé Solaz Club"
        />
      ) : (
        <button
          aria-label="Reproducir video de Solaz Club"
          className="group absolute inset-0"
          type="button"
          onClick={() => {
            setPlaying(true)
          }}
        >
          <Image
            fill
            alt="Interior del gimnasio Solaz Club"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={interior}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-solaz text-2xl text-white shadow-[0_0_0_12px_rgba(225,40,38,0.25)] transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
            <span className="absolute inset-0 animate-ping rounded-full bg-solaz/40" />▶
          </span>
          <span className="absolute bottom-6 left-6 text-left text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Conocé el club
          </span>
        </button>
      )}
    </Reveal>
  )
}

export default function WhySolaz() {
  return (
    <section className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-10 md:py-36" id="conocenos">
      <SectionHeading
        className="mb-14 md:mb-20"
        description="Somos una combinación de innovación tecnológica, profesionalismo y calidez humana, comprometidos en generar cambios integrales y sostenibles en tu cuerpo y tu salud."
        eyebrow="Somos lo que buscás"
        title={
          <>
            ¿Por qué <Accent>Solaz</Accent>?
          </>
        }
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <VideoCard />
        <ul className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              className="group flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-solaz/40 hover:bg-solaz/[0.07]"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: EASE_OUT }}
              viewport={{ once: true, margin: '-60px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-solaz/15 text-solaz transition-colors duration-500 group-hover:bg-solaz group-hover:text-white">
                <Icon fontSize="small" />
              </span>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="text-sm text-white/60">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      <Reveal className="mt-5 flex flex-col items-start gap-6 rounded-[2rem] bg-solaz p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div className="flex items-center gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <GroupsIcon />
          </span>
          <div>
            <h3 className="font-display text-2xl font-extrabold md:text-3xl">
              Un equipo que te acompaña
            </h3>
            <p className="text-white/85">
              Licenciados en educación física, licenciados en nutrición y fisioterapeutas.
            </p>
          </div>
        </div>
        <p className="font-display text-lg font-extrabold uppercase tracking-tight md:text-right">
          Disfrutá la libertad
          <br className="hidden md:block" /> de entrenar en Solaz
        </p>
      </Reveal>
    </section>
  )
}
