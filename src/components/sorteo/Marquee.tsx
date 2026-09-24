import UiMarquee from '@/components/ui/Marquee'

const ITEMS = [
  'Tulum',
  'Caribe mexicano',
  '7 noches',
  '2 personas',
  'Hotel 4★',
  'Primera línea de playa',
  'Desayuno incluido',
]

export default function Marquee() {
  return (
    <UiMarquee className="bg-lagoon text-ocean" items={ITEMS} separatorClassName="text-solaz" />
  )
}
