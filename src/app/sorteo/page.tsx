import type { Metadata } from 'next'

import { Bricolage_Grotesque, Instrument_Serif } from 'next/font/google'

import SorteoLanding from '@/components/sorteo/SorteoLanding'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sorteo Tulum | SOLAZ CLUB',
  description:
    'Con la compra o renovación de tu plan semestral en Solaz participás del sorteo de un viaje a las playas de Tulum para 2 personas, de la mano de Gira Mundial.',
  openGraph: {
    title: 'Solaz te lleva al Caribe mexicano',
    description:
      'Viaje a Tulum para 2 personas: aéreos, traslado y 7 noches en hotel 4★ frente al mar. Sorteo el 13 de noviembre.',
    images: [{ url: 'https://solaz-club.vercel.app/images/tulum/tulum-playa-ruinas-hero.webp' }],
    type: 'website',
  },
}

export default function SorteoPage() {
  return (
    <div className={`${display.variable} ${serif.variable}`}>
      <SorteoLanding />
    </div>
  )
}
