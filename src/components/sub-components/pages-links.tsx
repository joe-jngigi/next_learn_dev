import { TbBrandTypescript } from 'react-icons/tb'
import { GoShieldLock } from "react-icons/go";
import { RiHome7Fill } from "react-icons/ri";

import Link from 'next/link'

const PagesLinks = () => {
  return (
    <>
      <div className='flex flex-row gap-2 items-center justify-center'>

        <Link title='Main Page / Home / Joe_J' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl sm:flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500' href= '/'>
        <RiHome7Fill size={20}   />
        <span className="text-xs pt-1 hidden sm:flex">{`<Main />`}</span>
        </Link>

        <Link title='Typescript' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500' href='/main'>
        <TbBrandTypescript size={20}  />
        <span className="text-xs pt-1 hidden sm:flex">{`<TypeScript />`}</span>
        </Link>

        <Link title='Well, now this one you need to login' className='dark:hover:bg-main-dark-bg p-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 hover:text-emerald-500' 
        href='/api/auth/sign-in'
        
        >
        <GoShieldLock size = {20}/>
        <span className="text-xs pt-1 hidden sm:flex">{`<Protected />`}</span>
        </Link>

    </div>
    </>
  )
}

export default PagesLinks
