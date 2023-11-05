export const metadata = {
    title: 'Joe_J | Learning Next',
    description: 'More of typescript code, with learning react and nextjs concepts',
  }

const MainPageLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default MainPageLayout
