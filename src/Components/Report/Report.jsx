import React from "react";
import "./Report.css";
function Report() {
  return (
    <div id="report">
      <h1>Report</h1>
      <label htmlFor="report-location">Location</label>
      <input
        type="text"
        id="report-location"
        placeholder="enter you location"
      />
      <label htmlFor="report-description">Description</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="describe you problem"
      ></textarea>

      <input type="file" name="report-photo" id="report-photo" />
      <button>Report</button>
    </div>
  );
}

export default Report;
