import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/Ploggify.png";

function Navbar() {
  return (
    <div id="navbar">
      <img src={logo} alt="" />
      <Link to="/">Home</Link>
      <Link to="/event">event</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/report">Report</Link>
    </div>
  );
}

export default Navbar;
