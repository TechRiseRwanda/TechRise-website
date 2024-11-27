import React from 'react';
import './Component.css'; // Import the CSS file

const servicesData = [
  {
    title: 'Technology & Robotics Education',
    description: `At the heart of TechRise Rwanda is the belief that technology is the key to solving many of the
                  world's most pressing challenges.`,
    iconClass: 'fas fa-drafting-compass', // Example FontAwesome icon class
    gradient: 'linear-gradient(to bottom, #00c6ff, #0072ff)', // Gradient for icon background
  },
  {
    title: 'Gender Equity in STEM',
    description: `We recognize that gender stereotypes discourage many girls from pursuing STEM fields.`,
    iconClass: 'fas fa-pen-nib',
    gradient: 'linear-gradient(to bottom, #f54ea2, #ff7676)',
  },
  {
    title: 'Empowering Marginalized Youth',
    description: `We place a special emphasis on providing underprivileged youth—such as street children,`,
    iconClass: 'fas fa-briefcase',
    gradient: 'linear-gradient(to bottom, #42e695, #3bb2b8)',
  },
];

const Component = () => {
  return (
    <section className="services-section1 block">
      <div className="services-container1">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <div
              className="service-icon"
              style={{ background: service.gradient }}
            >
              <i className={service.iconClass}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Component;
