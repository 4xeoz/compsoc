import React from 'react'
import Section1 from '../_components/HomePageComp/section_1'
import Section2 from '../_components/HomePageComp/section_2'
import Section3 from '../_components/HomePageComp/section_3'
import Section4 from '../_components/HomePageComp/section_4'
import Section5 from '../_components/HomePageComp/section_5'
import Background from '../_components/HomePageComp/Background'

const HomePage = () => {
  return (
    <div className='max-w-5xl mx-auto flex-col flex gap-32'>
      <Background />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default HomePage