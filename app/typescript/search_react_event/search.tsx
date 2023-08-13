'use client'
import React from 'react'

const Search = () => {
  
  return (
    <div>
        <form className='flex gap-2' action="search">
            <input className='w-full accent-emerald-500 bg-[rgb(30,30,30)] border-none outline-emerald-500 focus:outline-none p-2 rounded-full' type="search" name="search" id="search" placeholder='Search here'/>
            <button  className='rounded-full sm:px-10 px-4 py-1 border-2'>Search</button>
        </form>
    </div>
  )
}

export default Search