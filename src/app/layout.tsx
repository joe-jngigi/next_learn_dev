import { Navbar } from '@/components'
import '@/styles/globals.css'

export const metadata = {
  title: 'Next Routing',
  description: 'Learning about NextJS layout',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className= 'sm:w-[1900px] mx-auto sms:px-3'>

        {children}
        
      </body>
    </html>
  )
}
