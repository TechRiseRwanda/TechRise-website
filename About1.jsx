import React from "react";
import "./About.css"; // Import the styles
import TeamImg1 from "../Image/Cool.png"; // Replace with your actual image paths
import TeamImg2 from "../Image/Cool3.png";

const About = () => {
  return (
    <section className="about-section">
    <div className="container">
      <div className="content">
        {/* Images Section */}
        <div className="image-section">
          <img src={TeamImg1} alt="Team Collaboration 1" className="image image1" />
          <img src={TeamImg2} alt="Team Collaboration 2" className="image image2" />
        </div>
        {/* Text Section */}
        <div className="text-section">
          <span className="subtitle">About Us</span>
          <h2>
            About HighTech Agency And Its <br /> Innovative IT Solutions
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut
            interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat
            libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel
            gravida eros. Proin scelerisque quam nec elementum viverra.
          </p>
          <p>
            Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum,
            et malesuada augue laoreet.
          </p>
          <button className="details-button">More Details</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
