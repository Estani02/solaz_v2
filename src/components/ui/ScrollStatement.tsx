'use client'
import type { MotionValue } from 'framer-motion'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Word({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.12, 1])

  return (
    <motion.span className="mr-[0.25em] inline-block" style={{ opacity }}>
      {word}
    </motion.span>
  )
}

interface ScrollStatementProps {
  text: string
  className?: string
}

// Texto grande cuyas palabras se "encienden" a medida que se scrollea.
export default function ScrollStatement({ text, className = 'text-white' }: ScrollStatementProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] })
  const words = text.split(' ')

  return (
    <section className="mx-auto max-w-6xl px-5 py-32 md:px-10 md:py-48">
      <p
        ref={ref}
        className={`font-display text-[clamp(2.25rem,6vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight ${className}`}
      >
        {words.map((word, i) => (
          <Word
            // eslint-disable-next-line react/no-array-index-key -- las palabras pueden repetirse
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
            word={word}
          />
        ))}
      </p>
    </section>
  )
}
