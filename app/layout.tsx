import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Routing',
  description: 'Learning about NextJS layout',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className= {`w-[95%] mx-auto p-5 ${inter.className}`}>

        {/* Navbar */}
        <nav className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Next App</h1>
          <span className=' flex gap-5 items-center justify-between'>
            <Link className='text-xl font-semibold text-orange-400' href= '/'>Go to Home</Link>
            <Link className='text-xl font-semibold text-emerald-700' href= '/about'>Go to About</Link>
            <Link className='text-xl font-semibold text-red-700' href= '/blogs'>Go to Blogs</Link>
          </span>
        </nav>

        {/* Main body */}
        {children}

        {/* Footer */}
        <footer>
          <h3 className=''>Copyright 2023</h3>
        </footer>
      </body>
    </html>
  )
}
