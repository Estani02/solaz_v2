// Datos del sorteo Tulum. Todo lo que puede cambiar vive acá.

// Hora de Argentina (UTC-3)
export const SORTEO_DATE = new Date('2026-11-13T19:00:00-03:00')

export const DOUBLE_CHANCE_DEADLINE = new Date('2026-10-23T23:59:59-03:00')

export const PLAN_HOURS = [
  { days: 'Lunes a viernes', ranges: ['06:00 – 22:00'] },
  { days: 'Sábados', ranges: ['09:00 – 13:00', '17:00 – 21:00'] },
  { days: 'Feriados', ranges: ['08:00 – 21:00'] },
]

export const GIRA_MUNDIAL_INSTAGRAM = 'https://www.instagram.com/giramundialturismo/'

export const TULUM_SHORT_ID = 'IjBschkhEqI'

export const TULUM_PHOTOS = {
  hero: {
    src: '/images/tulum/tulum-playa-ruinas-hero.webp',
    alt: 'Playa turquesa de Tulum con el Castillo maya sobre el acantilado',
  },
  palmerasCastillo: {
    src: '/images/tulum/tulum-palmeras-castillo.webp',
    alt: 'Palmeras frente a la playa y las ruinas de Tulum',
  },
  playaEscondida: {
    src: '/images/tulum/tulum-playa-escondida.webp',
    alt: 'Playa de arena blanca entre rocas en Tulum',
  },
  palmerasMar: {
    src: '/images/tulum/tulum-palmeras-mar.webp',
    alt: 'Palmeras altas frente al mar Caribe',
  },
  arenaBlanca: {
    src: '/images/tulum/tulum-playa-arena-blanca.webp',
    alt: 'Playa extensa de arena blanca y agua turquesa en Tulum',
  },
  costaTurquesa: {
    src: '/images/tulum/tulum-costa-turquesa.webp',
    alt: 'Costa turquesa de Tulum vista desde lo alto',
  },
}

// Fotos de Wikimedia Commons: las licencias CC BY / BY-SA exigen dar crédito.
export const PHOTO_CREDITS = [
  { author: 'FeldBum', license: 'CC BY-SA 4.0', file: 'Beach_and_Ruins_at_Tulum.jpg' },
  {
    author: 'Erik Cleves Kristensen',
    license: 'CC BY 2.0',
    file: 'Maya_ruins_at_Tulum_-_Palms_and_beach.jpg',
  },
  {
    author: 'Erik Cleves Kristensen',
    license: 'CC BY 2.0',
    file: 'Maya_ruins_at_Tulum_2023_-_beach.jpg',
  },
  {
    author: 'ben_kitchener3',
    license: 'CC BY 3.0',
    file: 'Paradise_views_in_the_Tulum_Ruins_-_panoramio.jpg',
  },
  { author: 'Alfonzo Buscemi', license: 'CC BY 3.0', file: 'Tulum_beaches_-_panoramio.jpg' },
  { author: 'Erik Cleves Kristensen', license: 'CC BY 2.0', file: 'Coast_at_Tulum.jpg' },
]
