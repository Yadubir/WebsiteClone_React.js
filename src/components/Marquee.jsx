import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-24 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='text-[18vw] leading-none font-["FoundersGrotesk-Semibold"] font-semibold uppercase pr-[1.5vw]'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='text-[18vw] leading-none font-["FoundersGrotesk-Semibold"] font-semibold uppercase pr-[1.5vw]'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
