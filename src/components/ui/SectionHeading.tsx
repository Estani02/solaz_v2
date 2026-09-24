import type { ReactNode } from 'react'

import { Eyebrow, Reveal } from './motion'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

// Encabezado estándar: eyebrow + título display (con acento en serif itálica) + bajada opcional.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal
      className={`flex flex-col gap-5 ${centered ? 'items-center text-center' : ''} ${className}`}
    >
      <Eyebrow tone="solaz">{eyebrow}</Eyebrow>
      <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-white/60 md:text-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic text-solaz">{children}</span>
}
