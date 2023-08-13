'use client'

import React, { useEffect } from 'react'
import { PostProps } from './types/types'

// This should receive data from the post component(Parent)
const Postcard = (eachData: PostProps ) => {
    console.log(eachData)
  return (
    <section className='bg-slate-950 p-2 rounded-2xl'>
        <h2 className='text-xl font-semibold'>{eachData.title}</h2>
         <p className='mt-2 text-gray-500'>{eachData.body}</p>
    </section>
  )
}

export default Postcard