'use client'
import { motion, useReducedMotion } from 'framer-motion'

import { Eyebrow, Reveal } from '@/components/ui/motion'

import { Countdown, useCountdown } from './countdown'
import { SORTEO_DATE } from './data'

// El cliente pidió que este dato resalte: brillo que lo recorre y un halo que late.
function GuaranteeBadge() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.span
      animate={
        reduceMotion
          ? undefined
          : {
              boxShadow: [
                '0 0 0 0 rgba(46,181,192,0.55)',
                '0 0 0 14px rgba(46,181,192,0)',
                '0 0 0 0 rgba(46,181,192,0)',
              ],
            }
      }
      className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-lagoon px-6 py-3 text-center text-sm font-bold text-ocean md:text-base"
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
    >
      {reduceMotion ? null : (
        <motion.span
          aria-hidden
          animate={{ x: ['-120%', '220%'] }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.8, ease: 'easeInOut' }}
        />
      )}
      <motion.span
        animate={reduceMotion ? undefined : { scale: [1, 1.25, 1] }}
        className="relative shrink-0"
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✓
      </motion.span>
      <span className="relative">El premio sale sí o sí entre los participantes</span>
    </motion.span>
  )
}

export default function DrawCountdown() {
  const left = useCountdown(SORTEO_DATE)

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 text-center md:px-10 md:py-36">
      <Reveal className="flex flex-col items-center gap-6">
        <Eyebrow tone="solaz">El sorteo</Eyebrow>
        <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-6xl">
          Viernes 13 de noviembre
          <span className="block font-serif font-normal italic text-lagoon">a las 19:00 hs</span>
        </h2>
      </Reveal>

      {left?.done ? (
        <Reveal className="mt-14">
          <p className="font-display text-3xl font-bold text-sand">¡El sorteo ya se realizó!</p>
        </Reveal>
      ) : (
        <Reveal className="mt-14 grid grid-cols-4 gap-2 md:mt-20 md:gap-6" delay={0.15}>
          <Countdown
            left={left}
            numberClassName="font-display text-4xl font-extrabold leading-none text-sand sm:text-6xl md:text-8xl"
            renderUnit={(value, label) => (
              <div className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.04] py-6 md:py-10">
                {value}
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 md:text-xs">
                  {label}
                </span>
              </div>
            )}
            units={[
              { key: 'days', label: 'Días' },
              { key: 'hours', label: 'Horas' },
              { key: 'minutes', label: 'Minutos' },
              { key: 'seconds', label: 'Segundos' },
            ]}
          />
        </Reveal>
      )}

      <Reveal
        className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
        delay={0.3}
      >
        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-lagoon/40 bg-lagoon/10 px-5 py-3 text-sm font-semibold text-reef">
          <span className="text-lagoon">✓</span>
          Ante escribano público
        </span>
        <GuaranteeBadge />
      </Reveal>
    </section>
  )
}
