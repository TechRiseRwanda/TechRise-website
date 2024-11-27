import React from "react";
import "./PartnershipsSection.css"; // CSS file for styling

const PartnershipsSection = () => {
  const partners = [
    { name: "ICT Chamber", icon: "📡" },
    { name: "SmartCity Hub", icon: "🏙️" },
    { name: "Shelter Them", icon: "🏠" },
    { name: "Hope Foundation", icon: "✨" },
    { name: "ALU Students Club", icon: "🎓" },
    { name: "Coderina", icon: "💻" },
    { name: "Nanjye Ni BK", icon: "🏦" },
    { name: "AIMS", icon: "📘" },
    { name: "kLab", icon: "💡" },
    { name: "Fablab", icon: "⚙️" },
    { name: "Girls in ICT", icon: "👩‍💻" },
    { name: "African Drone and Data Academy", icon: "🚁" },
    { name: "WeCode Rwanda", icon: "🧑‍💻" },
    { name: "Robotics Clubs and Networks", icon: "🤖" },
  ];

  return (
    <section className="partnerships-section">
      <div className="container">
        {/* Title and Description */}
        <div className="header block">
          <h2>Partnerships and Collaborations</h2>
          <p className="block">
            TechRise Rwanda is eager to collaborate with American Spaces to leverage their
            resources and network to enhance our initiatives. We believe that working together
            can significantly amplify our impact and foster a more tech-savvy and innovative youth
            community in Rwanda.
          </p>
          <hr className="partnerships-divider"/>
        </div>
        {/* Grid of Partners */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <div className="icon">{partner.icon}</div>
              <h3>{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
