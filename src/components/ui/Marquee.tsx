interface MarqueeProps {
  items: string[]
  className?: string
  separatorClassName?: string
}

// Cinta infinita: la lista se duplica y se desplaza -50% en loop (animate-marquee).
export default function Marquee({
  items,
  className = 'bg-solaz text-white',
  separatorClassName = 'text-ink',
}: MarqueeProps) {
  const row = items.map((item) => (
    <span key={item} className="flex items-center gap-10 pr-10">
      <span className="whitespace-nowrap">{item}</span>
      <span className={separatorClassName}>✦</span>
    </span>
  ))

  return (
    <div
      className={`relative -rotate-1 overflow-hidden border-y border-white/10 py-5 ${className}`}
    >
      <div className="flex w-max animate-marquee font-display text-2xl font-extrabold uppercase tracking-tight md:text-4xl">
        <div className="flex">{row}</div>
        <div aria-hidden className="flex">
          {row}
        </div>
      </div>
    </div>
  )
}
