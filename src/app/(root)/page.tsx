// import Image from 'next/image'
import { ProfileIntro } from "@/components"
import Link from "next/link"

export default function Home() {
  return (
    <main className="font-display pt-20 min-h-[96vh]">
      
      <section className="">
        <ProfileIntro />
      </section>

      {/* <div>
          <iframe
          title="Website Preview"
          src={'https://softops-markdown.netlify.app'}
          width="100%"
          height="500px" // Set the height as per your design
          frameBorder="0"
          allowFullScreen
        />
      </div> */}
    </main>
  )
}
