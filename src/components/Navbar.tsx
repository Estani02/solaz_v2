'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

import { NAV_ITEMS, SITE, SORTEO_NAV } from '@/config/site'
import { EASE_OUT } from '@/components/ui/motion'
import SocialLinks from '@/components/ui/SocialLinks'

function SorteoPill({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      className="inline-flex w-fit items-center gap-2 rounded-full border border-lagoon/50 bg-lagoon/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-reef transition-colors duration-300 hover:bg-lagoon hover:text-ocean"
      href={SORTEO_NAV.href}
      onClick={onClick}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lagoon opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lagoon" />
      </span>
      {SORTEO_NAV.text}
    </Link>
  )
}

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      aria-expanded={open}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md lg:hidden"
      type="button"
      onClick={onClick}
    >
      <motion.span
        animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        className="h-0.5 w-5 rounded-full bg-white"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        className="h-0.5 w-5 rounded-full bg-white"
      />
    </button>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  // Se esconde al bajar y reaparece al subir
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0

    setScrolled(y > 24)
    setHidden(y > prev && y > 320)
  })

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-110%' : '0%' }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open
            ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-gradient-to-b from-black/50 to-transparent'
        }`}
        transition={{ duration: 0.4, ease: EASE_OUT }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-10">
          <Link aria-label="Solaz Club - Inicio" className="relative z-10 shrink-0" href="/">
            <Image
              priority
              alt="Solaz Club"
              className="h-9 w-auto md:h-11"
              height={235}
              src="/images/logos/solaz-club-logo-blanco.svg"
              width={585}
            />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  className={`relative block rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive(item.href) ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                  href={item.href}
                >
                  {isActive(item.href) ? (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-solaz"
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <SorteoPill />
          </div>
          <MenuToggle
            open={open}
            onClick={() => {
              setOpen((v) => !v)
            }}
          />
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink px-5 pb-10 pt-28 md:px-10 lg:hidden"
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            {/* El glow se recorta en su propio contenedor: si desborda el panel, genera scroll horizontal */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-solaz/30 blur-[120px]" />
            </div>
            <ul className="relative flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: EASE_OUT }}
                >
                  <Link
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-4xl font-extrabold tracking-tight ${
                      isActive(item.href) ? 'text-solaz' : 'text-white'
                    }`}
                    href={item.href}
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    {item.text}
                    <span className="text-2xl text-white/30">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              animate={{ opacity: 1 }}
              className="relative mt-10 flex flex-col gap-6"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <SorteoPill
                onClick={() => {
                  setOpen(false)
                }}
              />
              <div className="flex flex-col gap-1 text-sm text-white/60">
                <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <span>{SITE.address}</span>
              </div>
              <SocialLinks />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
