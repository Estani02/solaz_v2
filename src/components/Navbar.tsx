/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link'
import React from 'react'

import Swipeable_Drawer from './Swipeable_Drawer'

const navItems = [
  { text: 'Inico', link: '/' },
  { text: 'App Solaz', link: '/app_solaz' },
  { text: 'Compromiso con el ambiente', link: '/ambiente' },
  { text: 'Contáctanos', link: '/contacto' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full justify-between bg-red-600 text-white backdrop-blur-md md:fixed md:bg-transparent md:backdrop-blur-none">
      <div className="p-2 md:flex-1">
        <Link href="/">
          <span className="logo-solaz text-4xl">SOLAZ</span>
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
