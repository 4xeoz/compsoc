import React from 'react'
import Particles from "@/components/ui/particles";


const Background = () => {
  return (

        <Particles
            className="absolute inset-0"
            quantity={180}
            ease={20}
            refresh
        />
  )
}

export default Background