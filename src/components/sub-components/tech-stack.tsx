'use client'
import React from 'react'

import { teck_stack_icons } from '@/utils/ui_variables'
import Image from 'next/image'

const TechStack = () => {
  return (
    <div className='relative md:bottom-0 min-h-[30vh] md:min-h-[16vh] rounded-xl'>
      <div className='absolute  bottom-0 p-2 w-full'>
        <div className='glassmorphism max-w-[1000px] mx-auto p-3 flex flex-row items-center gap-5 rounded-xl'>
          <h3 className='border-r-2 dark:border-gray-300 border-gray-950 text-lg logo_text pr-5'>Tech Stack</h3>
          <div className='flex flex-wrap  justify-center gap-5'>

            {/* TODO; Implement a mode and a gredient on this */}
            {
              teck_stack_icons.slice(0, 10).map((icon) =>(
                <span key={icon.id}>
                  <Image src={icon.name} height={40} width={40} alt='student_logo' className='h-full object-contain cursor-pointer bg-white p-1 rounded-xl'/>
                </span>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TechStack
