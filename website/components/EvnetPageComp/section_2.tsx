'use client';
import { EventData, EventDataSchem } from '@/lib/data'
import React from 'react'
import Image from 'next/image'
import { CalendarDays, MapPin, Clock } from 'lucide-react'
import { useIsMobile } from '@/lib/hooks'
import { Event } from '@prisma/client';

const section_2 = ({EventData} : {EventData : Event[]}) => {

  const isMobile = useIsMobile();

  return (
    <div>
       <h2 className="mb-6">UPCOMING EVENTS</h2>
        <div className="grid gap-5">
        {EventData.map((event) => (
          <EventCard key={event.title} event={event} isMobile={isMobile} /> 
        ))}
      </div>
    </div>
  )
}

export default section_2



const EventCard = ({ event, isMobile }: { event: Event; isMobile: boolean }) => {
  return (
    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-10">
  {/* First Column (Image) */}
  <div className="relative h-64 col-span-1 md:col-span-1">
    <Image 
      src={event.image || '/path/to/default/image.jpg'} 
      alt={event.title} 
      layout="fill" 
      objectFit="cover" 
    />
  </div>

  {/* Second Column (Content) */}
  <div className=" col-span-1 md:col-span-2 ">
    <div className="flex flex-wrap items-center text-secondary-foreground mb-2 gap-4">
      <div className="flex items-center">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>{event.date.getDate()}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-2" />
        <span>{event.date.getTime()}</span>
      </div>
    </div>

    <h2 className="mb-2">{event.title}</h2>
    <p>{event.description}</p>
  </div>
</div>

  )
}   
