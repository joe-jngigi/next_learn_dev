import React from 'react';

// This is how to write an async function in an arrow function in Javascript
const ServerPage = async() => {
    // This will insert an artificial delay for the component before it loads
    await new Promise((resolve) =>(
        setTimeout(resolve, 1000)
    ))
return (
<div>
<p>So, apparently I can make this page to have an async function because</p>
</div>
);
};

export default ServerPage;