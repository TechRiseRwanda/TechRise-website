import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css'; // Import the CSS file
import MainImg2 from '../Image/Cool3.png';

const AboutSection = () => {
  // Intersection Observer to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5,    // Trigger when 50% of the element is visible
  });

  // State to manage counting animation
  const [startCounting, setStartCounting] = useState(false);

  // Start counting when the section is in view
  if (inView && !startCounting) {
    setStartCounting(true);
  }

  return (
    <section className="about-section" ref={ref}>
      <div className="about-container">
        {/* Left side image */}
        <div className="about-image">
          <img src={MainImg2} alt="About Us" />
        </div>
        
        {/* Right side content */}
        <div className="about-content">
          <p className="section-subtitle block">WELCOME</p>
          <h2 className="section-title block">Know <span>More About</span>.</h2>
          <h3 className='block'>TechRise Rwanda</h3>
          <p className="about-description block">
          TechRise Rwanda is a youth-driven organization committed to advancing technology education,
          innovation, and entrepreneurship among Rwandan youth. Founded with the vision of creating a more
          inclusive, tech-savvy society, TechRise Rwanda focuses on equipping young people with essential skills in
          technology, robotics, and STEM (Science, Technology, Engineering, and Mathematics) to help them
          realize their full potential as future leaders and problem-solvers. 
          </p>

          {/* Statistics */}
          <div className="stats-container">
            <div className="stat-item">
              {startCounting && (
                <CountUp start={0} end={30} duration={2} delay={0}>
                  {({ countUpRef }) => <span ref={countUpRef} className="stat-number" />}
                </CountUp>
              )}
              <p className="stat-text">Events</p>
            </div>
            <div className="stat-item">
              {startCounting && (
                <CountUp start={0} end={170} duration={2.5} delay={0.5}>
                  {({ countUpRef }) => <span ref={countUpRef} className="stat-number" />}
                </CountUp>
              )}
              <p className="stat-text">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
