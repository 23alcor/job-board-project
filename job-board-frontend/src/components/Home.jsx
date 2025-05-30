import React from 'react'
import Header from './header'
import Main from './Main'

function Home() {
  return (
    <div style={{ background: "rgb(13, 20, 22)"}} className='overflow-hidden h-screen min-h-screen bg-background text-foreground overflow-x-hidden'>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home