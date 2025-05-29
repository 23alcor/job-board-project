import React from 'react'
import Header from './header'
import Main from './Main'

function Home() {
  return (
    <div  className='overflow-hidden h-screen bg-gray-700 min-h-screen bg-background text-foreground overflow-x-hidden'>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home