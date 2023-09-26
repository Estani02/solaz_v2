/* eslint-disable react/no-array-index-key */
import React from 'react'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'

import SocialMedia from './SocialMedia'

export const IteamFooter = [
  {
    icon: <LocationOnIcon className="h-7" />,
    text: 'Av. Malvinas 812, Mendiolaza - Córdoba',
  },
  {
    icon: <LocalPhoneIcon className="h-7" />,
    text: '+5493512012426',
    type: 'phone',
  },
  {
    icon: <EmailIcon className="h-7" />,
    text: 'csolazm@gmail.com',
    type: 'email',
  },
]

function Footer() {
  return (
    <footer className="relative flex h-full w-full flex-col justify-between gap-4 bg-secundario p-5 py-10 text-white md:flex-row md:px-[3rem] xl:px-[6rem]">
      <div className="flex w-full flex-col items-center border-b border-solid border-white md:w-fit md:border-none">
        <span className="logo-solaz mb-2 text-3xl font-black lg:text-4xl">SOLAZ</span>
        <div className="flex w-full justify-center md:hidden">
          <SocialMedia exclude={1} minimized="footer" />
        </div>
        <p className="hidden text-justify md:block md:w-48 md:text-sm lg:w-96 lg:text-center">
          Somos un gimnasio con espíritu de club, donde lo social y el entrenamiento placentero
          sobresale
        </p>
      </div>
      <div className="m-auto flex w-fit flex-col gap-6 md:m-0 md:flex-row">
        <div className="flex flex-col gap-2 text-xs md:text-sm">
          <h6 className="font-arial text-sm font-bold md:text-base lg:text-lg">CONTACTO</h6>
          <ol className="flex flex-col gap-2">
            {IteamFooter.map((iteam, index) => (
              <li key={index} className="flex items-center gap-2 font-semibold">
                {iteam.icon}
                {iteam.type ? (
                  <a
                    href={
                      iteam.type === 'email' ? 'mailto:csolazm@gmail.com' : 'tel:+5493512012426'
                    }
                  >
                    {iteam.text}
                  </a>
                ) : (
                  <p>{iteam.text}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-2 text-xs md:text-sm">
          <h6 className="font-arial text-sm font-bold md:text-base lg:text-lg">
            HORARIO DE ATENCIÓN
          </h6>
          <div className="flex gap-2">
            <QueryBuilderIcon className="h-6" />
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="flex flex-col gap-4 text-left">
                <p>Lun - Vie:</p>
                <p>Sab - Feriados:</p>
              </div>
              <div className="flex flex-col gap-4 whitespace-nowrap font-bold">
                <p>7:00 - 22:00</p>
                <p>
                  9:00 - 13:00
                  <br />
                  <span className="whitespace-nowrap">17:00 - 21:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-fit flex-col gap-2 md:flex">
          <h6 className="font-arial text-sm font-bold md:text-base lg:text-lg">REDES SOCIALES</h6>
          <div className="hidden w-full justify-center md:flex">
            <SocialMedia exclude={1} minimized="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
