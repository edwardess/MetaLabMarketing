import React from 'react'


interface Props {
     children: React.ReactNode
}
const Layout = ({children}: Props) => {
  return (
      <main className='flex flex-col min-h-screen relative'>
        {children}
      </main>
  )
}

export default Layout