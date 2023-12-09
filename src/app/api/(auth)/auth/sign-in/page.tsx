import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import SignIn from '@/components/sign-in'

const Spage = async () => {

  const session = await getServerSession()

  if (session) {
    redirect('/private')
  }
  
  return (
    <main className='pt-20 min-h-screen'>
      <section className=' w-full   h-[120vh]'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit laborum exercitationem itaque vel blanditiis nihil earum, voluptate, nesciunt saepe nam culpa non. Quia assumenda beatae fuga voluptas laudantium voluptatibus.</p>
        <SignIn/>
      </section>
    </main>
  )
}

export default Spage
