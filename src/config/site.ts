// Datos del club en un solo lugar: navbar, footer, contacto y mapa los leen de acá.

export const SITE = {
  name: 'Solaz Club',
  url: 'https://www.solaz.com.ar',
  address: 'Av. Malvinas 812, Mendiolaza, Córdoba',
  coords: [-31.269694381049128, -64.30207046192292] as [number, number],
  mapsUrl:
    'https://www.google.com/maps/place/Solaz+Club/@-31.2695372,-64.3020727,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d327dc338a5:0x57109a11506d73f8!8m2!3d-31.2695372!4d-64.3020727!16s%2Fg%2F11f__7c4fz?entry=ttu',
  phone: '+5493512012426',
  phoneDisplay: '+54 351 201-2426',
  email: 'csolazm@gmail.com',
  whatsapp: 'https://wa.me/5493512012426',
  instagram: 'https://www.instagram.com/solaz.club/',
  facebook: 'https://www.facebook.com/solazclubmendiolaza/',
  tiktok: 'https://www.tiktok.com/@solaz.club',
  videoUrl: 'https://www.youtube-nocookie.com/embed/G3PvTkYi1WI',
  playStore: 'https://play.google.com/store/apps/details?id=com.arceus.clubsolaz',
  appStore: 'https://apps.apple.com/app/solaz-club/id6449626352',
}

export const HOURS = [
  { days: 'Lunes a viernes', ranges: ['7:00 – 22:00'] },
  { days: 'Sábados y feriados', ranges: ['9:00 – 13:00', '17:00 – 21:00'] },
]

export const PAYMENT_METHODS = ['Efectivo', 'Transferencia', 'Tarjetas de crédito y débito']

export const NAV_ITEMS = [
  { text: 'Inicio', href: '/' },
  { text: 'App Solaz', href: '/app_solaz' },
  { text: 'Ambiente', href: '/ambiente' },
  { text: 'Contacto', href: '/contacto' },
]

export const SORTEO_NAV = { text: 'Sorteo Tulum', href: '/sorteo' }
