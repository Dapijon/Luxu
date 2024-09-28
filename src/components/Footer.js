// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/iconlogo.ico" alt="LuxuTrade Logo" className="footer-logo-img" />
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@luxutrade.com">info@luxutrade.com</a></p>
          </div>
          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="./images/facebook-sketched-logo-variant.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="/twitter-icon.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src="/linkedin-icon.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LuxuTrade. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
