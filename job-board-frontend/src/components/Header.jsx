import React from 'react'

function Header() {
  return (
    <div style={{ background: "rgb(15, 17, 19)", borderColor: "rgb(63, 65, 67)"}} className=' h-20 flex justify-between pl-5 md:pl-20 lg:pl-60 pr-5 md:pr-20 lg:pr-60 items-center border-b-2'>
      <h1 className='text-2xl text-white'>Job Board</h1>
      <h2 className='text-2xl text-white' >Ralphael Alcober</h2>
    </div>
  )
}

export default Header