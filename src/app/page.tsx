import Link from 'next/link'
import Image from 'next/image'
import Location from '@mui/icons-material/LocationOn'
import dynamic from 'next/dynamic'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

import bg_home from '@/assets/img/bg_page_home.jpg'
import HomeMobil from '@/components/mobile/HomeMobil'
import CarouselReseña from '@/components/mobile/CarouselReseña'
import { Reseñas } from '@/assets/Reseñas'
import Review from '@/components/Review'

export default function Home() {
  const MapRender = dynamic(
    () => import('@/components/Map'), // replace '@components/map' with your component's location
    { ssr: false }, // This line is important. It's what prevents server-side render
  )

  return (
    <main className="flex flex-col text-white">
      <div className="relative hidden h-screen md:flex">
        <Image fill alt="bg_home" className="-z-50 object-cover brightness-50" src={bg_home} />
        <div className="flex-1" />
        <div className="flex h-[90vh] w-[45%] flex-col items-center justify-center bg-primario px-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-4xl font-bold">
              Empeza Tu Viaje de Fitness con
              <br /> <b className="text-red-600">SOLAZ</b>
            </h1>
            <p className="text-center text-sm text-[#c0c0c0]">
              En el Solaz Club, te ayudamos a alcanzar tus metas de fitness y bienestar. ¡Sumate y
              transformá tu vida con un estilo de vida activo y saludable!
            </p>
          </div>
          <Link
            className="mt-4 rounded-lg bg-gradient-to-b from-red-600 via-[#472424] to-gray-800 px-7 py-2 text-xs font-bold uppercase transition-all duration-300 hover:scale-110 hover:text-[#c0c0c0] md:text-base"
            href="#video"
          >
            <OndemandVideoIcon />
            &nbsp;Conocenos
          </Link>
        </div>
      </div>
      <HomeMobil />
      <div className="my-[50px] flex flex-col justify-center gap-[50px] px-5 md:px-10">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-red-600">Somos lo que buscas</p>
          <h2
            className="w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-2xl font-bold md:text-4xl"
            id="video"
          >
            ¿Por qué Solaz?
          </h2>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <p className="h-full flex-1 text-start text-sm md:text-base">
              Solaz es una amalgama perfecta de innovación tecnológica, profesionalismo y calidez
              humana comprometidos en generar cambios integrales y sostenibles en tu cuerpo y salud.
              <br />
              <br />
              Disponemos de equipamiento de calidad mundial (Life Fitness), un ambiente con aire
              acondicionado, amplias áreas de duchas y vestuarios, lockers, hidratación gratuita,
              estacionamiento exclusivo y un equipo de profesionales altamente calificados, que
              incluye licenciados en educación física, licenciados en nutrición y fisioterapeutas.
              <br />
              <br />
              <span className="hidden md:inline-flex">
                Todo esto se combina para brindarte la mejor experiencia durante tu entrenamiento.
                Disfruta de nuestro pase libre, sin restricciones horarias ni necesidad de turnos.
                <br />
                <br />
              </span>
              <span className="font-bold">DISFRUTA LA LIBERTAD DE ENTRENAR EN SOLAZ</span>
            </p>
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="container h-[300px] md:h-auto md:w-full md:flex-1"
              frameBorder="0"
              src="https://www.youtube.com/embed/NGbLFb80bqs"
              title="YouTube video player"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-sm font-semibold text-red-600">Somos disitintos</p>
            <h4 className="w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-2xl font-bold md:text-4xl">
              Testimonios
            </h4>
          </div>
          <CarouselReseña itemMap={Reseñas} />
          <Review />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-2 md:w-full md:px-10">
        <div className="flex w-full items-center justify-between ">
          <span className="flex flex-row items-center text-left font-normal">
            <Location className="h-5 w-5 md:h-8 md:w-8" />
            <p>UBICACIÓN</p>
          </span>

          <a
            className="flex w-fit flex-row items-center gap-1 border-b-[1.5px] border-blue-500 text-left text-sm text-blue-500 transition-colors duration-150 md:hover:border-sky-500 md:hover:text-sky-500"
            href="https://www.google.com/maps/place/Solaz+Club/@-31.2695372,-64.3020727,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d327dc338a5:0x57109a11506d73f8!8m2!3d-31.2695372!4d-64.3020727!16s%2Fg%2F11f__7c4fz?entry=ttu"
            rel="noopener"
            target="_blank"
          >
            <OpenInNewIcon className="h-5 w-5 md:h-6 md:w-6" />
            Cómo llegar
          </a>
        </div>
        <MapRender />
      </div>
      <div className="relative flex h-[250px] max-h-[250px] flex-col items-center justify-center">
        <Image
          fill
          alt="bg_home"
          className="-z-50 brightness-[0.3] sm:object-cover"
          src={bg_home}
        />
        <p className="text-sm font-bold uppercase text-red-600">comuincate hoy</p>
        <p className="text-3xl font-bold md:text-4xl">+ (54) 351 - 2012426</p>
        <p className="text-center text-xs text-[#c0c0c0] md:w-3/5 md:text-sm">
          Siempre estamos a tu disposición para responder a tus preguntas y ayudarte en tu camino
          hacia un estilo de vida saludable. No dudes en llamarnos si tenés alguna pregunta o
          necesitás más información.
        </p>
        <Link
          className="mt-4 rounded-lg bg-gradient-to-b from-red-600 via-[#472424] to-gray-800 px-7 py-2 text-xs font-bold uppercase transition-all duration-300 hover:scale-110 hover:text-[#c0c0c0] md:text-base"
          href="/contacto"
        >
          Más info
        </Link>
      </div>
    </main>
  )
}
