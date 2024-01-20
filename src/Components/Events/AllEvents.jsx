import React, { useState } from "react";
import "./AllEvents.css";
import Data from "./data.json";

function AllEvents() {
  const [isPrevious, setisPrevious] = useState(true);
  const generateEventsCards = () => {
    return Data[`${!isPrevious ? "upcomingEvents" : "previousEvents"}`].map(
      (details, index) => (
        <div key={index} className="one-event-card">
          <img src={details["img-source"]} alt="" />
          <h2>{details["title"]}</h2>
          <p className="event-date">
            <i className="fa-regular fa-calendar"></i>
            {details["date"]}
          </p>
          <p className="on-off-mode">
            {" "}
            <i className="fa-solid fa-location-dot"></i>
            {details["location"]}
          </p>
          <button className="more-details-btn">View More</button>
        </div>
      )
    );
  };

  return (
    <div className="AllEvents">
      <h1>Events</h1>
      <div className="events-nav">
        <div
          className="previous-events"
          style={
            isPrevious
              ? { backgroundColor: "#713ca0" }
              : { backgroundColor: "#341b4b" }
          }
          onClick={() => {
            if (!isPrevious) {
              setisPrevious(!isPrevious);
            }
          }}
        >
          Previous Events
        </div>
        <div
          className="upcoming-events"
          style={
            isPrevious
              ? { backgroundColor: "#341b4b" }
              : { backgroundColor: "#713ca0" }
          }
          onClick={() => {
            if (isPrevious) {
              setisPrevious(!isPrevious);
            }
          }}
        >
          Upcoming Events
        </div>
      </div>
      {generateEventsCards()}
    </div>
  );
}

export default AllEvents;
