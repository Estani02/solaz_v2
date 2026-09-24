/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/no-array-index-key */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import Swipeable_Drawer from './Swipeable_Drawer'

const navItems = [
  { text: 'Inico', link: '/' },
  { text: 'App Solaz', link: '/app_solaz' },
  { text: 'Compromiso con el ambiente', link: '/ambiente' },
  { text: 'Contáctanos', link: '/contacto' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    // <nav className="sticky top-0 z-50 flex w-full justify-between bg-red-600 text-white md:fixed md:bg-transparent">
    <nav
      className={`sticky top-0 z-50 flex w-full justify-between bg-red-600 text-white transition-all duration-300 md:fixed md:bg-transparent ${
        isScrolled ? 'md:bg-red-600 md:shadow-lg md:backdrop-blur' : null
      }`}
    >
      <div className="p-2 md:flex-1">
        <Link aria-label="Solaz Club - Inicio" className="flex h-full items-center" href="/">
          <Image
            priority
            alt="Solaz Club"
            className="h-10 w-auto"
            height={235}
            src="/images/logos/solaz-club-logo-blanco.svg"
            width={585}
          />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-end p-2 md:w-[45%] xl:justify-center">
        <Swipeable_Drawer nav_items={navItems} />
        <ul className="hidden w-fit gap-9 whitespace-nowrap text-sm xl:flex">
          {navItems.map((item, index) => (
            <Link key={index} className="nav-link" href={item.link}>
              <li className="li-nav">{item.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
