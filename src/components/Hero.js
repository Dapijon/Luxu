// components/Hero.js
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to LuxuTrade</h1>
        <p>Your trusted partner for trade solutions</p>
        <a href="#product" className="hero-btn">View Products</a>
      </div>
    </div>
  );
};

export default Hero;
