import Robotic from '../Image/Robotic.jpg';
import Machine from '../Image/Machine.jpg';
import MainImg from '../Image/Background.jpg';
import React from "react";
import "./CaseStudies.css"; // Import the CSS file

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Robotic Automation",
      description: " Our robotics programs spark creativity and problem-solving, equipping participants for a future of automation.",
      image: Robotic,
    },
    {
      title: "Machine Learning",
      description: "Our machine learning programs provide young minds with AI skills, fostering a new wave of innovators ready to tackle real-world challenges with cutting-edge technology.",
      image: Machine,
    },
    {
      title: "Predictive Analysis",
      description: "Leveraging data for smarter solutions, we train youth in predictive analysis, enabling them to use insights and AI to address local and global challenges effectively.",
      image: MainImg,
    },
  ];

  return (
    <section className="case-studies-section">
      <div className="container1">
        <p className="subtitle2">Case Study</p>
        <h2 className="title">Explore Our Recent AI Case Studies</h2>
        <div className="card-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="card">
              <img src={study.image} alt={study.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{study.title}</h3>
                <p className="card-description">{study.description}</p>
                <a href="#" className="card-link">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
