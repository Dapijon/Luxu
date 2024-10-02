import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <h4 className="about-title">ABOUT US</h4>
        <h2 className="about-heading">Bridging continents for you</h2>
        <p className="about-description">
          LuxuTrade is an Australian-owned business based in Nairobi, dedicated
          to facilitating the seamless import and export of essential goods
          between Australia and East Africa. We specialize in providing
          high-quality sugar, cooking oil, beddings, computers, and various
          essential items to meet your needs. Join us in creating a prosperous
          trading environment that benefits both regions.
        </p>
        <a href="#contact" className="about-link">Get in touch</a>
      </div>
      <div className="about-image">
        <img src="./images/typing.jpg" alt="Person typing on laptop" />
      </div>
    </div>
  );
};

export default About;
