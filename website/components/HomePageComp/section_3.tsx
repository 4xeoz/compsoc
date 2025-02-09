"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsMobile } from "@/lib/hooks";
import { getAllEvents } from "@/app/actions/Event";
import { Event } from "@prisma/client";

// Custom hook to fetch events from the API
const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const data = await getAllEvents();
      setEvents(data);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  return { events, loading };
};

// Helper function to filter events into past and upcoming
const filterEvents = (events: typeof useEvents extends () => { events: infer E } ? E : any) => {
  const now = new Date();
  const pastEvents = events.filter((event) => new Date(event.date) < now);
  const upcomingEvents = events.filter((event) => new Date(event.date) >= now);
  const latestPastEvent = pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : null;
  return { pastEvents, upcomingEvents, latestPastEvent };
};

// Reusable component to render an event card
const EventCard = ({
  event,
  label,
}: {
  event: { image: string | null; title: string; date: Date };
  label: string;
}) => (
  <div
    className="bg-gray-600 p-4 rounded relative"
    style={{
      backgroundImage: `url(${event.image}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    <div className="absolute bottom-0 p-4 left-0">
      <h3 className="relative z-10">
        {label} - {new Date(event.date).toLocaleDateString()}
      </h3>
      <p className="relative z-10">{event.title}</p>
    </div>
  </div>
);

const Section_3 = () => {
  const { events, loading } = useEvents();
  const isMobile = useIsMobile();

  if (loading) return <div>Loading...</div>;

  const {upcomingEvents, latestPastEvent } = filterEvents(events);
  const carouselEvents = events.slice(0, 6);


  if (!latestPastEvent) {
    return (
      <div>
        <h3>Not Found</h3>
      </div>
    );
  }

  // Mobile layout
  if (isMobile) {
    return (
      <div className="p-5">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4 h-64">
            <EventCard event={latestPastEvent} label="Previous" />
            {upcomingEvents[0] && <EventCard event={upcomingEvents[0]} label="Upcoming" />}
          </div>
          <div className="mt-4">
            <Carousel autoSlide autoSlideInterval={2000}>
              {carouselEvents.map((event, i) => (
                <img key={i} src={event.image ?? ""} alt={event.title} />
              ))}
            </Carousel>
          </div>
          <div className="flex justify-center mt-4">
            <Link href="/events">
              <Button variant="link">
                <h3>More Events</h3>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="p-5">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-4 h-64">
          <EventCard event={latestPastEvent} label="Previous" />
          {/* Duplicate previous event card intentionally (as in the original design) */}
          <EventCard event={latestPastEvent} label="Previous" />
          {upcomingEvents[0] && <EventCard event={upcomingEvents[0]} label="Upcoming" />}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 h-64">
          <EventCard event={latestPastEvent} label="Previous" />
          <div className="col-span-2">
            <Carousel autoSlide autoSlideInterval={2000}>
              {carouselEvents.map((event, i) => (
                <img key={i} src={event.image ?? ""} alt={event.title} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/events">
            <Button variant="link">
              <h3>More Events</h3>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
