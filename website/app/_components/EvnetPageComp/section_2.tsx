'use client';
import { EventData, EventDataSchem } from '@/lib/data'
import React from 'react'
import Image from 'next/image'
import { CalendarDays, MapPin, Clock } from 'lucide-react'
import { useIsMobile } from '@/lib/hooks'

const section_2 = () => {

  const isMobile = useIsMobile();

  return (
    <div>
       <h2 className="mb-6">UPCOMING EVENTS</h2>
        <div className="grid gap-5">
        {EventData.filter(event => new Date(event.EventDate) > new Date()).map((event) => (
          <EventCard key={event.EventName} event={event} isMobile /> 
        ))}
      </div>
    </div>
  )
}

export default section_2



const EventCard = ({ event, isMobile }: { event: EventDataSchem; isMobile: boolean }) => {
  return (
    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-10">
  {/* First Column (Image) */}
  <div className="relative h-64 col-span-1 md:col-span-1">
    <Image 
      src={event.EventPicture} 
      alt={event.EventName} 
      layout="fill" 
      objectFit="cover" 
    />
  </div>

  {/* Second Column (Content) */}
  <div className=" col-span-1 md:col-span-2 ">
    <div className="flex flex-wrap items-center text-secondary-foreground mb-2 gap-4">
      <div className="flex items-center">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>{event.EventDate}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{event.EventLocation}</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-2" />
        <span>{event.EventStartTime}</span>
      </div>
    </div>

    <h2 className="mb-2">{event.EventName}</h2>
    <p>{event.EventDescription}</p>
  </div>
</div>

  )
}   
