'use client'
import React, { useState } from 'react'
import { userType } from '../types/types'

const Input = () => {
  const [username, setUsername] = useState('@user')
  const [User, setUser] = useState< userType | null >(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()

    // On this, I need set user as username, and then I will give a sessionid
    setUser({
      name: username,
      sessionId: Math.random(),
    })
    console.log(User);
    
    
  }

  return (
    <div className='dark:bg-slate-950 p-2 rounded-2xl mt-10'>
      <div className='min-h-[500px] flex items-center justify-center'>

        {User? (`${User?.name} logged in`): (
          <form className='flex flex-col gap-5 items-center bg-secondary-dark-bg p-3 md:w-2/5 rounded-xl'>
            <input onChange={handleChange} className='w-full accent-emerald-500 bg-[rgb(30,30,30)] border-none outline-emerald-500 focus:outline-none p-2 rounded-full' type="text" name="name" id="name" placeholder='Username'/>
            <button onClick={handleLogin} className='rounded-full sm:px-10 px-4 py-1 border-2'>Login</button>
            <p>Welcome, {username}</p>
            </form>
        )}
        {User?.name}
      </div>
    </div>
  )
}

export default Input