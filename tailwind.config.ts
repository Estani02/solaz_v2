import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primario: '#1F2128',
        secundario: '#3B3E48',
        ink: '#0B0C0F',
        // Paleta landing sorteo Tulum
        ocean: '#031A20',
        lagoon: '#2EB5C0',
        reef: '#7FE3DD',
        sand: '#F5EBDD',
        solaz: '#E12826',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      // Tailwind 3.3 no trae 15/85: sin esto, clases como border-white/15 no se generan
      opacity: {
        15: '0.15',
        85: '0.85',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
