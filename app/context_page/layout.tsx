'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'

import { ThemeContext } from './context/ThemeContext'
import { ThemeTypes } from '../typescript/types/types'

const ProductsLayout = ({children}: {children: React.ReactNode}) => {

  // by default it will always be light
  const [themeValue, setThemeValue] = useState<'light' | 'dark' >('light')
  const [ThemeChange, setthemeChange] = useState(false)
  
  const themeCcontext = useContext(ThemeContext)

  console.log('Before:' , themeCcontext);
  console.log('Before:' , themeValue);
  

  const changeTheme = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    setthemeChange(!ThemeChange)
    console.log(ThemeChange);
    setThemeValue((prev) => prev === 'dark' ? 'light' : 'dark')
    
  }

  

  return (
    <div className='min-h-590'>
      <ThemeContext.Provider value={{themeValue}}>
        <h1 className='text-4xl font-extrabold mt-5 dark:text-cyan-200 text-slate-900'>Dev Page for Context API</h1>
        
        <div className='flex justify-between items-center'>
          <div className='mt-5 mb-3 duration-300 transition-all hover:translate-x-1 flex gap-5'>
            <Link className=' py-2 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/context_page'>
              Products page
            </Link>

            <Link className=' py-2 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/context_page/addProduct'>
              Add Product
            </Link>
          </div>

          <div>
            <button className='text-2xl' onClick={changeTheme}>
              {ThemeChange ? ( <MdOutlineDarkMode/> ):(<MdOutlineLightMode />)}
              
            </button>
          </div>
        </div>

        <div className='dark:bg-slate-950 p-3 rounded-2xl mt-10 '>
          {children}
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default ProductsLayout