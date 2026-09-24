'use client'
import Image from 'next/image'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

import { PAYMENT_URL, PLAN_INSTALLMENTS, PLAN_PRICE, TULUM_PHOTOS, formatARS } from './data'

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const text = useTransform(count, (v) => formatARS(Math.round(v)))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.8, ease: EASE_OUT })

    return () => {
      controls.stop()
    }
  }, [inView, count, value])

  return <motion.span ref={ref}>{text}</motion.span>
}

export default function Pricing() {
  const installment = PLAN_PRICE / PLAN_INSTALLMENTS
  const hasPaymentLink = PAYMENT_URL !== ''

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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ocean/95 via-ocean/80 to-lagoon/40" />

        <div className="grid items-center gap-12 px-6 py-16 md:px-14 md:py-24 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Tu pasaje</Eyebrow>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-7xl">
              Plan <span className="font-serif font-normal italic text-reef">semestral</span>
            </h2>
            <p className="max-w-md text-white/70 md:text-lg">
              Con la compra o renovación de tu plan semestral ya participás del sorteo del viaje a
              Tulum.
            </p>
          </Reveal>

          <Reveal
            className="flex flex-col gap-8 rounded-[2rem] border border-white/15 bg-white/10 p-8 text-white backdrop-blur-2xl md:p-10"
            delay={0.15}
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Valor del plan
              </span>
              <span className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                <CountUp value={PLAN_PRICE} />
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-lagoon/20 p-4 ring-1 ring-lagoon/40">
              <span className="font-display text-4xl font-extrabold text-reef">
                {PLAN_INSTALLMENTS}x
              </span>
              <div className="flex flex-col">
                <span className="font-bold">{formatARS(installment)}</span>
                <span className="text-sm text-white/70">
                  {PLAN_INSTALLMENTS} cuotas sin interés
                </span>
              </div>
            </div>
            <motion.a
              className="group flex items-center justify-center gap-3 rounded-full bg-solaz px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_20px_50px_-15px_rgba(225,40,38,0.9)]"
              href={hasPaymentLink ? PAYMENT_URL : '#participar'}
              rel={hasPaymentLink ? 'noopener noreferrer' : undefined}
              target={hasPaymentLink ? '_blank' : undefined}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Pagar {formatARS(PLAN_PRICE)}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
