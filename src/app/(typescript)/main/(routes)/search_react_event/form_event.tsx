'use client'
import React from 'react'

import { data } from './data';
import { PostProps } from '@/types/types';

const FormEvent = () => {
  // console.log(data);

  const getdata: PostProps[] = data //PostProps is represented as an object. I have to add the array to make the fetched data as array
  console.log(getdata);
  
  console.log(Math.random());
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) =>{
    e.preventDefault()
  
    console.log('submitted succesfully');
    console.log(id);
    
  }
  
  return (
    <div className='flex flex-col gap-2'>
      {
        data.map((eachPost: PostProps) =>(
          // console.log(eachPost)
          
          <div key={Math.random()} className='grid grid-cols-[1fr_200px] gap-3 bg-slate-900 p-3 rounded-xl'>
            <div>
              <h2 className='text-xl font-bold'>{eachPost.title}</h2>
              <p className='text-14 text-gray-500'>{eachPost.body}</p>
            </div>
            
            <div className='flex flex-col gap-2 '>
              <button className='bg-emerald-500 rounded-full py-2'>Edit</button>
              <button onClick={(e) => handleDelete(e, eachPost.id)} className='bg-red-500 rounded-full py-2'>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FormEvent

// For this component, I would not map the data here since I want to use it as client, so I would map it in the other file