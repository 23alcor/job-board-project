import React from 'react'

function JobItem({company, title, city, salary}) {
  return (
    <div className='ml-1 mr-1 bg-red-400 h-20 rounded-2xl flex justify-between mt-1'>
      <div className='bg-amber-300 w-[80%]'>
        <div className='w-full text-sm'>{company}</div>
        <div className='w-full text-sm'>{title}</div>
        <div className='w-full text-sm'>{city}</div>
        <div className='w-full text-sm'>{salary}</div>
      </div>
      <div className='bg-orange-200'>save</div>
    </div>
  )
}

export default JobItem