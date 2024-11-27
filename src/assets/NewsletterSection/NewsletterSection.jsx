import React from "react";
import "./NewsletterSection.css"; // Import the CSS file for styling
import RobotHand from "../Image/Sec-Image.png"; // Replace with actual image path

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="Newscontainer">
        <div className="content">
          <span className="badge">Newsletter</span>
          <h2>Let's subscribe the newsletter</h2>
          <p>Be the first to know about our latest features, updates, and exclusive offers that make future technology breeze.</p>
          <div className="form-container">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="email-input"
            />
            <button type="submit" className="submit-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src={RobotHand} alt="Robot Hand" className="robot-hand" />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
