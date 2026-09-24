import MancuernaIcono from '@/assets/svg/MancuernaIcon'
import GraficoIcon from '@/assets/svg/GraficoIcon'
import NutrIcon from '@/assets/svg/NutrIcon'
import QrIcon from '@/assets/svg/QrIcono'

export const ItemApp = [
  {
    icon: <MancuernaIcono className="h-8 w-8" />,
    title: 'Planes de entrenamiento personalizados',
    description:
      'Cada ejercicio con su descripción, series, repeticiones, pausas y un video explicativo con los equipos de Solaz.',
  },
  {
    icon: <GraficoIcon className="h-8 w-8" />,
    title: 'Seguimiento de tu progreso',
    description:
      'Registrá peso, agua, sueño, entrenamiento y actividad física, y seguí tu evolución con gráficos precisos.',
  },
  {
    icon: <NutrIcon className="h-8 w-8" />,
    title: 'Planes de alimentación personalizados',
    description:
      'Nuestro licenciado en nutrición diseña un plan según tus objetivos, acompañado de recetas deliciosas.',
  },
  {
    icon: <QrIcon className="h-8 w-8" />,
    title: 'Accedé fácil y rápido',
    description:
      'Una app propia, pensada para que tengas una experiencia simple y autogestionable desde tu celular.',
  },
]
