import React from 'react'
import { Bookmark } from 'lucide-react';

function JobItem({company, title, city, salary}) {
  return (
    <div className='ml-1 mr-1 bg-red-400 h-25 rounded-2xl flex items-center justify-between mt-1'>
      <div className='w-[80%] pl-[10%] h-[80%]'>
        <div className='w-full text-xs pl-[1%]'>{company}</div>
        <div className='w-full text-sm pt-1'>{title}</div>
        <div className='w-full text-xs pt-1'>{city}</div>
        <div className='w-full text-xs'>{salary}</div>
      </div>
      <div className='h-full pr-3 pt-3'>
        <Bookmark className='w-6 h-6'/>
      </div>
    </div>
  )
}

export default JobItem