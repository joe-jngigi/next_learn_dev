# NextJS Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

The `layout` entrypoint for the nextjs components is the main entry point of our application and all the components are wrapped within it as its `children`. As a result, any code that is written will be displayed on every route page that you get to create; like a `</ Header>` and a `</ Navbar>`. This means that the component accepts a children prop.
