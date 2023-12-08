import { Toaster } from 'react-hot-toast';

import { Navbar } from '@/components'
import '@/styles/globals.css'
import AuthSessionProvider from '@/components/auth-session-provider';

export const metadata = {
  title: 'Next Routing',
  description: 'Learning about NextJS layout',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <AuthSessionProvider>
      <html className='dark:bg-dark-hero' lang="en">
        <body className= 'sm:max-w-[1800px] mx-auto sm:px-3 '>
            
            {/* Navbar */}
            <Toaster />
            <Navbar />
            {children}
            
            
        </body>
      </html>
    </AuthSessionProvider>

  )
}
