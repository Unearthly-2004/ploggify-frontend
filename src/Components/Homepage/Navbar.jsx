import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/Ploggify.png";
import user from "../Images/user.png";

// Updated component for the hamburger menu
const HamburgerMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="hamburger-menu">
      <button onClick={onClose} className="close-btn">×</button>
      <div id="signinup">
        <Link to="/signin" onClick={onClose}>Sign in</Link>
        <Link to="/login" onClick={onClose}>Sign up</Link>
      </div>
    </div>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar">
      <img src={logo} alt="Ploggify Logo" className="logo" />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/event">Event</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/report">Report</Link>
      </div>
      <img
        src={user}
        alt="User Account"
        className="user-icon"
        onClick={toggleMenu}
      />
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default Navbar;