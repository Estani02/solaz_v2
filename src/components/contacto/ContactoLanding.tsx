'use client'
import { motion } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import ScheduleIcon from '@mui/icons-material/Schedule'
import PaymentsIcon from '@mui/icons-material/Payments'

import interior from '@/assets/img/interior_2.webp'
import { HOURS, PAYMENT_METHODS, SITE } from '@/config/site'
import ContactForm from '@/components/ContactForm'
import ButtonLink from '@/components/ui/ButtonLink'
import PageHero from '@/components/ui/PageHero'
import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

const CHANNELS = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp / Teléfono',
    value: SITE.phoneDisplay,
    href: SITE.whatsapp,
    external: true,
  },
  { icon: EmailIcon, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: PlaceIcon, label: 'Dirección', value: SITE.address, href: SITE.mapsUrl, external: true },
]

function InfoCard({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE_OUT }}
      viewport={{ once: true, margin: '-40px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default function ContactoLanding() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        description="¿Tenés dudas o querés sumarte a Solaz? Escribinos y te contactamos."
        eyebrow="Contacto"
        image={interior}
        imageAlt="Sala de musculación de Solaz Club"
        title={
          <>
            Disfrutá entrenar,{' '}
            <span className="font-serif font-normal italic text-solaz">nosotros te guiamos</span>
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink arrow external href={SITE.whatsapp}>
            Escribinos por WhatsApp
          </ButtonLink>
          <ButtonLink href="#consulta" variant="ghost">
            Dejá tu consulta
          </ButtonLink>
        </div>
      </PageHero>

      <section
        className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_1.25fr] lg:gap-16"
        id="consulta"
      >
        <div className="flex flex-col gap-4">
          {CHANNELS.map(({ icon: Icon, label, value, href, external }, i) => (
            <InfoCard key={label} index={i}>
              <a
                className="group flex items-center gap-5"
                href={href}
                rel={external ? 'noopener noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-solaz/15 text-solaz transition-colors duration-300 group-hover:bg-solaz group-hover:text-white">
                  <Icon />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                    {label}
                  </span>
                  <span className="font-semibold transition-colors group-hover:text-solaz">
                    {value}
                  </span>
                </span>
              </a>
            </InfoCard>
          ))}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <InfoCard index={3}>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  <ScheduleIcon className="text-solaz" fontSize="small" /> Horarios
                </span>
                {HOURS.map((h) => (
                  <div key={h.days}>
                    <p className="text-sm text-white/60">{h.days}</p>
                    {h.ranges.map((r) => (
                      <p key={r} className="font-display text-lg font-bold">
                        {r}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </InfoCard>
            <InfoCard index={4}>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  <PaymentsIcon className="text-solaz" fontSize="small" /> Medios de pago
                </span>
                <ul className="flex flex-wrap gap-2">
                  {PAYMENT_METHODS.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-semibold"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/60">Consultá por las promos vigentes.</p>
              </div>
            </InfoCard>
          </div>
        </div>

        <Reveal
          className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 md:p-10"
          delay={0.1}
        >
          <div className="mb-8 flex flex-col gap-3">
            <Eyebrow tone="solaz">Dejá tu consulta</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              ¿En qué te podemos ayudar?
            </h2>
          </div>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  )
}
