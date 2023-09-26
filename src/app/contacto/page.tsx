/* eslint-disable react/no-array-index-key */
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

import interior from '@/assets/img/interior_1.png'
import interior2 from '@/assets/img/interior_2.webp'
import ContactForm from '@/components/ContactForm'
import { IteamFooter } from '@/components/Footer'

function ContactoPage() {
  return (
    <div className="flex flex-col text-white">
      <div className="relative my-[50px] flex h-fit md:h-[75vh]">
        <Image
          alt="solaz gimanasio"
          className="absolute -z-50 hidden h-full w-full object-cover brightness-50 md:block"
          src={interior2}
        />
        <div className="flex h-full w-fit flex-col justify-center gap-5 bg-primario px-[40px]">
          <h2 className="w-fit border-[1px] border-solid border-transparent border-b-red-600 pb-3 text-xl font-bold uppercase md:text-2xl">
            DISFRUTA ENTRENAR, NOSOTROS TE GUIAMOS
          </h2>
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="uppercase md:text-lg">CONTACTO</h3>
                <p className="text-xs font-semibold capitalize text-red-600 md:text-sm">
                  Para más información, ¡contáctenos!
                </p>
              </div>
              <ol className="flex flex-col gap-2">
                {IteamFooter.map((iteam, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-xs font-semibold md:text-sm"
                  >
                    {iteam.icon}
                    {iteam.type ? (
                      <Link
                        href={
                          iteam.type === 'email' ? 'mailto:csolazm@gmail.com' : 'tel:+5493512012426'
                        }
                      >
                        {iteam.text}
                      </Link>
                    ) : (
                      <p>{iteam.text}</p>
                    )}
                  </li>
                ))}
              </ol>
              <div className="flex gap-2 text-xs md:text-sm">
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
            <div className="flex flex-col gap-3 md:gap-6">
              <div>
                <h3 className="uppercase md:text-lg">Metodos de pago</h3>
                <p className="text-xs font-semibold capitalize text-red-600 md:text-sm">
                  Promos vigentes
                </p>
              </div>
              <div className="text-xs md:text-sm">
                <p>Efectivo - Transferencia</p>
                <p>Tarjetas de crédito/debito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div
          className="flex w-full flex-1 flex-col gap-4 bg-white p-5 text-primario"
          style={{
            backgroundImage:
              'url(https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/627e923543fae8b1070581d0_FONDO%20plataformas.jpg)',
            backgroundSize: 'cover',
          }}
        >
          <h4 className="text-lg font-bold uppercase">DEJA TU CONSULTA</h4>
          <ContactForm />
        </div>
        <div className="md:flex-1">
          <Image
            alt="solaz gimanasio"
            className="hidden h-full w-full object-cover md:block"
            src={interior}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactoPage
