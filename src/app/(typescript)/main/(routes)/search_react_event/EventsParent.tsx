import React from 'react'

const EventsParent = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='dark:bg-slate-950 p-2 rounded-2xl mt-10 grid gap-5  md:grid-cols-[400px_1fr]'>{children}</div>
  )
}

export default EventsParent