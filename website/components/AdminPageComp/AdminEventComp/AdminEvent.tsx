
import React from 'react'
import { getAllEvents } from '@/app/actions/Event';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { Event } from '@prisma/client';
import {Button} from '@/components/ui/button';


const AdminEvent = async () => {
    const eventData = await getAllEvents();

    return (
        <div className=" flex flex-col gap-5">
           <div className="flex justify-between items-center bg-card p-5 rounded-md ">
                <h2>Events</h2>
                <Button variant="default"><p>Add Event</p></Button>

           </div>
           <div className='overflow-y-scroll h-[89vh] '>
                {eventData.map((event: any, index: number) => (
                    <EventCard key={index} {...event} />
                ))}
           </div>

        </div>
    );
}

export default AdminEvent;

function EventCard({ date, title, description, location, image }: Event) {
    return (
    <Card className="overflow-hidden rounded-md mb-5">
      <CardContent className="p-0">
        <div className="grid grid-cols-5 gap-3 h-40">
          {/* Image Container */}
          <div className="relative w-full h-full bg-gray-100 col-span-1">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw" // Adjust as needed for responsiveness
            />
          </div>
          
          {/* Content */}
          <div className="p-3 col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-semibold truncate">{title}</h3>
                <div className="flex items-center text-xs text-muted-foreground">
                  <FaCalendarAlt className="mr-1 h-3 w-3" />
                  {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <FaMapMarkerAlt className="mr-1 h-3 w-3" />
                {location}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
