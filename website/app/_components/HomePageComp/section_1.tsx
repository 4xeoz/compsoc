import React from 'react'
import Particles from "@/components/ui/particles";

import { IoArrowDownCircleSharp } from "react-icons/io5";



const section_1 = () => {
  return (
    <div className='p-5 relative overflow-hidden h-[80vh]'>
        <Particles
            className="absolute inset-0"
            quantity={100}
            ease={20}
            refresh
        />
        <div className='mt-16 w-72 h-72 mx-auto flex flex-col items-center justify-center relative'>
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo_opacity_50.png" alt="CompSoc Logo" className="w-fit h-fit object-contain" />
            </div>
            <div className="text-center relative z-10 flex flex-col items-center gap-5 mt-20">
                <h1 className='bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>CompSoc</h1>
                <h3 className=''>University of Surrey's Technology society</h3>
                <div className='p-5'>
                    <IoArrowDownCircleSharp size={28} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default section_1