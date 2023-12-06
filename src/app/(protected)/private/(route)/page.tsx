'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

const Page = () => {
  return (
    <div>
      Route
      <br/>
      <button onClick={() => signOut()} className='black_btn'>Logout</button>
    </div>
  )
}

export default Page
