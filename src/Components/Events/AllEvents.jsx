import React, { useState } from "react";
import "./AllEvents.css";
import Data from "./data.json";

function AllEvents() {
  const [isPrevious, setisPrevious] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollClick = (eventDetails) => {
    if (!isEnrolled) {
      const willEnroll = window.confirm(
        `Are you sure you want to enroll in the event "${eventDetails.title}"? If you are not present after enrolling, your 10 points may be decreased.`
      );

      if (willEnroll) {
        setIsEnrolled(true);
        window.alert("You have successfully enrolled.");
      } else {
        window.alert("You have not enrolled.");
      }
    } else {
      window.alert("You have already enrolled.");
    }
  };

  const generateEventsCards = () => {
    const filteredEvents = Data[
      `${!isPrevious ? "upcomingEvents" : "previousEvents"}`
    ].filter(
      (event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organiser.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredEvents.map((details, index) => (
      <div key={index} className="one-event-card">
        <img src={details["img-source"]} alt={details.title} />
        <h2>{details["title"]}</h2>
        <p className="event-date">
          <i className="fa-regular fa-calendar"></i>
          {details["date"]}
        </p>
        <p className="on-off-mode">
          <i className="fa-solid fa-location-dot"></i>
          {details["location"]}
        </p>
        <p className="on-off-mode">
          <i className="fa-solid fa-group-arrows-rotate"></i>
          {details["organiser"]}
        </p>

        <div>
          <button className="more-details-btn">View More</button>
          {!isPrevious && (
            <button
              onClick={() => handleEnrollClick(details)}
            >
              Enroll
            </button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="AllEvents">
      <h1>
        Events{" "}
        <div className="input-container">
          <input
            type="text"
            name="text"
            className="input"
            placeholder="search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="icon">
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="1"
                  d="M14 5H20"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="1"
                  d="M14 8H17"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="1"
                  d="M22 22L20 20"
                  stroke="#000"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </h1>
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