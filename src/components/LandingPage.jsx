import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
                    className="w-[9vw] h-[5vw] rounded-md mr-[1vw]  "
                  ></motion.div>
                )}
                <h1 className="uppercase text-[6.7vw] leading-[6.8vw] tracking-tighter font-['FoundersGrotesk-Semibold']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        {/* <div className="masker ">
            <h1 className="uppercase text-8xl leading-[6.8vw] tracking-tighter font-['FoundersGrotesk-Semibold']">
                We Create
            </h1>
        </div>
        <div className="masker ">
            <h1 className="uppercase text-8xl leading-[6.8vw] tracking-tighter font-['FoundersGrotesk-Semibold']">
                Eye Opening
            </h1>
        </div>
        <div className="masker ">
            <h1 className="uppercase text-8xl leading-[6.8vw] tracking-tighter font-['FoundersGrotesk-Semibold']">
                Presentations
            </h1>
        </div> */}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-16 flex justify-between items-center py-4 px-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-6 py-4 border-[1px] rounded-full border-zinc-700 font-light text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-700 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
