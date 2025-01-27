import React from "react";
import { EventDataSchem } from "@/lib/data";

const PreviousEvents = ({ events }: { events: EventDataSchem }) => {
  return (
    <div
      key={events.EventName}
      className="relative h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${events.EventPicture})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold mb-1">
          {events.EventName}
        </h3>
        <p className="text-white text-sm">
          {new Date(events.EventDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PreviousEvents;
