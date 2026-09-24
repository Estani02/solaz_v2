import type { Metadata } from 'next'

import AppLanding from '@/components/app/AppLanding'

export const metadata: Metadata = {
  title: 'App Solaz',
  description:
    'Descargá gratis la app de Solaz Club: planes de entrenamiento y alimentación personalizados y seguimiento de tu progreso.',
}

export default function AppPage() {
  return <AppLanding />
}
