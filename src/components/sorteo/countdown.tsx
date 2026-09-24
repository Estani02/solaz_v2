'use client'
import type { ReactNode } from 'react'

import NumberFlow, { NumberFlowGroup } from '@number-flow/react'
import { Fragment, useEffect, useState } from 'react'

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

const getTimeLeft = (targetMs: number): TimeLeft => {
  // ceil: muestra 00:00:00:01 durante el último segundo y recién al llegar a la hora marca "done"
  const total = Math.max(Math.ceil((targetMs - Date.now()) / 1000), 0)

  return {
    days: Math.floor(total / 86_400),
    hours: Math.floor(total / 3_600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
    done: total === 0,
  }
}

// Devuelve null hasta montar en el cliente para evitar diferencias de hidratación.
export function useCountdown(target: Date): TimeLeft | null {
  const targetMs = target.getTime()
  const [left, setLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined

    const tick = () => {
      const next = getTimeLeft(targetMs)

      setLeft(next)
      if (next.done) return
      // Se re-agenda justo en el próximo cambio de segundo: sin drift ni saltos de 2 s.
      const msToNextSecond = (targetMs - Date.now()) % 1000 || 1000

      timeout = setTimeout(tick, msToNextSecond + 5)
    }

    // Los navegadores frenan los timers en pestañas de fondo: al volver, se recalcula ya.
    const handleVisibility = () => {
      if (document.visibilityState !== 'visible') return
      clearTimeout(timeout)
      tick()
    }

    tick()
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [targetMs])

  return left
}

// Máximo del dígito de las decenas, para que 00 → 59 ruede como un reloj.
const TENS_MAX = { days: undefined, hours: 2, minutes: 5, seconds: 5 } as const

export type CountdownUnit = keyof typeof TENS_MAX

interface CountdownProps {
  left: TimeLeft | null
  units: { key: CountdownUnit; label: string }[]
  renderUnit: (value: ReactNode, label: string) => ReactNode
  numberClassName?: string
}

export function Countdown({ left, units, renderUnit, numberClassName }: CountdownProps) {
  return (
    <NumberFlowGroup>
      {units.map(({ key, label }) => {
        const tensMax = TENS_MAX[key]

        return (
          <Fragment key={key}>
            {renderUnit(
              <NumberFlow
                aria-hidden={left === null}
                // Oculto hasta calcular el tiempo real: evita mostrar 00 del render del servidor
                className={`transition-opacity duration-500 ${
                  left === null ? 'opacity-0' : 'opacity-100'
                } ${numberClassName ?? ''}`}
                digits={tensMax === undefined ? undefined : { 1: { max: tensMax } }}
                format={{ minimumIntegerDigits: 2 }}
                locales="es-AR"
                trend={-1}
                value={left?.[key] ?? 0}
              />,
              label,
            )}
          </Fragment>
        )
      })}
    </NumberFlowGroup>
  )
}
