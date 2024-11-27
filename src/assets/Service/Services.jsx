import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      {/* Left Section */}
      <div className="services-header">
        <div className="header-content block">
          <span className="services-label">Our Services</span>
          <h2>Our Excellent IT Solutions for Your Future</h2>
          <p>
          At TechRise Rwanda, we offer a wide range of services designed to equip young people with essential skills in technology, robotics, and STEM. Our programs are crafted to foster creativity, innovation, and entrepreneurship while addressing real-world challenges.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>

      {/* Right Section (Cards Grid) */}
      <div className="services-grid">
        <div className="service-card">
          <div className="icon">🤖</div>
          <h3>Robotic Automation</h3>
          <p>
          Empowering youth through hands-on robotics training, TechRise Rwanda focuses on providing the skills needed to build and operate robotic systems.
          </p>
          <button className="read-more-link">Read More</button>
        </div>
        <div className="service-card">
          <div className="icon">🎓</div>
          <h3>Education & Science</h3>
          <p>
          TechRise Rwanda is dedicated to advancing STEM education, particularly among marginalized groups.
          </p>
          <button className="read-more-link">Read More</button>
        </div>
        <div className="service-card">
          <div className="icon">⚡</div>
          <h3>Machine Learning</h3>
          <p>
          As the future of work evolves, TechRise Rwanda empowers young people with machine learning and AI skills.
          </p>
          <button className="read-more-link">Read More</button>
        </div>
        <div className="service-card">
          <div className="icon">🧠</div>
          <h3>Predictive Analysis</h3>
          <p>
          At TechRise Rwanda, we utilize data analysis and AI to tackle real-world challenges, particularly in areas like agriculture and urban development.
          </p>
          <button className="read-more-link">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
