"use client"

import React, {useContext} from 'react'
import {MdOutlineMenu } from 'react-icons/md'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { TbBrandTypescript } from 'react-icons/tb'
import { GoShieldLock } from "react-icons/go";
import { RiHome7Fill } from "react-icons/ri";

import Link from 'next/link'
import Image from 'next/image'

import { SideMenuContext } from '@/context/sideBarContext'

import profileimg from '@/public/fxgraph.jpg'
import { AppName } from '@/utils/ui_variables'
import {  Linkedin } from 'lucide-react'

const Navbar = () => {

  // const [notificationDropdown, setNotificationDropdown] = useState(false)
  // const [toggleMenu, setToggleMenu] = useState(false)

  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  const { toggleSideMenu, settoggleSideMenu } = useContext(SideMenuContext)

  console.log('toggleSideMenu' , toggleSideMenu);
  
  return (
    <nav className=' px-3 fixed top-5 mx-auto left-1/2 transform -translate-x-1/2 md:w-[1200px]  shadow-lg rounded-full border-1 dark:border-none backdrop-filter backdrop-blur-lg bg-opacity-50 dark:bg-main-dark-bg bg-blend-color-dodge'>
      <div className='flex-between'>
        {/* logo */}
        <div>
          <h1 title='This is just text, I don&apos;t want to make a logo' className='text-3xl font-bold cursor-not-allowed text-emerald-500'>{AppName}</h1>
        </div>

        <div className='flex flex-row gap-2 items-center justify-center'>

          <Link title='Main Page / Home / Joe_J' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl sm:flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500' href= '/'>
            <RiHome7Fill size={20}   />
            <span className="text-xs pt-1 hidden sm:flex">{`<Main />`}</span>
          </Link>

          <Link title='Typescript' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500' href='/main'>
            <TbBrandTypescript size={20}  />
            <span className="text-xs pt-1 hidden sm:flex">{`<TypeScript />`}</span>
          </Link>
          
          <Link title='Well, now this one you need to login' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500' 
            href='/api/auth/sign-in'
            
          >
            <GoShieldLock size = {20}/>
            <span className="text-xs pt-1 hidden sm:flex">{`<Protected />`}</span>
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
        <div  className='relative hidden md:flex justify-between items-center gap-6 rounded-2xl'>

          <Link title='My github link... Yey. This is where I store my code... it is private I am not sure why I like it like that' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500' href= 'https://github.com/joe-jngigi'>
           <FaGithub size={20}/>
          </Link>

          <Link title='Twitter handle. I know it is X but for me it is twitter' className='text-blue-900 dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500' href= 'https://twitter.com/joe_jngigi'>
           <FaXTwitter size={20} />
          </Link>

          <Link title='Well, this linkedin' className='text-blue-500 dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500' href= 'https://www.linkedin.com/in/joejngigi/'>
           <Linkedin size={20}/>
          </Link>

          {/* User Profile */}
          <Link title='User Profile' href = '' className='z-auto dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500 flex-between flex-row gap-2'>
            <span title='I know you really wanna see this pic in full, but naaaah, not now meeehn, its just a random' className='w-8 h-8 rounded-full dark:bg-slate-900'>
              <Image  src={profileimg} height={32} width={32} alt='student_logo' className='h-full object-fill rounded-full'/>
            </span>
            <p className='text-sm dark:text-white'><span className='font-bold text'>Hello,</span> <span className='font-bold dark:text-slate-300'>it&apos;s Joseph Ngigi</span></p>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar