import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2 className="footer-logo">TECHRISE</h2>
          <p>
          TechRise Rwanda is a youth-driven organization committed to advancing technology education,
          innovation, and entrepreneurship among Rwandan youth.
          </p>
        </div>
        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <a href=""><li>Robotic</li></a>
            <a href=""> <li>Development</li></a>
            <a href=""><li>Machine Learning</li></a>
            <a href=""><li>Futere Technology</li></a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>QUICK LINK</h3>
          <ul>
            <a href=""><li>Home</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Services</li></a>
            <a href=""><li>Contact Us</li></a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT INFO</h3>
          <ul>
            <li>1 KN 78 St, Kigali</li>
            <li>techriserwanda@gmail.com</li>
            <li>+250 786 062 005</li>
          </ul>
          <div className="social-icons2">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className='Divider'/>
        <p>&copy; 2024 Crafted by <span className="highlight">Techrise</span> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
