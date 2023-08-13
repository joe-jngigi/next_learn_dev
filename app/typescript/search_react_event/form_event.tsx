'use client'
import React from 'react'

const FormEvent = ({data}) => {

  console.log(Math.random());
  const handleClick = (e: any) =>{
    e.preventDefault()
  
    console.log('deleted succesfully');
    
  }
    
  return (
    <div className='flex flex-col gap-2'>
      {
        data.map((eachPost) =>(
          <div key={Math.random()} className='grid grid-cols-[1fr_200px] gap-3 bg-slate-900 p-3 rounded-xl'>
            <div>
              <h2>{eachPost.title}</h2>
              <p>{eachPost.body}</p>
            </div>

            <div className='flex flex-col gap-2 '>
              <button className='bg-red-500 rounded-full py-2'>Edit</button>
              <button onClick={handleClick} className='bg-red-500 rounded-full py-2'>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FormEvent