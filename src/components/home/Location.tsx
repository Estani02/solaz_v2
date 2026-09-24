'use client'
import dynamic from 'next/dynamic'
import PlaceIcon from '@mui/icons-material/Place'
import ScheduleIcon from '@mui/icons-material/Schedule'
import PhoneIcon from '@mui/icons-material/Phone'

import { HOURS, SITE } from '@/config/site'
import ButtonLink from '@/components/ui/ButtonLink'
import SectionHeading, { Accent } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/motion'

// Leaflet usa window: se carga solo en el cliente
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/5" />,
})

export default function Location() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36" id="ubicacion">
      <SectionHeading
        className="mb-14 md:mb-20"
        eyebrow="Ubicación"
        title={
          <>
            Te esperamos en <Accent>Mendiolaza</Accent>
          </>
        }
      />
      <Reveal className="relative isolate grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-[1fr_24rem]">
        <div className="h-[22rem] lg:h-[34rem]">
          <Map />
        </div>
        <div className="flex flex-col justify-between gap-8 bg-primario p-7 md:p-9">
          <ul className="flex flex-col gap-7">
            <li className="flex gap-4">
              <PlaceIcon className="text-solaz" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Dirección
                </p>
                <p className="mt-1 font-semibold">{SITE.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <ScheduleIcon className="text-solaz" />
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Horarios
                </p>
                {HOURS.map((h) => (
                  <div key={h.days}>
                    <p className="text-sm text-white/60">{h.days}</p>
                    <p className="font-semibold">{h.ranges.join(' y ')}</p>
                  </div>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <PhoneIcon className="text-solaz" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Teléfono
                </p>
                <a className="mt-1 block font-semibold hover:text-solaz" href={`tel:${SITE.phone}`}>
                  {SITE.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>
          <ButtonLink arrow external className="w-full" href={SITE.mapsUrl}>
            Cómo llegar
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
