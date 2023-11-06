import React, { FC } from 'react'

import { Navbar } from '@/components'
import { TLayoutProp } from '@/types/types'

const Layout: FC<TLayoutProp>  = ({children}) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
