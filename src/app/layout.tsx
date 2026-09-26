import './globals.css'
import type { Metadata } from 'next'

import { Bricolage_Grotesque, Inter, Instrument_Serif } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Solaz Club | Gimnasio en Mendiolaza',
    template: '%s | Solaz Club',
  },
  description:
    'Solaz Club es un gimnasio en Mendiolaza, Córdoba, con equipamiento Life Fitness, pase libre sin turnos, ambiente climatizado y un equipo de profesionales en educación física, nutrición y fisioterapia.',
  keywords:
    'gimnasio, acondicionamiento físico, salud, bienestar, entrenamiento, clases, comunidad, solaz',
  authors: [{ name: 'Solaz gym', url: SITE.url }],
  robots: 'index, follow',
  openGraph: {
    title: 'Solaz Club | Gimnasio en Mendiolaza',
    description:
      'Equipamiento Life Fitness, pase libre sin turnos y un equipo de profesionales que te acompaña. Disfrutá la libertad de entrenar en Solaz.',
    images: [
      {
        url: 'https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/373a94a3-8ed8-4014-8c2b-269a86e42cc1/design-previews/0988f3d9-3927-4369-bf65-c75a1a2b6c36/1691524481855-thumbnail.jpeg',
      },
    ],
    url: '/',
    siteName: SITE.name,
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${display.variable} ${serif.variable}`} lang="es">
      <body className={`${inter.className} bg-ink text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
