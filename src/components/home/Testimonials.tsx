'use client'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useEffect, useRef } from 'react'

import { Reseñas } from '@/assets/Reseñas'
import SectionHeading, { Accent } from '@/components/ui/SectionHeading'

type Review = (typeof Reseñas)[number]

const SPEED = 35 // px por segundo del avance automático
const RESUME_DELAY = 2500 // ms sin interacción antes de retomar

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full w-[18rem] flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:w-[22rem] md:w-[24rem]">
      <div className="flex flex-col gap-4">
        <div aria-label={`${review.start} de 5 estrellas`} className="flex text-solaz" role="img">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className={i < review.start ? '' : 'opacity-20'} fontSize="small" />
          ))}
        </div>
        <blockquote className="text-lg leading-snug text-white/85">“{review.text}”</blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <Image
          alt=""
          className="h-10 w-10 rounded-full"
          draggable={false}
          height={40}
          src={review.avatar}
          width={40}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{review.name}</span>
          <span className="text-xs text-white/50">{review.detail} · Google</span>
        </div>
      </figcaption>
    </figure>
  )
}

/**
 * Carrusel scrolleable con loop infinito: la lista se renderiza dos veces y, al cruzar el
 * final de la primera copia, se corre el scroll exactamente un "período" (idéntico a la vista).
 * Avanza solo y se pausa con hover, arrastre, swipe, rueda o flechas.
 */
function useInfiniteCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pauseUntil = useRef(0)

  useEffect(() => {
    const el = scrollerRef.current

    if (!el) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const period = () => el.scrollWidth / 2
    let pos = period()
    let last = performance.now()
    let raf = 0
    let hovering = false
    let drag: { startX: number; startScroll: number } | null = null

    el.scrollLeft = pos

    const pause = () => {
      pauseUntil.current = performance.now() + RESUME_DELAY
    }

    // Mantiene el scroll dentro de [1, período]: corre una copia entera sin salto visual
    const wrap = () => {
      const p = period()
      let delta = 0

      if (el.scrollLeft > p + 1) delta = -p
      else if (el.scrollLeft < 1) delta = p
      if (delta === 0) return
      el.scrollLeft += delta
      pos += delta
      if (drag) drag.startScroll += delta
    }

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64)

      last = now
      const active =
        !reducedMotion &&
        !hovering &&
        !drag &&
        now > pauseUntil.current &&
        document.visibilityState === 'visible'

      if (active) {
        // Si el usuario lo movió, se retoma desde donde lo dejó
        if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft
        pos += (SPEED * dt) / 1000
        el.scrollLeft = pos
      } else {
        pos = el.scrollLeft
      }
      raf = requestAnimationFrame(tick)
    }

    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') hovering = true
    }
    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        hovering = false
        pause()
      }
    }
    // Arrastre con mouse (en touch el scroll nativo ya funciona)
    const onPointerDown = (e: PointerEvent) => {
      pause()
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      drag = { startX: e.clientX, startScroll: el.scrollLeft }
      el.setPointerCapture(e.pointerId)
      el.dataset.dragging = 'true'
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!drag) return
      el.scrollLeft = drag.startScroll - (e.clientX - drag.startX)
    }
    const onPointerUp = () => {
      if (!drag) return
      drag = null
      delete el.dataset.dragging
      pause()
    }

    el.addEventListener('scroll', wrap, { passive: true })
    el.addEventListener('wheel', pause, { passive: true })
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('keydown', pause)
    el.addEventListener('pointerenter', onPointerEnter)
    el.addEventListener('pointerleave', onPointerLeave)
    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('scroll', wrap)
      el.removeEventListener('wheel', pause)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('keydown', pause)
      el.removeEventListener('pointerenter', onPointerEnter)
      el.removeEventListener('pointerleave', onPointerLeave)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
    }
  }, [])

  const step = (direction: 1 | -1) => {
    const el = scrollerRef.current
    const card = el?.firstElementChild as HTMLElement | null

    if (!el || !card) return
    pauseUntil.current = performance.now() + RESUME_DELAY
    el.scrollBy({ left: direction * card.offsetWidth, behavior: 'smooth' })
  }

  return { scrollerRef, step }
}

function ArrowButton({ direction, onClick }: { direction: 1 | -1; onClick: () => void }) {
  return (
    <button
      aria-label={direction === 1 ? 'Siguiente testimonio' : 'Testimonio anterior'}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-solaz hover:bg-solaz hover:text-white"
      type="button"
      onClick={onClick}
    >
      {direction === 1 ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </button>
  )
}

export default function Testimonials() {
  const { scrollerRef, step } = useInfiniteCarousel()

  return (
    <section className="overflow-hidden py-24 md:py-36">
      <div className="mx-auto mb-14 flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:mb-20 md:flex-row md:items-end md:px-10">
        <SectionHeading
          eyebrow="Testimonios"
          title={
            <>
              Lo que dicen <Accent>nuestros socios</Accent>
            </>
          }
        />
        <div className="flex gap-3">
          <ArrowButton
            direction={-1}
            onClick={() => {
              step(-1)
            }}
          />
          <ArrowButton
            direction={1}
            onClick={() => {
              step(1)
            }}
          />
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent md:w-32" />
        <div
          ref={scrollerRef}
          aria-label="Testimonios de socios"
          className="flex cursor-grab select-none items-stretch overflow-x-auto overscroll-x-contain [scrollbar-width:none] data-[dragging=true]:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          role="region"
          // Enfocable para poder scrollearlo con las flechas del teclado
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          {[...Reseñas, ...Reseñas].map((review, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key -- la lista se duplica para el loop
              key={`${review.name}-${i}`}
              aria-hidden={i >= Reseñas.length}
              className="flex shrink-0 pr-5"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
