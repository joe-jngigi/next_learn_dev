import Link from 'next/link'
import Postcard from '../../../components/sub-components/postcard'


// Note for this import, we can have it here like this
// type PostProps = {
//   id: number,
//   title: string,
//   body: string,
// }

import { PostProps } from '@/types/types'
import React from 'react'

// This gets data from API 
const getAPIData = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')    
  }

  return res.json()
} 

// To use this piece of code, I can initialize it by initializing the returned data. The data returned is an array

const Typescript = async () => {

  const getData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const slicedData = data.slice(0, 50)
    return slicedData
  }

  // So the data comes in as arrays, but with the datatype of @*PostProps
  const FETCHED_DATA: PostProps[] = await getData()
//   const marvelMovies = [
//    { 1: "Iron Man (2008)"},
//     {2: "The Incredible Hulk (2008)"},
//     {3: "Iron Man 2 (2010)"},
//     {4: "Thor (2011)"},
//     {name: "Spider-Man: Far From Home (2019)"},
//     "Black Widow (2021)",
// ];

  // const FETCHED_DATA = marvelMovies

  // Remember the fetched data is inform of arrays.This means
  // console.log(FETCHED_DATA);
  // throw Error('New error')
  

  // getData()
  return (
    <main className='min-h-590'>
      <h1 className='text-4xl font-extrabold text-cyan-200'>Learning TypeScript</h1>
      <p className='mt-2'>You note that this is a server component, and for the cards, I have included the <b>use client</b> directive</p>

      <div className='flex flex-wrap gap-5 mt-3'>
        <Link className=' py-4 px-6 rounded-full hover:translate-x-1 border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/main/react_fragments'>
          Fragments
        </Link>

        <Link className=' py-4 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/main/search_react_event'>
          React Events
        </Link>
        <Link className=' py-4 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/main/react_states'>
          React States
        </Link>
      </div>
      <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-slate-900 h-full rounded-2xl p-3 mt-7'>
        {/* Map data into cards */}
        {
          // eachData needs to have a data type described. So we can have as show
          FETCHED_DATA.map((eachData: PostProps) =>(
            // console.log({...eachData})  => For the data from the api, this is going to return i
            
            // Once I receive the data, I can pass the data through a spread operator
            <Postcard key={eachData.id} {...eachData} />
            // <Postcard title={eachData.title} description={eachData.body}/>
          ))
        }
      </div>
    </main>
  )
}

export default Typescript
