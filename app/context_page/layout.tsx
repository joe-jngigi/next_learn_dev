import React from 'react'
import Link from 'next/link'

const ProductsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-590'>
      <h1 className='text-4xl font-extrabold mt-5 dark:text-cyan-200 text-slate-900'>Dev Page for Context API</h1>
      <div className='mt-5 mb-3 duration-300 transition-all hover:translate-x-1 flex gap-5'>
        <Link className=' py-2 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/context_page'>
          Products page
        </Link>

        <Link className=' py-2 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/context_page/addProduct'>
          Add Product
        </Link>
      </div>

      <div className='dark:bg-slate-950 p-3 rounded-2xl mt-10 '>
        {children}
      </div>
    </div>
  )
}

export default ProductsLayout