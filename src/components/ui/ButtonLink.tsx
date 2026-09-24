import type { ReactNode } from 'react'

import Link from 'next/link'

const VARIANTS = {
  primary:
    'bg-solaz text-white shadow-[0_12px_40px_-12px_rgba(225,40,38,0.85)] hover:scale-105 hover:shadow-[0_16px_50px_-12px_rgba(225,40,38,1)]',
  ghost: 'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
  light: 'bg-white text-ink hover:scale-105',
} as const

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  arrow?: boolean
  external?: boolean
  className?: string
}

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  arrow = false,
  external = false,
  className = '',
}: ButtonLinkProps) {
  const classes = `group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow ? (
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      ) : null}
    </>
  )

  if (external) {
    return (
      <a className={classes} href={href} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    )
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  )
}
