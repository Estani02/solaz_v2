import Image from 'next/image'
import Link from 'next/link'

import { HOURS, NAV_ITEMS, SITE, SORTEO_NAV } from '@/config/site'
import ButtonLink from '@/components/ui/ButtonLink'
import SocialLinks from '@/components/ui/SocialLinks'

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{title}</h3>
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-solaz/20 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-tight">
            Tu mejor versión{' '}
            <span className="font-serif font-normal italic text-solaz">empieza hoy.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <ButtonLink arrow external href={SITE.whatsapp}>
              Escribinos
            </ButtonLink>
            <ButtonLink href="/contacto" variant="ghost">
              Contacto
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Image
              alt="Solaz Club"
              className="h-12 w-auto self-start"
              height={235}
              src="/images/logos/solaz-club-logo-blanco.svg"
              width={585}
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Un gimnasio con espíritu de club, donde lo social y el entrenamiento placentero son
              protagonistas.
            </p>
            <SocialLinks />
          </div>

          <Column title="Contacto">
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li>
                <a
                  className="transition-colors hover:text-solaz"
                  href={SITE.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {SITE.address}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-solaz" href={`tel:${SITE.phone}`}>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-solaz" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </Column>

          <Column title="Horarios">
            <dl className="flex flex-col gap-3 text-sm">
              {HOURS.map((h) => (
                <div key={h.days}>
                  <dt className="text-white/60">{h.days}</dt>
                  {h.ranges.map((r) => (
                    <dd key={r} className="font-semibold text-white">
                      {r}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </Column>

          <Column title="Navegación">
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {[...NAV_ITEMS, SORTEO_NAV].map((item) => (
                <li key={item.href}>
                  <Link className="transition-colors hover:text-solaz" href={item.href}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} Solaz Club. Todos los derechos reservados.</span>
          <span>Mendiolaza, Córdoba, Argentina</span>
        </div>
      </div>
    </footer>
  )
}
