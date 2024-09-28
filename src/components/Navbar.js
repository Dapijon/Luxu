// components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="iconlogo.ico" alt="LuxuTrade Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#product">Products</a></li>
      </ul>
      <button className="contact-btn">
        <a href="#contact">Contact</a>
      </button>
    </nav>
  );
};

export default Navbar;
