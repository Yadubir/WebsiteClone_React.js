import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function Footer() {
    
    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-800 p-20 flex'>
      <div className='w-1/2 flex flex-col justify-between'>
        <div className='heading'>
            <h1 className='text-[6.5vw] uppercase leading-none font-semibold -mb-5'>Eye-</h1>
            <h1 className='text-[6.5vw] uppercase leading-none font-semibold -mb-5'>Opening</h1>
        </div>
      </div>
      <div className='w-1/2'>
        <h1 className='text-[6.5vw] uppercase leading-none font-semibold -mb-5'>Presentations</h1>
      </div>
    </div>
  )
}

export default Footer
