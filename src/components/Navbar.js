import React, { useState } from "react";
import { Link } from "react-router-dom";
import MedcoLogo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="navbar">
      {/* Left Side with Logo */}
      <div className="navbar-left">
        <Link to="/visualization">
          <img src={MedcoLogo} alt="Medco Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Right Side with Navigation Links */}
      <div className={`navbar-right ${openLinks ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/medterms">Medical Jargons</Link>
        <Link to="/tips">Health Recommendations</Link>
        <Link to="/about">About Us</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
