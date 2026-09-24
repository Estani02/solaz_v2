'use client'
import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 40 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({
  children,
  tone = 'lagoon',
}: {
  children: ReactNode
  tone?: 'lagoon' | 'solaz'
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] ${
        tone === 'lagoon' ? 'text-lagoon' : 'text-solaz'
      }`}
    >
      <span className={`h-px w-8 ${tone === 'lagoon' ? 'bg-lagoon' : 'bg-solaz'}`} />
      {children}
    </span>
  )
}
