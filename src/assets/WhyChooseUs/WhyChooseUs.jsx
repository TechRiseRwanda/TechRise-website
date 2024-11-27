import React from "react";
import "./WhyChooseUs.css";
import MainImg2 from '../Image/Cool.png'; // Replace with the actual image file path

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      {/* Left Content Section */}
      <div className="content block">
        <span className="label">Why Choose Us</span>
        <h2>
        Empowering Rwanda’s Youth <br /> Through Technology
        </h2>
        <p>
        At TechRise Rwanda, we believe in transforming young minds into future leaders of innovation and technology. With our passion for technology education and entrepreneurship, we provide the resources, guidance, and opportunities that help Rwandan youth excel in the tech-driven world.
        </p>
        <ul className="benefits-list">
          <li>☑️ Youth-Centered Innovation</li>
          <li>☑️ Hands-On Learning Approach</li>
          <li>☑️ Commitment to Excellence</li>
          <li>☑️ Building Future Leaders</li>
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="image-section block">
        <img src={MainImg2} alt="Robot" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
