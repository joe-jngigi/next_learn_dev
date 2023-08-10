'use client'

import React, { useEffect } from 'react'

// This should receive data from the post component(Parent)
const Postcard = (eachData ) => {
    console.log(eachData)
  return (
    <section className='bg-slate-950 p-2 rounded-2xl'>
        {/* <h2 className='text-xl font-semibold'>{eachData.title}</h2> */}
        {/* <p>{[eachData]}</p> */}
    </section>
  )
}

export default Postcard