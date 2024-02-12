import React from 'react'

function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
      <h1 className="text-[5vw] ml-[4vw] font-['NeueMontreal-Regular'] leading-[4.1vw] tracking-tight">
      Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='flex gap-5 w-full border-t-[1px] pt-10 mt-16 border-[#a8b478]'>
        <div className='w-1/2'>
            <h1 className='text-5xl ml-[4vw]'>Our approach:</h1>
            <button className='flex gap-8 ml-[4vw] items-center px-10 py-4 mt-5 bg-zinc-900 rounded-full text-white uppercase'>Read more
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#859744] rounded-3xl'></div>
      </div>
    </div>
  )
}

export default About
