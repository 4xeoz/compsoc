import React from 'react'
import Section1 from '@/app/_components/EvnetPageComp/section_1'
import Section2 from '@/app/_components/EvnetPageComp/section_2'
import Section3 from '@/app/_components/EvnetPageComp/section_3'

const EventsPage = () => {
  return (
    <div className='max-w-5xl mx-auto flex-col flex gap-32 p-5'>
        <Section1 />
        <Section2 />
        <Section3 />
    </div>
  )
}

export default EventsPage