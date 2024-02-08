/* eslint-disable react/jsx-key */
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                
                return <div  key={item} className="masker">
                    <div className='w-fit flex '>
                        {index === 1 && (<div className='w-[8vw] h-[5.3vw] relative top-[1vw] bg-red-500 '></div>)}
                <h1 className="uppercase text-[7vw] leading-[6.5vw] font-['Founders Grotesk X-Condensed'] font-bold">{item}</h1>
            </div>
        </div>
            })}
        </div>

        <div className='border-t-[1px] border-zinc-500 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
        

        <div className='start flex item-center gap-5'>
            <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-sm    uppercase rounded-full ">start the project</div>
            <div className="w-10 h-10 rounded-full flex justify-between items-center border-[1px] border-zinc-500 ">
                <span className='px-3 rotate-45'>
                    <FaArrowUpLong />
                </span>
            </div>
        </div>
    </div>
</div>
  )
}

export default LandingPage