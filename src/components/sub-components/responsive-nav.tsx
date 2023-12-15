"use client"

import Link from 'next/link'

import React, {useContext, useState} from 'react'
import {MdOutlineMenu } from 'react-icons/md'

import Image from 'next/image'

import { SideMenuContext } from '@/context/sideBarContext'

import profileimg from '@/public/fxgraph.jpg'
import LoginBtn from './login-btn'
import { Session } from '@/types/types'
import { useSession } from 'next-auth/react'

const ResponsiveNav =  ({Session}: {Session: Session | null}) => {

  const { data: session, status } = useSession()
  

  console.log('Session data', session);

  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  const { toggleSideMenu, settoggleSideMenu } = useContext(SideMenuContext)
  const [notificationDropdown, setNotificationDropdown] = useState(false)
  return (
    <>
      {/* Mobile Navigation */}
      <div className='md:hidden flex gap-6 relative'>
        {/* Sidemenu */}
        <button onClick={() => {
          settoggleSideMenu((prev) => !prev)

          // document.body.style.overflow = 'unset'
          }} className='dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500 text-2xl flex items-center justify-center ml-3'>
          < MdOutlineMenu />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className='relative hidden md:flex justify-between items-center gap-6 rounded-2xl'>

        {/* User Profile */}
        <Link onClick={() => {
          setNotificationDropdown((prev) => !prev)
            
        }} title='User Profile' href = '' className='z-auto dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500 flex-between flex-row gap-2'>
          <span title='I know you really wanna see this pic in full, but naaaah, not now meeehn, its just a random' className='w-8 h-8 rounded-full dark:bg-slate-900'>
            <Image  src={profileimg} height={32} width={32} alt='student_logo' className='h-full object-fill rounded-full'/>
          </span>
          <p className='text-sm dark:text-white'><span className='font-bold text'>Hello,</span> <span className='font-bold dark:text-slate-300'>it&apos;s Joseph Ngigi</span></p>
        </Link>     
        {
          notificationDropdown && <div className='  dropdown duration-500 transition-all'>
            <Link onClick={() => setNotificationDropdown(false)} href= ''>Notifications</Link>
            <p>Lorem ipsum, </p>
            <span>
              {
                Session ? (<LoginBtn setNotificationDropdown = {setNotificationDropdown}/>) :(
                  <Link onClick={() => setNotificationDropdown(false)} className='black_btn' href= "/api/auth/sign-in">Sign In</Link>
                )
              }
            </span>
            
          </div>
        }   
      </div>
      
      
    </>
  )
}

export default ResponsiveNav
