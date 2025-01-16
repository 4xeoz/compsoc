"use client";
import React from "react";
import Carousel from "./Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EventData } from "@/lib/data";
import { useIsMobile } from "@/lib/hooks";

const section_3 = () => {
    
    const isMobile = useIsMobile();

    const pastEvents = EventData.filter(
        (event) => new Date(event.EventDate) < new Date()
    );
    const latestPastEvent =
        pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : null;
    const upcomingEvents = EventData.filter(
        (event) => new Date(event.EventDate) >= new Date()
    );

    if (!latestPastEvent)
        return (
            <div>
                <h3>not Found</h3>
            </div>
        );

    if (isMobile) {
        return (
            <div className="p-5">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 gap-4 h-64">
                        <div
                            className="bg-gray-600 p-4 rounded relative"
                            style={{
                                backgroundImage: `url(${latestPastEvent.EventPicture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                            <div className="absolute bottom-0 p-4 left-0">
                                <h3 className="relative z-10">
                                    Previous - {latestPastEvent.EventDate}
                                </h3>
                                <p className="relative z-10">{latestPastEvent.EventName}</p>
                            </div>
                        </div>
                        <div
                            className="bg-gray-600 p-4 rounded relative"
                            style={{
                                backgroundImage: `url(${upcomingEvents[0].EventPicture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                            <div className="absolute bottom-0 p-4 left-0">
                                <h3 className="relative z-10">
                                    Upcoming - {upcomingEvents[0].EventDate}
                                </h3>
                                <p className="relative z-10">{upcomingEvents[0].EventName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="">
                            <Carousel autoSlide autoSlideInterval={2000}>
                                {EventData.map((event, i) => (
                                    <img key={i} src={event.EventPicture} alt={event.EventName} />
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
    }

    return (
        <div className="p-5">
            <div className="flex flex-col">
                <div className="grid grid-cols-3 gap-4 h-64">
                    <div
                        className="bg-gray-600 p-4 rounded relative"
                        style={{
                            backgroundImage: `url(${latestPastEvent.EventPicture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                        <div className="absolute bottom-0 p-4 left-0">
                            <h3 className="relative z-10">
                                Previous - {latestPastEvent.EventDate}
                            </h3>
                            <p className="relative z-10">{latestPastEvent.EventName}</p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-600 p-4 rounded relative"
                        style={{
                            backgroundImage: `url(${latestPastEvent.EventPicture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                        <div className="absolute bottom-0 p-4 left-0">
                            <h3 className="relative z-10">
                                Previous - {latestPastEvent.EventDate}
                            </h3>
                            <p className="relative z-10">{latestPastEvent.EventName}</p>
                        </div>
                    </div>
                    <div
                        className="bg-gray-600 p-4 rounded relative"
                        style={{
                            backgroundImage: `url(${upcomingEvents[0].EventPicture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                        <div className="absolute bottom-0 p-4 left-0">
                            <h3 className="relative z-10">
                                Upcoming - {upcomingEvents[0].EventDate}
                            </h3>
                            <p className="relative z-10">{upcomingEvents[0].EventName}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 h-64">
                    <div
                        className="bg-gray-600 p-4 rounded relative"
                        style={{
                            backgroundImage: `url(${latestPastEvent.EventPicture}), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                        <div className="absolute bottom-0 p-4 left-0">
                            <h3 className="relative z-10">
                                Previous - {latestPastEvent.EventDate}
                            </h3>
                            <p className="relative z-10">{latestPastEvent.EventName}</p>
                        </div>
                    </div>
                    <div className=" col-span-2">
                        <Carousel autoSlide autoSlideInterval={2000}>
                            {EventData.map((event, i) => (
                                <img key={i} src={event.EventPicture} alt={event.EventName} />
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
export default section_3;
