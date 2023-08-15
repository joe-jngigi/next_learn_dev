import React from 'react'
import Link from 'next/link'
import Input from './input'

const States = () => {
  return (
    <div className='min-h-590'>
      <h1 className='text-4xl font-extrabold mt-5 dark:text-cyan-200 text-slate-900'>React States With Typescript</h1>
      <p className='mt-2'>On this page we see how we can implement usestate in Next with Typescript</p>
      <div className='mt-5 mb-3 duration-300 transition-all  hover:translate-x-1 '>
        <Link className=' py-4 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/typescript'>
          Back
        </Link>
      </div>

      <div>
        <Input/>
      </div>
    </div>
  )
}

export default States