import React from 'react'

import { FaGithub, FaXTwitter } from 'react-icons/fa6'

import {  Linkedin } from 'lucide-react'
import Image from 'next/image'
import fxgraph from '@/public/fxgraph.jpg'
import dashboard from '@/public/dashboard.png'

const ProfileIntro = () => {
  return(
    <section className='grid md:grid-cols-2'>
      <div className="flex flex-col items-center p-10 md:p-24 md:min-h-[70vh]">
        <h2 className=" orange_gradient green_gradient head_text">
          Let's Craft an App for your businesses.
        </h2>

        <p className="mt-8 desc">
        I'm Joseph Ngigi, a front-end developer passionate about crafting intuitive web applications. I make secure optimized bussiness Apps; A SaaS challenge will do good.
        </p>
        <div className='mt-6 flex sm:gap-5 items-center w-full flex-row '>
          <p className='border-r-2 dark:border-gray-300 border-gray-950 pr-5 text-lg logo_text ' >Let&apos;s connect</p>
          <a title='My github link... Yey. This is where I store my code... it is private I am not sure why I like it like that' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500' 
            href= 'https://github.com/joe-jngigi' target='_blank'>
            <FaGithub size={20}/>
          </a>

          <a title='Twitter handle. I know it is X but for me it is twitter' className='text-blue-900 dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500' 
            href= 'https://twitter.com/joe_jngigi' target='_blank'>
            <FaXTwitter size={20} />
          </a>

          <a title='Well, this linkedin' className='text-blue-500 dark:hover:bg-main-dark-bg p-2 rounded-2xl duration-500' 
            href= 'https://www.linkedin.com/in/joejngigi/' target='_blank'>
            <Linkedin size={20}/>
          </a>
        </div>
      </div>

      <div className='hidden md:block relative h-[70vh]'>
        
        <Image
          className='absolute object-fill top-28 left-10 rounded-xl shadow-[0_0_8px_seagreen] transition-all  hover:shadow-[0_0_8px_green] transform hover:scale-[1.01]'
          alt='business'
          src={fxgraph}
          style={{ width: '320px', height: '384px' }}
        />

        <div className='-z-10 absolute top-48 left-28 h-[300px] w-[320px] bg-emerald-700 rounded-xl'></div>

        <Image
          className='absolute bottom-8 left-20 xl:left-64  rounded-xl shadow-[0_0_5px_seagreen] transition-all  hover:shadow-[0_0_8px_green] transform hover:scale-[1.01]'
          alt='business'
          src={dashboard}
          style={{ width: '400px', height: '250px' }}
        />

          {/* <Image className='absolute top-9 left-10 rounded-xl ' alt='business' src={fxgraph} style={{width: '350px', height: '384px'}}/> */}
       
      </div>
    </section>
  )
}

export default ProfileIntro
