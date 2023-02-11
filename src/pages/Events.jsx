import React from "react";
import Customers from "../components/Customers";
import Events from "../components/Events";
import EventsBar from "../components/EventsBar";
import NavBar from "../components/NavBar";
import UpcomingEvents from "../components/UpcomingEvents";

const EventsPage = () => {
  return (
    <div>
      <NavBar />
      <Events />
      <EventsBar />
      <UpcomingEvents />
      <Customers />
    </div>
  );
};

export default EventsPage;
