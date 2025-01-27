import React from 'react'
import Particles from "@/components/ui/particles";
import GlowCircle from '../ui/GlowCircle';


const Background = () => {
  return (
    <>
    {/* <GlowCircle size={600} color="rgba(0, 123, 255, 0.8)" blur={400} opacity={0.8} position={{ top: "100%", left: "100%" }} /> */}
    <GlowCircle size={600} color="rgba(158, 43, 226, 0.8)" blur={400} opacity={0.8} position={{ top: "10%", left: "0%" }} />
    <GlowCircle size={600} color="rgba(158, 43, 226, 0.8)" blur={400} opacity={0.8} position={{ top: "180%", left: "00%" }} />

    <Particles className="absolute inset-0" quantity={180} ease={20} refresh />
    </>
  )
}

export default Background