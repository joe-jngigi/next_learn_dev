import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Next Routing',
  description: 'Learning about NextJS layout',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className= 'sm:w-[95%] mx-auto p-2 sm:p-5'>

        {/* Navbar */}
        <nav className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Joe_JNgigi</h1>
          <span className=' flex gap-5 items-center justify-between'>
            <Link className='text-xl font-semibold text-orange-400' href= '/'>Go to Home</Link>
            <Link className='text-xl font-semibold text-red-700' href= '/blogs'>Blogs</Link>
            <Link className='text-xl font-semibold text-blue-700' href= '/async'>Server Async</Link>
          </span>
        </nav>

        {/* Main body */}
        {children}

        {/* Footer */}
        <footer>
          <section className=' bg-black  m-auto text-orange-600'>
            <h5 className='text-sm flex items-center justify-between'>
              <span className='flex '>
                <span className='flex'> &copy;{new Date().getFullYear()} <p>&nbsp;BeeST&nbsp;</p></span>
                  <p className='flex'>All rights reserved.</p>
                </span>
              <span><a className='' href="https://github.com/joe-jngigi">| Developer</a></span>
            </h5>
          </section>
        </footer>
      </body>
    </html>
  )
}
