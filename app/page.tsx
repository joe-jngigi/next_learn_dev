// import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="font-body flex min-h-[90vh] flex-col items-center justify-between p-24">
      <h2>Hello NextJS, Welcome. Changes being made live</h2>
      <p>We will be Testing out how the file system of next JS looks like. You can read me MD file</p>

      <div className=" flex gap-5 p-5">
        <Link className='text-xl font-semibold text-emerald-700' href='/context_page' >
          Context Page
        </Link>
        <Link className='text-xl font-semibold text-red-600' href='/notifications' >
          Notifications Page
        </Link>
      </div>
    </main>
  )
}
