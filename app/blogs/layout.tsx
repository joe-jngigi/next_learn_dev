import React from 'react';

// export default function BlogsLayout ({ children, } : {children: React.ReactNode}){
//   return (
//     <main>
//       <h2>Blog Post Layout</h2>
//       {children}

//     </main>
//   )
// }

export default function DashboardLayout({ children,}: { children: React.ReactNode}) {
  return <section>{children}</section>
}