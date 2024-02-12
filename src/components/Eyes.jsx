import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth/2;     // by doing (() /2) we'll get the middle point of our screen 
            let deltaY = mouseY - window.innerWidth/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle - 180);
        })
    }, [])
    
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed=".7"  className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute flex gap-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
                    <div className='w-2/3 h-2/3 relative bg-zinc-800 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
                    <div className='w-2/3 h-2/3 relative bg-zinc-800 rounded-full'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
