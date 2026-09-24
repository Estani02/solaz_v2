import HomeHero from '@/components/home/HomeHero'
import WhySolaz from '@/components/home/WhySolaz'
import SorteoBanner from '@/components/home/SorteoBanner'
import Testimonials from '@/components/home/Testimonials'
import Location from '@/components/home/Location'
import Marquee from '@/components/ui/Marquee'

const MARQUEE = [
  'Pase libre',
  'Life Fitness',
  'Aire acondicionado',
  'Hidratación gratuita',
  'Estacionamiento exclusivo',
  'Profesionales calificados',
]

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <HomeHero />
      <Marquee items={MARQUEE} />
      <WhySolaz />
      <SorteoBanner />
      <Testimonials />
      <Location />
    </main>
  )
}
