import type { Metadata } from 'next'

import ContactoLanding from '@/components/contacto/ContactoLanding'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escribinos por WhatsApp, mail o dejá tu consulta. Conocé los horarios y medios de pago de Solaz Club en Mendiolaza.',
}

export default function ContactoPage() {
  return <ContactoLanding />
}
