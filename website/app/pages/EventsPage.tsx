import React from 'react';
import Section_2 from '@/components/EventPageComp/section_2';
import Section_3 from '@/components/EventPageComp/section_3';
import { getAllEvents } from '../actions/Event';

const EventsPage = async () => {
  const eventData = await getAllEvents();

  const now = new Date();

  const upcomingEvents = eventData.filter((event) => new Date(event.date) >= now);

  const previousEvents = eventData.filter((event) => new Date(event.date) < now);

  return (
    <div className="max-w-5xl mx-auto flex-col flex gap-32 p-5">
      <Section_2 EventData={upcomingEvents} />
      <Section_3 EventData={previousEvents} />
    </div>
  );
};

export default EventsPage;
