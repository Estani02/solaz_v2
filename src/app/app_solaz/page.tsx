/* eslint-disable react/no-array-index-key */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import bg from '@/assets/img/bg_app.jpeg'
import phones from '@/assets/img/phones.png'
import googlePlay from '@/assets/img/google_play.png'
import appStore from '@/assets/img/app_store.png'
import { ItemApp } from '@/assets/ItemApp'

function AppPage() {
  return (
    <div className="text-white">
      <div className="relative flex h-[75vh] items-center justify-center px-4">
        <Image
          alt="bg_home"
          className="absolute -z-50 h-full flex-1 object-cover brightness-50 md:relative"
          src={bg}
        />
        <div className="flex h-full w-full flex-1 items-center justify-between px-4">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-sm font-semibold capitalize text-red-600">APP SOLAZ</p>
              <h2 className="w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-3xl font-bold uppercase">
                ENTRENA Y MIDE TU PROGRESO
              </h2>
            </div>
            <p className="text-sm text-[#c0c0c0]">
              Esta app propia está diseñada para que el usuaria tenga una experiencia amigable y
              auto gestionable <br />
              <br />
              Descargá la app de forma gratuita desde Google Play o App Store, y comenzá a disfrutar
              de sus beneficios.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.arceus.clubsolaz"
                rel="noopener"
                target="_blank"
              >
                <Image alt="Google Play" className="w-[130px] md:w-[200px]" src={googlePlay} />
              </Link>
              <Link
                href="https://apps.apple.com/app/solaz-club/id6449626352"
                rel="noopener"
                target="_blank"
              >
                <Image alt="App Store" className="w-[130px] md:w-[200px]" src={appStore} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[50px] flex flex-col-reverse gap-4 px-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold capitalize text-red-600">APP SOLAZ</p>
            <h2 className=" w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-3xl font-bold uppercase">
              APP <span className="logo-solaz text-center text-4xl text-red-500">solaz</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {ItemApp.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center gap-2 text-center"
              >
                {item.icon}
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-xs font-semibold text-[#c0c0c0]">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative flex w-full flex-1 flex-col items-center justify-center">
          <div className="md:hidden">
            <p className="text-xs font-semibold capitalize text-red-600">
              APROVECHA LOS BENEFICIOS
            </p>
            <h2 className="w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-3xl font-bold uppercase">
              APP <span className="logo-solaz text-center text-4xl text-red-500">solaz</span>
            </h2>
          </div>
          <Image alt="bg_home" className="relative -z-50 h-[450px] w-[300px]" src={phones} />
        </div>
      </div>
    </div>
  )
}

export default AppPage
