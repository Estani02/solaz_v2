'use client'
import type { ChangeEvent, FocusEvent } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

// Clases completas por acento (Tailwind no detecta clases armadas dinámicamente).
const ACCENTS = {
  lagoon: {
    text: 'text-sand',
    focus: 'border-white/15 focus:border-lagoon',
    label: 'peer-focus:text-lagoon',
  },
  solaz: {
    text: 'text-white',
    focus: 'border-white/15 focus:border-white/60',
    label: 'peer-focus:text-white',
  },
} as const

type FieldElement = HTMLInputElement | HTMLTextAreaElement

interface FormFieldProps {
  name: string
  label: string
  value: string
  error?: string
  type?: string
  inputMode?: 'email' | 'tel' | 'text'
  autoComplete?: string
  multiline?: boolean
  accent?: keyof typeof ACCENTS
  onChange: (e: ChangeEvent<FieldElement>) => void
  onBlur: (e: FocusEvent<FieldElement>) => void
}

// Campo con label flotante: el placeholder transparente activa peer-placeholder-shown.
export default function FormField({
  name,
  label,
  error,
  type = 'text',
  multiline = false,
  accent = 'solaz',
  ...props
}: FormFieldProps) {
  const colors = ACCENTS[accent]
  const className = `peer w-full rounded-2xl border bg-white/[0.04] px-5 pb-3 pt-7 text-lg outline-none transition-colors duration-300 placeholder:text-transparent focus:bg-white/[0.07] ${
    colors.text
  } ${error ? 'border-solaz' : colors.focus}`

  return (
    <label className="relative block">
      {multiline ? (
        <textarea
          className={`${className} min-h-[9rem] resize-y`}
          id={name}
          name={name}
          placeholder={label}
          rows={4}
          {...props}
        />
      ) : (
        <input
          className={className}
          id={name}
          name={name}
          placeholder={label}
          type={type}
          {...props}
        />
      )}
      <span
        className={`pointer-events-none absolute left-5 top-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em] ${colors.label}`}
      >
        {label}
      </span>
      <AnimatePresence>
        {error ? (
          <motion.span
            animate={{ opacity: 1, height: 'auto' }}
            className="block overflow-hidden pl-2 pt-1 text-sm text-solaz"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            {error}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </label>
  )
}
