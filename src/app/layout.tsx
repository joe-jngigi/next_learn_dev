import { Navbar } from '@/components'
import '@/styles/globals.css'

export const metadata = {
  title: 'Next Routing',
  description: 'Learning about NextJS layout',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html className='dark:bg-dark-hero' lang="en">
      <body className= 'sm:w-[1800px] mx-auto sm:px-3 relative'>
        {/* Navbar */}
        <Navbar />
        {children}
        
      </body>
    </html>
  )
}
