"use client"
import React from 'react'

interface ErrorPageProps {
    error: Error,
    reset: () => void
}
const Error = ({error, reset }: ErrorPageProps) => {
  return (
    <div>
        <p>Error 😁😁</p>
        <p><b>Note:</b>For an error page, it has to use <b>use client</b></p>
        
        <button className = 'border-2 border-emerald-400 p-2 rounded-full' onClick={reset}>Reset Page</button>
    </div>
  )
}

export default Error
