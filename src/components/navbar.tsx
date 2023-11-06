"use client"

import React, {useContext} from 'react'
import {MdOutlineMenu } from 'react-icons/md'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { TbBrandTypescript } from 'react-icons/tb'

import Link from 'next/link'
import Image from 'next/image'

import { SideMenuContext } from '@/context/sideBarContext'

import profileimg from '@/public/fxgraph.jpg'
import { AppName } from '@/utils/ui_variables'
import { LayoutDashboardIcon, Linkedin } from 'lucide-react'

const Navbar = () => {

  // const [notificationDropdown, setNotificationDropdown] = useState(false)
  // const [toggleMenu, setToggleMenu] = useState(false)

  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  const { toggleSideMenu, settoggleSideMenu } = useContext(SideMenuContext)

  console.log('toggleSideMenu' , toggleSideMenu);
  
  return (
    <nav className=' px-3  py-5 sm:py-3 bg-white  dark:bg-black  shadow-lg'>
      <div className='flex-between'>
        {/* logo */}
        <div>
          <h1 className='text-3xl font-bold text-emerald-500'>{AppName}</h1>
        </div>

        <div className='flex flex-row gap-3 items-center justify-center'>

          <Link title='Main Page / Home / Joe_J' href= '/'>
            <span className="icon-container">
              <LayoutDashboardIcon size={24}  className="icon" />
              <span className="icon-text">Home</span>
            </span>
          </Link>

          <Link title='Typescript' href='/main'>
            <span className="icon-container  ">
              <TbBrandTypescript size={24}  className="icon " />
              <span className="icon-text ">TypeScript</span>
            </span>
          </Link>

        </div>

        {/* Menu */}
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
        <div  className='relative hidden md:flex justify-between items-center gap-6 rounded-2xl border-1 dark:border-slate-900 p-2'>

          <Link title='My github link... Yey. This is where I store my code... it is private I am not sure why I like it like that' href= 'https://github.com/joe-jngigi'>
           <FaGithub size={24}/>
          </Link>

          <Link title='Twitter handle. I know it is X but for me it is twitter' href= 'https://twitter.com/joe_jngigi'>
           <FaXTwitter size={24} />
          </Link>

          <Link title='Well, this linkedin' href= 'https://www.linkedin.com/in/joejngigi/'>
           <Linkedin size={24}/>
          </Link>

          {/* User Profile */}
          <Link title='User Profile' href = '' className='z-auto dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500 flex-between flex-row gap-2'>
            <span className='w-10 h-10 rounded-full dark:bg-slate-900'>
              <Image  src={profileimg} height={40} width={40} alt='student_logo' className='h-full object-fill rounded-full'/>
            </span>
            <p className='text-sm dark:text-white'><span className='font-bold text'>Hello,</span> <span className='font-bold dark:text-slate-300'>My name's Joseph Ngigi</span></p>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar