'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import axios from 'axios'

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignUp = () => {

  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    
    try {
 
      const USER_EXIST = await axios.post('/api/check-user', {userEmail});
      
      console.log(USER_EXIST.data.u_mail);

      if (!!USER_EXIST.data.u_mail) {
        toast.error('User already Exists');
        (e.target as HTMLFormElement).reset();
        router.refresh()
        router.replace('/api/auth/sign-in')
        return
      }
      
      console.log('cleint', userEmail, userPassword, userName);
      

      await axios.post('/api/sign-user', {userEmail, userPassword, userName})
      toast.success('Data Transfer Successful');

      (e.target as HTMLFormElement).reset()

      router.refresh()
      router.replace('/api/auth/sign-in')
      

    } catch (error) {
      console.log('Error When Transferring data', error);
      toast.error('Data not transferred. Tell the developer to check his source code.. or else')
    }
    
  }

  return (
    <div className='grid place-items-center p-3 pt-32'>
      <div className='dark:bg-black shadow-xl border-1 dark:border-none bg-opacity-50 backdrop-blur-md rounded-2xl p-2 w-full md:max-w-[700px]'>
        <div className='dark:bg-main-dark-bg rounded-xl p-3 flex items-center justify-center flex-col'>
          <h1 className='text-xl font-bold mb-5'>Sign Up</h1>
          
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full md:w-[500px]'>

            <input required className='search_input' type="text" placeholder='User Name' name='username' onChange={(e) => setUserName(e.target.value)}/> 
            <input required className='search_input' type="email" placeholder='User Email' name='user_email' onChange={(e) => setUserEmail(e.target.value)}/>
            <input required className='search_input' type="password" placeholder='Password' name='user_password' onChange={(e) => setUserPassword(e.target.value)}/>
            
            <span className='pt-5'><button type='submit' className='black_btn float-right'>Sign Up</button></span>
          </form>
          {userName}
          {userEmail}
          {userPassword}

          <span className='w-full mt-5 text-14 flex flex-col sm:flex-row items-center justify-between px-4 gap-2'>Yoooh. Have an account, we sign you in😶‍🌫️🫡<Link className='underline uppercase text-base font-semibold tracking-wider' href= '/api/auth/sign-in'>Sign In</Link></span>
        </div>
      </div>
    </div>
  )
}

export default SignUp

