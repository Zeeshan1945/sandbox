import React from "react";
import "@/Styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="containf">
        <div className="community">
          <h4>Join the Community</h4>
          <p>
            Let's make something great together. We are <br />
            trusted by over 5000+ clients. Join them by <br />
            using our services and grow your business.
          </p>
          <button>Join Us</button>
        </div>
        <div className="help">
          <h4>Need Help?</h4>
          <ul>
            <li>Support</li>
            <li>Get Started</li>
            <li>Terms of Use</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div className="learn">
          <h4>Learn More</h4>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Projects</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="address">
          <h4>Get in Touch</h4>
          <p>
            Moonshine St. 14/05 <br />
            Light City, London, <br />
            United Kingdom
          </p>
          <p>
            info@email.com <br />
            00 (123) 456 78 90
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
