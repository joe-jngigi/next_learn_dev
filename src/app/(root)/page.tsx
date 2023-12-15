// import Image from 'next/image'
import { ProfileIntro, TechStack } from "@/components"

export default function Home() {
  return (
    <main className="font-display pt-20 min-h-[95vh] md:min-h-[96vh]">
      
      <>
        <ProfileIntro />
      </>

      <>
        <TechStack/>
      </>
    </main>
  )
}
