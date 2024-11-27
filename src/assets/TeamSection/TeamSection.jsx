import React from "react";
import "./TeamSection.css"; // CSS file for styles
import MainImg from "../Image/Background.jpg"; // Ensure the path is correct
import Josiane from "../Image/Josiane.jpg"; 
import Yvette from "../Image/Yvete.jpg"; 
import Promise from "../Image/Promise.jpg"; 
import Ben from "../Image/Ben.jpg"; 

const TeamSection = () => {
  // Updated array with six team members
  const teamMembers = [
    {
      name: "ISHIMWE Ben",
      role: "Founder & CEO",
      img: Ben,
      socials: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "MUKESHIMANA Josiane",
      role: "COO",
      img: Josiane,
      socials: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Yvette IGIRANEZA Yvette",
      role: "COO",
      img: Yvette,
      socials: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "IZERE INEZA Promise",
      role: "IT Manager",
      img: Promise,
      socials: ["facebook", "twitter", "instagram", "linkedin"],
    },
    // {
    //   name: "Boris Johnson",
    //   role: "Founder & CEO",
    //   img: MainImg, // Duplicate member
    //   socials: ["facebook", "twitter", "instagram", "linkedin"],
    // },
    // {
    //   name: "Kate Winslet",
    //   role: "Co Founder",
    //   img: MainImg, // Duplicate member
    //   socials: ["facebook", "twitter", "instagram", "linkedin"],
    // },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="Header block">Meet Our Experienced Team Members</h2>
        <p className="block">
        Our dedicated team at TechRise Rwanda is passionate about inspiring and educating the next generation of tech leaders.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} className="profile-pic" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-icons">
                {member.socials.map((social, i) => (
                  <a href="#" key={i} className={`icon ${social}`}>
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
