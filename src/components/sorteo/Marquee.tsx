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
  const row = ITEMS.map((item) => (
    <span key={item} className="flex items-center gap-10 pr-10">
      <span className="whitespace-nowrap">{item}</span>
      <span className="text-solaz">✦</span>
    </span>
  ))

  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-white/10 bg-lagoon py-5 text-ocean">
      <div className="flex w-max animate-marquee font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl">
        <div className="flex">{row}</div>
        <div aria-hidden className="flex">
          {row}
        </div>
      </div>
    </div>
  )
}
