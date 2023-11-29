import { ReactNode } from 'react'
import Panel from './private-components/panel'

const ShieldedLayout = ({children}: {children: ReactNode}) => {
  return (
    <section className='bg-slate-900 pt-20 h-screen'>
      <Panel/>
      {children}
    </section>
  )
}

export default ShieldedLayout
