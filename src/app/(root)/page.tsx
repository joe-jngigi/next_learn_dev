// import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="font-display min-h-[90vh]">
      <div className="h-[45vh] pt-32">
        <div className="">
          <h2 className="text-4xl font-extrabold text-center">Hello NextJS, Welcome. Changes being made live</h2>
          <p className="mt-10 p-3 sm:p-0">We will be Testing out how the file system of next JS looks like. You can read me MD file</p>
        </div>
      </div>
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

      <div className=" grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 glassmorphism min-h-[800px] p-3 sm:p-5 rounded-2xl border-1 border-slate-400">
        <span className="flex items-center justify-center bg-black h-52 p-10 rounded-xl border-[0.1px] border-emerald-500">
          <Link className='text-xl font-semibold text-emerald-700' href='/main/context_page' >
            Context Page
          </Link>
        </span>

        <span className="flex items-center justify-center bg-black h-52 p-10 rounded-xl border-[0.1px] border-violet-500">
          <Link className='text-xl font-semibold text-violet-500' href='/notifications' >
            Notifications Page
          </Link>
        </span>

        <span className="flex items-center justify-center bg-black h-52 p-10 rounded-xl border-[0.1px] border-pink-600">
          <Link className='text-xl font-semibold text-pink-600' href='/typescript' >
          typescript
          </Link>
        </span>

        <span className="flex items-center justify-center bg-black h-52 p-10 rounded-xl border-[0.1px] border-pink-600">
          <Link className='text-xl font-semibold text-green-600' href='/Pagination' >
            Pagination
          </Link>
        </span>
      </div>
    </main>
  )
}
