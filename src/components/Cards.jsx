import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-800 flex items-center px-20 gap-5'>
      <div className='w-1/2 h-[60vh] rounded-xl bg-[#004D43]'></div>
      <div className='w-1/2 h-[60vh] flex gap-5 '>
        <div className='w-1/2 h-full rounded-xl bg-zinc-300'></div>
        <div className='w-1/2 h-full rounded-xl bg-zinc-300'></div>
      </div>
    </div>
  )
}

export default Cards
