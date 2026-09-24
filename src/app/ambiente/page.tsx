import type { Metadata } from 'next'

import AmbienteLanding from '@/components/ambiente/AmbienteLanding'

export const metadata: Metadata = {
  title: 'Compromiso con el ambiente',
  description:
    'Dispensadores de agua, ecobotellas y separación de residuos: así cuidamos tu bienestar y el del planeta en Solaz Club.',
}

export default function AmbientePage() {
  return <AmbienteLanding />
}
