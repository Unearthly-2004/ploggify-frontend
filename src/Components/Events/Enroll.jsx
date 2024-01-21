import React, { useState } from "react";
import "../Report/Report.css";
import { useParams } from "react-router-dom";
function Enroll() {
  const { id } = useParams();
  const [isenrolled, setisenrolled] = useState(false);
  return (
    <div id="report">
      <h1>Enroll Now for {id}</h1>
      <label htmlFor="report-location">Name</label>
      <input type="text" id="report-location" placeholder="enter you Name" />
      <label htmlFor="report-location">Email</label>
      <input type="email" id="report-location" placeholder="enter you email" />
      <label htmlFor="report-location">Phone number</label>
      <input
        type="number"
        id="report-location"
        placeholder="enter you phone number"
      />
      <button
        onClick={() => {
          if (!isenrolled) {
            window.alert(
              "Are you sure you want to enroll , if you would not present after enrollment your 10 points can be decreased ."
            );
            setisenrolled(true);
          } else {
            window.alert("you have already enrolled");
          }
        }}
      >
        Enroll
      </button>
    </div>
  );
}

export default Enroll;
