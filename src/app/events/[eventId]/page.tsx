"use client";

import React from "react";

interface EventDetailProps {
  params: { eventId?: string };
}

//^ dummy-file.ts
import { getEventById } from "../../../../dummy-file";

//^ components
import EventSummary from "@/components/event-detail/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-detail/event-content";

const EventDetail: React.FC<EventDetailProps> = ({ params }) => {
  //^ getting the single detail of a event by using it param's ID.
  const eventDetail = getEventById(params.eventId as string);

  if(!eventDetail) {
    return <>
      <div>
        <h1>Event NOT FOUND!</h1>
      </div>
    </>
  }

  return (
    <>
      <EventSummary title={eventDetail?.title} />
      <EventLogistics
        address={eventDetail?.location}
        date={eventDetail?.date}
        image={eventDetail?.image}
        imageAlt={eventDetail?.title}
      />
      <EventContent>
        <p>{eventDetail?.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetail;
