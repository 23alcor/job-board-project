import React from 'react'
import Search from './Search'
import Description from './Description'

function Main() {
  return (
    <div className='bg-red-700 flex max-w-screen sm:mx-20 md:mx-30 lg:mx-65 min-h-[80vh] mb-20'>
      <Search/>
      <Description/>
    </div>
  )
}

export default Main