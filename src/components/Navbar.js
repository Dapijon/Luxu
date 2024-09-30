import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="iconlogo.png" alt="LuxuTrade Logo" />
        <span className="navbar-title">LuxuTrade</span>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Side Panel for Mobile */}
      <div className={`side-panel ${isOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><a href="#hero" onClick={handleToggle}>Home</a></li>
          <li><a href="#about" onClick={handleToggle}>About</a></li>
          <li><a href="#product" onClick={handleToggle}>Products</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
