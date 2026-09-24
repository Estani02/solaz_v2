'use client'
import { motion } from 'framer-motion'

import { EASE_OUT, Eyebrow, Reveal } from '@/components/ui/motion'

import { Countdown, useCountdown } from './countdown'
import { DOUBLE_CHANCE_DEADLINE } from './data'

const STEPS = [
  {
    title: 'Comprá o renová tu plan semestral',
    text: 'Con la compra o renovación de un plan semestral en Solaz ya participás del sorteo.',
  },
  {
    title: 'Sumá doble chance',
    text: 'Si te inscribís hasta el 23 de octubre, participás con 2 chances.',
  },
  {
    title: 'Esperá el gran día',
    text: 'El sorteo se realiza el viernes 13 de noviembre a las 19:00 hs ante escribano público.',
  },
]

function DoubleChanceCard() {
  const left = useCountdown(DOUBLE_CHANCE_DEADLINE)

  return (
    <Reveal
      className="relative overflow-hidden rounded-[2rem] bg-solaz p-8 text-white md:p-10"
      delay={0.2}
    >
      <motion.span
        aria-hidden
        animate={{ rotate: [0, 6, 0] }}
        className="pointer-events-none absolute -right-6 -top-10 font-display text-[11rem] font-extrabold leading-none text-white/10 md:text-[14rem]"
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        x2
      </motion.span>
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Doble chance
          </span>
          <p className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
            Inscribite hasta el 23 de octubre y participás con{' '}
            <span className="font-serif font-normal italic">2 chances</span>.
          </p>
        </div>
        {left?.done ? (
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
            La doble chance ya finalizó
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">Termina en</span>
            <div className="grid max-w-sm grid-cols-4 gap-2">
              <Countdown
                left={left}
                numberClassName="font-display text-3xl font-extrabold leading-none"
                renderUnit={(value, label) => (
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-black/20 px-1 py-3 backdrop-blur">
                    {value}
                    <span className="text-[10px] uppercase tracking-widest text-white/70">
                      {label}
                    </span>
                  </div>
                )}
                units={[
                  { key: 'days', label: 'días' },
                  { key: 'hours', label: 'hs' },
                  { key: 'minutes', label: 'min' },
                  { key: 'seconds', label: 'seg' },
                ]}
              />
            </div>
          </div>
        )}
      </div>
    </Reveal>
  )
}

export default function HowToParticipate() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36" id="como-participar">
      <Reveal className="mb-14 flex flex-col gap-5 md:mb-20">
        <Eyebrow>Cómo participás</Eyebrow>
        <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-7xl">
          ¿Cómo <span className="font-serif font-normal italic text-lagoon">participás</span>?
        </h2>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <ol className="flex flex-col divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/[0.03]">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              className="group flex gap-6 p-7 md:gap-10 md:p-10"
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE_OUT }}
              viewport={{ once: true, margin: '-60px' }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="font-display text-5xl font-extrabold text-lagoon/30 transition-colors duration-500 group-hover:text-lagoon md:text-6xl">
                0{i + 1}
              </span>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-display text-xl font-bold text-sand md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-white/60 md:text-lg">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
        <DoubleChanceCard />
      </div>
    </section>
  )
}
