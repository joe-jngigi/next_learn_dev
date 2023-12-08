'use client'

import { signOut } from 'next-auth/react';
import React from 'react'

interface ILogin{
    setNotificationDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginBtn: React.FC<ILogin> = ({setNotificationDropdown}) => {
  return (
    <>
      <button className='w-full mt-5 black_btn' type='button' onClick={() => {
        setNotificationDropdown(false);
        signOut()
                // sign out
        }}>signOut
       </button>
    </>
  )
}

export default LoginBtn
