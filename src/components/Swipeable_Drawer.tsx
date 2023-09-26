/* eslint-disable react/no-array-index-key */
'use client'

import React, { useState } from 'react'
import { SwipeableDrawer } from '@mui/material'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'

import SocialMedia from './SocialMedia'

interface MenuItem {
  text: string
  link: string
}

function Swipeable_Drawer({ nav_items }: { nav_items: MenuItem[] }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerWidth = 240

  const handleDrawerToggle =
    (_open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setMobileOpen(!mobileOpen)
    }

  return (
    <>
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 xl:hidden"
        type="button"
        onClick={handleDrawerToggle(true)}
      >
        <MenuIcon className="text-white" />
      </button>
      <SwipeableDrawer
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        anchor="right"
        open={mobileOpen}
        sx={{
          display: { xs: 'block', xl: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        onClose={handleDrawerToggle(false)}
        onOpen={handleDrawerToggle(true)}
      >
        <div className="flex h-screen flex-col justify-between">
          <div className="flex flex-col">
            <span className="logo-solaz border-b-2 px-5 py-8 text-center text-4xl text-red-500">
              SOLAZ
            </span>
            <ul className="mt-11 flex w-full flex-col gap-6 px-5 text-left font-semibold text-black">
              {nav_items.map((item: MenuItem, index: React.Key) => (
                <Link
                  key={index}
                  className="li-nav"
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                >
                  <li className="nav-link">{item.text}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 border-t-2 px-4 py-2 text-xs">
            <span>© 2023, SOLAZ club</span>
            <SocialMedia minimized="nav" />
          </div>
        </div>
      </SwipeableDrawer>
    </>
  )
}

export default Swipeable_Drawer
