'use client'
import { Eyebrow, Reveal } from './motion'
import { Countdown, useCountdown } from './countdown'
import { SORTEO_DATE } from './data'

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

      <Reveal className="mt-10 flex flex-wrap justify-center gap-3" delay={0.3}>
        {['Ante escribano público', 'El premio sale sí o sí entre los participantes'].map(
          (text) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 rounded-full border border-lagoon/40 bg-lagoon/10 px-5 py-2.5 text-sm font-semibold text-reef"
            >
              <span className="text-lagoon">✓</span>
              {text}
            </span>
          ),
        )}
      </Reveal>
    </section>
  )
}
