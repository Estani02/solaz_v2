import Image from 'next/image'
import Link from 'next/link'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

import bg_home from '@/assets/img/bg_page_home.jpg'

import SocialMedia from '../SocialMedia'

function HomeMobil() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center px-4 py-[50px] md:hidden">
      <Image fill alt="bg_home" className="-z-50 object-cover brightness-[.35]" src={bg_home} />
      {/* <div className="absolute right-0 top-0 -z-40 h-1/3 w-1/2 bg-primario" /> */}
      <div className="flex flex-col items-center gap-10">
        <div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-[32px] font-semibold capitalize">
              Descubri Tu Mejor Versión
            </h1>
            <div className="h-[2px] w-3/4 bg-red-600" />
          </div>
          <p className="mt-2 text-center text-[#c0c0c0]">
            Unite a la familia <b className="text-red-600">SOLAZ</b>
          </p>
        </div>
        <SocialMedia />
        <div className="flex w-full gap-2 text-center text-xs font-semibold">
          <Link
            className="flex w-full flex-1 items-center justify-center rounded-lg bg-gradient-to-b from-red-600 via-[#472424] to-gray-800 py-2 uppercase"
            href="#video"
          >
            <OndemandVideoIcon />
            Conocenos
          </Link>
          {/* <Link
            className="flex w-full flex-1 items-center justify-center gap-1 rounded-lg py-2 uppercase"
            href="#video"
          >
            <OndemandVideoIcon />
            Ver vídeo
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default HomeMobil
