'use client'
import React from 'react'

import Link from 'next/link'
import { redirect } from 'next/navigation';

import { IoMdInformationCircleOutline } from "react-icons/io";

const SignIn = () => {

  const handleClick = () =>{

    redirect('/private')
  }
  return (
    <div className='grid place-items-center p-3 pt-32'>
      <div className='dark:bg-black shadow-xl border-1 dark:border-none bg-opacity-50 backdrop-blur-md rounded-2xl p-2 w-full md:max-w-[700px]'>
        <div className='dark:bg-main-dark-bg rounded-xl p-3 flex items-center justify-center flex-col'>
          <h1 className='text-xl font-bold mb-5'>Sign In - Details</h1>
          
          <form className='flex flex-col gap-2 w-full md:w-[500px]'>
            <input className='search_input' type="text" placeholder='User Email' />
            <input className='search_input' type="password" placeholder='Password' />

            <span className='pt-5'><button onClick={handleClick} className='black_btn float-right'>Sign In</button></span>
          </form>

          <div className='pt-2 w-full gap-2 cursor-not-allowed'>
            <p className='px-4 md:px-24 rounded-lg flex flex-row gap-2 items-center'> <IoMdInformationCircleOutline /> <span className=' text-sm  text-red-600'>error message</span></p>
          </div>
          <span className='w-full mt-5 text-14 flex flex-col sm:flex-row items-center justify-between px-4 gap-2'>Yoooh. Let us register you here😶‍🌫️🫡👉👉<Link className='underline uppercase text-base font-semibold tracking-wider' href= '/api/auth/sign-up'>Sign Up</Link></span>
        </div>
      </div>
    </div>
  )
}

export default SignIn
