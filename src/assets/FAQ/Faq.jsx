import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    { question: "What is TechRise Rwanda?", answer: "TechRise Rwanda is an organization dedicated to empowering Rwandan youth through technology education, particularly in STEM (Science, Technology, Engineering, and Mathematics). Our goal is to equip young people with the skills and knowledge needed to thrive in a technology-driven world." },
    { question: "What programs does TechRise Rwanda offer?", answer: "We offer a variety of programs, including hands-on training in robotics, machine learning, coding, and data analysis. Our initiatives are designed to enhance STEM education and provide opportunities for youth to engage with emerging technologies." },
    { question: "Who can participate in TechRise Rwanda's programs?", answer: "Our programs are open to young people in Rwanda, with a particular focus on empowering marginalized groups, including girls and underrepresented communities, to ensure equal access to technology education." },
    { question: "How does TechRise Rwanda support gender equity in STEM?", answer: "TechRise Rwanda is committed to closing the gender gap in technology by creating inclusive programs that encourage girls to pursue STEM fields. We provide mentorship, workshops, and opportunities that address the unique challenges faced by women in tech." },
    { question: "How can I get involved with TechRise Rwanda?", answer: "You can get involved by joining one of our programs, attending our workshops, or participating in our events. We also welcome partnerships and volunteers who are passionate about promoting technology education in Rwanda." },
    { question: " What are the benefits of participating in TechRise Rwanda's programs?", answer: "Participants gain valuable skills in technology, including robotics, coding, and data analysis. Our programs are designed to enhance problem-solving abilities, foster creativity, and improve employability in the tech sector." },
    { question: "Does TechRise Rwanda collaborate with other organizations?", answer: "Yes, we collaborate with a range of partners, including educational institutions, tech companies, and non-profits, to provide the best learning opportunities and resources for our participants. Partnerships help us expand our impact and reach more youth." },
    { question: " How does TechRise Rwanda use technology to address local challenges?", answer: "We utilize technology to solve real-world problems in Rwanda, such as using AI for agricultural improvements and data analysis for urban planning. Our goal is to empower young people to create innovative solutions that address local needs." },
    { question: " What is the long-term vision of TechRise Rwanda?", answer: "Our long-term vision is to create a tech-savvy generation in Rwanda that is equipped to lead in the global economy. We aim to foster a culture of innovation, where youth are not just consumers of technology but creators and leaders in the tech space." },
  ];

  // State to track which FAQ is open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // Open the clicked FAQ; close others
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faqcontainer">
        <p className="subtitle block">Popular FAQs</p>
        <h2 className="title block">Frequently Asked Questions</h2>
        <div className="faq-grid block">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => handleClick(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
