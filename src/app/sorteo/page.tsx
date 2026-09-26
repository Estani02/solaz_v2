import type { Metadata } from 'next'

import { SITE } from '@/config/site'
import SorteoLanding from '@/components/sorteo/SorteoLanding'

export const metadata: Metadata = {
  title: 'Sorteo Tulum',
  description:
    'Con la compra o renovación de tu plan semestral en Solaz participás del sorteo de un viaje a las playas de Tulum para 2 personas, de la mano de Gira Mundial.',
  openGraph: {
    title: 'Solaz te lleva al Caribe mexicano',
    description:
      'Viaje a Tulum para 2 personas: aéreos, traslado y 7 noches en hotel 4★ frente al mar. Sorteo el 13 de noviembre.',
    // La imagen sale de opengraph-image.jpg (convención de Next): JPEG y no WebP,
    // porque WhatsApp no arma la tarjeta con WebP y cae al favicon.
    url: '/sorteo',
    siteName: SITE.name,
    locale: 'es_AR',
    type: 'website',
  },
}

export default function SorteoPage() {
  return <SorteoLanding />
}
