"use client";
import React from "react";
import { useState, useEffect } from "react";
import Carousel from "./Carousel";

const section_3 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    const pastEvents = EventData.filter(
      (event) => new Date(event.date) < new Date()
    );
    const latestPastEvent =
      pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : null;
    const upcomingEvents = EventData.filter(
      (event) => new Date(event.date) >= new Date()
    );

    if (latestPastEvent) {
      return (
        <div className="p-5">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 h-64">
              <div
                className="bg-gray-600 p-4 rounded relative"
                style={{
                  backgroundImage: `url(${latestPastEvent.picture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                <div className="absolute bottom-0 p-4 left-0">
                  <h3 className="relative z-10">
                    Previous - {latestPastEvent.date}
                  </h3>
                  <p className="relative z-10">{latestPastEvent.title}</p>
                </div>
              </div>
              <div
                className="bg-gray-600 p-4 rounded relative"
                style={{
                  backgroundImage: `url(${upcomingEvents[0].picture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                <div className="absolute bottom-0 p-4 left-0">
                  <h3 className="relative z-10">
                    Upcoming - {upcomingEvents[0].date}
                  </h3>
                  <p className="relative z-10">{upcomingEvents[0].title}</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <Carousel autoSlide autoSlideInterval={2000}>
                  {EventData.map((event, i) => (

                      <img
                        key={i}
                        src={event.picture}
                        alt={event.title}
                      />

                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="p-5">
      <div className="section-4__content">
        <h2 className="section-4__title">We are a global company PC</h2>
        <p className="section-4__text">
          We are a global company with offices in the US, Europe, and Asia. Our
          team is made up of professionals from all over the world, with diverse
          backgrounds and experiences.
        </p>
      </div>
    </div>
  );
};

export default section_3;

// interface EventCardProps {
//     title: string;
//     date: string;
//     description: string;
// }

// const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
//     return (
//         <div className="event-card">
//             <h3 className="event-card__title">{title}</h3>
//             <p className="event-card__date">{date}</p>
//             <p className="event-card__description">{description}</p>
//         </div>
//     );
// };

const EventData = [
  {
    title: "Event 1",
    description: "Description for event 1",
    date: "2023-10-01",
    picture: "https://via.placeholder.com/650/350",
  },
  {
    title: "Event 2",
    description: "Description for event 2",
    date: "2023-10-02",
    picture: "https://picsum.photos/seed/1/800/800",
  },
  {
    title: "Event 3",
    description: "Description for event 3",
    date: "2023-10-03",
    picture: "https://picsum.photos/seed/2/800/800",
  },
  {
    title: "Event 4",
    description: "Description for event 4",
    date: "2025-10-04",
    picture: "https://picsum.photos/seed/3/800/800",
  },
  {
    title: "Event 5",
    description: "Description for event 5",
    date: "2025-10-05",
    picture: "https://picsum.photos/seed/4/800/800",
  },
  {
    title: "Event 6",
    description: "Description for event 6",
    date: "2025-10-06",
    picture: "https://picsum.photos/seed/5/800/800",
  },
  {
    title: "Event 7",
    description: "Description for event 7",
    date: "2023-10-07",
    picture: "https://picsum.photos/seed/6/800/800",
  },
];
