import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SOLAZ CLUB',
  description:
    'Bienvenido a Solaz, tu destino para un estilo de vida saludable y activo. Nuestro gimnasio de alta calidad ofrece una variedad de instalaciones y clases diseñadas para ayudarte a alcanzar tus objetivos de acondicionamiento físico. Únete a nuestra comunidad comprometida y experimenta entrenamientos efectivos en un ambiente acogedor y moderno.',
  keywords:
    'gimnasio, acondicionamiento físico, salud, bienestar, entrenamiento, clases, comunidad, solaz',
  authors: [{ name: 'Solaz gym', url: 'https://solaz-club.vercel.app/' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Solaz club',
    description:
      'Descubre Solaz, un gimnasio de alta calidad dedicado a tu salud y bienestar. Ofrecemos instalaciones modernas, clases variadas y una comunidad comprometida. Únete a nosotros para alcanzar tus objetivos de acondicionamiento físico.',
    images: [
      {
        url: 'https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/373a94a3-8ed8-4014-8c2b-269a86e42cc1/design-previews/0988f3d9-3927-4369-bf65-c75a1a2b6c36/1691524481855-thumbnail.jpeg',
      },
    ],
    url: 'https://solaz-club.vercel.app/',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
