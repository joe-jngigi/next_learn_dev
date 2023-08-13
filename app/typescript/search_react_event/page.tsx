import React from 'react'
import Link from 'next/link'

import Search from './search'
import EventsParent from './EventsParent'
import FormEvent from './form_event'

const ReactEvents = () => {
  const data = [
    {id:'s', title: 'Post 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ducimus aliquid, architecto pariatur blanditiis voluptatum placeat soluta ab molestiae sint recusandae, sunt omnis obcaecati iste? Officiis qui cum id vero!'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
    {id:'s', title: 'Post 1', body: 'This post will be dublicated'},
  ]
  return (
    <main className='min-h-590'>
      <h1 className='text-4xl font-extrabold mt-5 dark:text-cyan-200 text-slate-900'>React Events With Typescript</h1>
      <p className='mt-2'>On this page we see how we can implement a search, also I will be implenting a reusable component</p>
      <div className='mt-5 mb-3 duration-300 transition-all  hover:translate-x-1 '>
        <Link className=' py-4 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200' href = '/typescript'>
          Back
        </Link>
      </div>

      <EventsParent>
        <Search />
        <div>
            <FormEvent data= {data} />
        </div>
      </EventsParent>
    </main>
  )
}

export default ReactEvents