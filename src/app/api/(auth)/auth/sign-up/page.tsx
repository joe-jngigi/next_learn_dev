import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import SignUp from '@/components/sign-up'

const Spage = async () => {
  const session = await getServerSession()

  if (session) {
    redirect('/private')
  }
  return (
    <main className=' pt-20 h-screen'>
      <section className=' h-full'>
        <SignUp/>
      </section>
    </main>
  )
}

export default Spage
