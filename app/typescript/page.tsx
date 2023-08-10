import React, { useEffect } from 'react'
import Postcard from './postcard'

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
    const slicedData = data.slice(0, 30)
    return slicedData
  }

  // const FETCHED_DATA = await getData()
  const marvelMovies = [
   { 1: "Iron Man (2008)"},
    {2: "The Incredible Hulk (2008)"},
    {3: "Iron Man 2 (2010)"},
    {4: "Thor (2011)"},
    {name: "Spider-Man: Far From Home (2019)"},
    "Black Widow (2021)",
];

  const FETCHED_DATA = marvelMovies

  // Remember the fetched data is inform of arrays.This means
  // console.log(FETCHED_DATA);
  // throw Error('New error')
  

  // getData()
  return (
    <main className='min-h-590'>
      <h1 className='text-4xl font-extrabold mt-5 text-cyan-200'>Learning TypeScript</h1>

      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-slate-900 h-full rounded-2xl p-3 mt-5'>
        {/* Map data into cards */}
        {
          FETCHED_DATA.map((eachData) =>(
            console.log({...eachData})
            
            // Once I receive the data, I can pass the data through a spread operator
            // <Postcard  {...eachData} />
            // <Postcard title={eachData.title} description={eachData.body}/>
          ))
        }
      </div>
    </main>
  )
}

export default Typescript
