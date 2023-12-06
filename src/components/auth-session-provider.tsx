'use client'

import React from 'react'

import { SessionProvider} from 'next-auth/react'
import { TLayoutProp } from '@/types/types'

const AuthSessionProvider: React.FC<TLayoutProp> = ({children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthSessionProvider
