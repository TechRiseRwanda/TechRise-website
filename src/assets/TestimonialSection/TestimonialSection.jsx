import React, { useState } from "react";
import "./TestimonialSection.css";
import ClientImg from "../Image/Background.jpg"; // Replace with the actual client image path

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "TechRise Rwanda opened the door to a world of opportunities I never imagined. The hands-on experience with robotics not only boosted my technical skills but also gave me the confidence to pursue a career in technology. I am grateful for their dedication to empowering young people like me!",
      name: "Mugisha Gentil",
      profession: "Software",
      img: ClientImg,
    },
    {
      text: "As a young woman interested in STEM, I often felt isolated in my pursuit of tech skills. TechRise Rwanda’s supportive environment, mentorship, and inclusive programs helped me break barriers. Now, I’m a data analyst in a growing tech company, thanks to their guidance!",
      name: "Burabyo Stessy",
      profession: "Designer",
      img: ClientImg,
    },
    {
      text: "The machine learning workshops at TechRise Rwanda have been life-changing. I gained practical knowledge in AI and learned how to apply it to solve real-world problems. The program has set me on a clear path toward a tech-driven future.",
      name: "Byiringiro Urban",
      profession: "Developer",
      img: ClientImg,
    },
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonial-section">
      <div className="mycontainer">
        <div className="testimonial-content">
          <div className="left-section ">
            <span className="badge block">Testimonial</span>
            <h2>What Say Our Clients!</h2>
            <p>
            Hear from the young innovators whose lives have been transformed by TechRise Rwanda. Our programs have inspired many to pursue careers in technology, empowering them with the skills and confidence to make a difference in their communities and beyond. From hands-on robotics training to AI and data analysis, our participants are the true testament to the impact of our work.
            </p>
            <button className="btn-read-more">Read More</button>
          </div>

          <div className="right-section">
            <div className="testimonial-card">
              <p className="testimonial-text">
                <i className="fas fa-quote-left"></i> {testimonials[currentTestimonial].text}
              </p>
              <div className="client-info">
                <img
                  src={testimonials[currentTestimonial].img}
                  alt={testimonials[currentTestimonial].name}
                  className="client-img"
                />
                <div>
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].profession}</p>
                </div>
              </div>
            </div>
            <div className="controls">
              <button onClick={handlePrev} className="arrow prev">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onClick={handleNext} className="arrow next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${
                    currentTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
