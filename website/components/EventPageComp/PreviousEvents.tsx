import React from "react";
import { Event } from "@prisma/client";

const PreviousEvents = ({ event }: { event: Event }) => {
  return (
    <div
      key={event.title}
      className="relative h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold mb-1">
          {event.title}
        </h3>
        <p className="text-white text-sm">
          {new Date(event.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PreviousEvents;
