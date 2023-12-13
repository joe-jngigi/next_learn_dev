import { getServerSession } from 'next-auth/next';

import ResponsiveNav from './sub-components/responsive-nav'
import PagesLinks from './sub-components/pages-links';

import { AppName } from '@/utils/ui_variables'

import { options} from '@/app/api/(auth)/auth/[...nextauth]/options'

const Navbar = async () => {

  const Session = await getServerSession(options)


  console.log("Server Session", Session);
  
  
  return (
    <nav className='z-50 px-3 fixed top-5 mx-auto left-1/2 transform -translate-x-1/2 w-full xl:w-[1200px]  shadow-lg rounded-full border-1 dark:border-none backdrop-filter backdrop-blur-lg bg-opacity-50 dark:bg-main-dark-bg/20 bg-blend-color-dodge'>
      <div className='flex-between'>
        {/* logo */}
        <div>
          <h1 title='This is just text, I don&apos;t want to make a logo' className='text-3xl font-bold cursor-not-allowed text-emerald-500'>{AppName}</h1>
        </div>

        <>
          <PagesLinks/>
        </>

        {/* Menu */}
        <>
          <ResponsiveNav Session={Session}/>
        </>
      </div>
    </nav>
  )
}

export default Navbar