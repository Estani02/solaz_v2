import Image from 'next/image'
import React from 'react'

import botella from '@/assets/img/botella.webp'
import bg from '@/assets/img/bg_ambiente.jpg'

function AmbientePage() {
  return (
    <div className="flex flex-col text-white">
      <div className="relative flex h-[75vh] items-center px-10">
        <Image
          fill
          alt="medio ambienet solaz"
          className="-z-50 bg-fixed bg-center object-cover brightness-50"
          src={bg}
        />
        <div className="flex flex-col gap-3 md:w-1/2">
          <p className="text-sm font-semibold capitalize text-red-600 md:text-xs">
            comporomiso con el medio ambiente
          </p>
          <h2 className="border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-3xl font-bold uppercase md:w-3/4">
            ESTAMOS COMPROMETIDOS CON TU BIENESTAR Y TU PROCESO
          </h2>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="relative h-[75vh] md:flex-1">
          <Image fill alt="bg_home" className="-z-50 h-[300px] object-cover" src={botella} />
        </div>
        <div className="flex flex-1 flex-col gap-6 p-5 font-semibold">
          <div>
            <p className="text-xs font-semibold capitalize text-red-600">
              Responsabilidad Ambiental
            </p>
            <h3 className="w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-2xl font-bold uppercase">
              Eco-Conciencia y Salud: Nuestra Filosofía en Solaz
            </h3>
          </div>
          <p>
            Solaz está a punto de certificarse como una empresa de tipo B, aquellas que generan un
            impacto triple.
            <br />
            <br />
            En Solaz, prestamos atención a todos los detalles y adoptamos un enfoque integral,
            asegurándonos de que nuestros socios se mantengan correctamente hidratados.
            <br />
            <br />
            En todo el gimnasio, hemos dispuesto de 8 dispensadores de agua baja en sodio, como
            parte de nuestra iniciativa para eliminar el uso de plásticos de un solo uso, como
            botellas y vasos. En lugar de eso, proporcionamos a cada socio una ecobotella
            personalizada para que puedan rellenarla.
            <br />
            <br />
            Además, hemos instalado estaciones para separar residuos, contribuyendo así a un
            ambiente más sostenible
          </p>
        </div>
      </div>
    </div>
  )
}

export default AmbientePage
