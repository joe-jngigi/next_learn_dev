import React from 'react'
const code = 
  `const MyComponent = () => {
    return (
      <React.Fragment>
          {/* Multiple JSX element goes here */}
      </React.Fragment>
    );
  };`

const FragmentChild = () => {
  return (
    <div className='dark:bg-slate-950 p-2 rounded-2xl mt-3'>
        <h2 className="text-2xl font-bold">React Fragment and Using Components as Props</h2>
        <p>
          A fragment is a way to group multiple elements without introducing an additional wrapping element in the DOM. 
          It is created with the main purpose of resolving the issue where we need to return multiple elements or adjacent JSX multiple
           elements from a react component without making use of an actual JSX element such as div, section, span, etc that will create 
           an extra node in the DOM. React fragment allows one to add multiple elements to a react component, saving the headache of 
           returning multiple elements for react developers.
        </p>

        <div className='m-5 p-5 rounded-2xl w-96 bg-slate-700'>
          {code}
        </div>
    </div>
  )
}

export default FragmentChild