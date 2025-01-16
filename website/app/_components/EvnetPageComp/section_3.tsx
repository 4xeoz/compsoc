import React from 'react'
import { EventData, EventDataSchem } from '@/lib/data'
import PreviousEvents from './PreviousEvents'

const section_3 = () => {
  return (
    <div className='flex flex-col gap-10'>
        <h2>PREVIOUS EVENTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {EventData.filter(event => new Date(event.EventDate) < new Date()).slice(0, 4).map((event, i) => (
          <PreviousEvents key={i} events={event} />
        ))}
        </div>
    </div>
  )
}

export default section_3