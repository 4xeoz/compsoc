import React from 'react'
import PreviousEvents from './PreviousEvents'
import { Event } from "@prisma/client";

const section_3 = ({EventData} : {EventData : Event[]}) => {
  return (
    <div className='flex flex-col gap-10'>
        <h2>PREVIOUS EVENTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {EventData.map((event, i) => (
          <PreviousEvents key={i} event={event} />
        ))}
        </div>
    </div>
  )
}

export default section_3