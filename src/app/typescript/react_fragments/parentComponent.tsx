import React from 'react'
import Link from 'next/link'



const ParentComponent = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-590'>
      <h1 className='text-4xl font-extrabold mt-5 dark:text-cyan-200 text-slate-900'>Parent Component</h1>
      <p className='mt-2'>In this page we learn how we can implement a parent component to have children types</p>
      <div className='mt-5 mb-3 duration-300 transition-all  hover:translate-x-1 '>
        <Link className=' py-4 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/typescript'>
          Back
        </Link>
      </div>

      {/*  */}
      <div className='dark:bg-slate-950 p-2 rounded-2xl mt-10'>
        <p>This back Button is in the parent component. In the parent component we have the children, which are other components. In the structure of this component, 
            we have the parent component being a wrapper in the <span className='dark:bg-slate-900 p-1 rounded-xl'>page.tsx</span>, wrapping other children components. 
            Remember, the children act as a children prop, just like the layout component
        </p>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default ParentComponent