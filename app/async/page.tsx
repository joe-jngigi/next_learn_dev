import React from 'react'

const Page = async() => {
    await new Promise((resolve) => (setTimeout(resolve, 5000)))

    throw Error ("Yoh G")
  return (
    <div>
        <p>
            This page is has an async function, and the reason we can make it into a JS async function is because by default all the components on <b>NextJS</b> are server component;
            meaning the code in it will only be excuted in the server and the only the return HTML is returned to the client side.
            This allows us to make even API calls and can use sensitive data in this component
        </p>
    </div>
  )
}

export default Page
