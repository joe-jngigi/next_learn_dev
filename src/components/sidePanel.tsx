'use client'
import { SideMenuContext } from '@/context/sideBarContext'

import { AppName } from '@/utils/ui_variables'
import React, { useContext, useState } from 'react'
import { usePathname} from 'next/navigation'

import {MdClose} from 'react-icons/md'
import {VscLayoutSidebarRight, VscLayoutSidebarLeft} from 'react-icons/vsc'

const SidePanel = () => {

  const {toggleSideMenu, settoggleSideMenu, collapsePanel, setcollapsePanel} = useContext(SideMenuContext)

  // So these were tarnsferred to the from the child component, now they are here in the main parent component
  const [openElement, setOpenElement] = useState('');

  const handleToggle = (accordion_num: string) => {
    setOpenElement(prev => (prev === accordion_num ? '' : accordion_num));
  };
  
  const pathName = usePathname()
  
  return (
    <>
    {
      toggleSideMenu && <div className='md:hidden z-50 bg-transparent backdrop-blur-md fixed top-0 z-500 h-[100%] w-[100%] transition-all duration-700'>
      <div className='absolute top-5 right-5 text-black dark:text-slate-50 '>
        <button className='text-2xl border-2 border-black	dark:border-slate-50 rounded-xl p-2' onClick={() =>{
          settoggleSideMenu((prev: any) => !prev)}}>
          <MdClose/>
        </button>
      </div>
      
      <div className=' overflow-y-auto absolute top-0 bg-blend-luminosity dark:bg-black bg-blue-700 dark:border-r-1 dark:border-slate-900 border-slate-200  bg-opacity-90  w-[70%] sm:w-[50%]  h-[100vh] p-2 md:p-5 dark:text-white'>
        <div>
          <h1 className='text-3xl font-extrabold text-blue-700'>{AppName}</h1>
        </div>

        {/* Side Panel */}
        <div className='p-3 mt-28 '>
          Elements
        </div>

      </div>
    </div>
    }
    <div className='hidden md:flex flex-col h-full relative overflow-y-auto dark:border-r-1 dark:border-slate-900 p-3 bg-white dark:bg-black'>
      <button onClick={() => setcollapsePanel((prev: any) => !prev)} title='Click to collapse the sidebar' className='absolute right-5 top-5 text-3xl dark:hover:bg-main-dark-bg p-2 rounded-lg duration-500 flex items-center justify-center ml-3'>
        {/* <VscLayoutSidebarRight className=''/> */}
        {collapsePanel ? (<VscLayoutSidebarRight className=''/>): (<VscLayoutSidebarLeft/>)}
      </button>

      {/* Side Panel */}
      <div className='mt-28 flex flex-col gap-1'>
        Elements
      </div>

    </div>
    </>
  )
}

export default SidePanel