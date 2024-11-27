import React from "react";
import "./Background.css"; // Custom CSS for styles
import MainImg from '../Image/Background.jpg'; // Replace with your image path
import MainImg2 from '../Image/Sec-Image.png';
import 'animate.css'

function Background() {
  return (
    <div className="main-section">
      {/* Background Image */}
      <div
        className="hero-section d-flex align-items-center text-center text-lg-start"
        style={{
          backgroundImage: `url(${MainImg })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 text-white">
              <h1 className="hero-title animate__animated animate__fadeInLeft">Empowering the Next Generation through Technology and Innovation</h1>
              <p className="hero-subtitle animate__animated animate__fadeInLeft">
              TechRise Rwanda is a youth-driven organization committed to advancing technology education,
              innovation, and entrepreneurship among Rwandan youth. 
              </p>
              <button className="btn btn-primary btn-explore animate__animated animate__fadeInLeft">
                Explore Now →<i className="bi bi-arrow-right"></i>
              </button>
            </div>
            {/* Right Image */}
            {/* <div className="col-lg-6 d-none d-lg-block">
              <img
                src={MainImg2 } // Replace with the appropriate image if different
                alt="Illustration"
                className="img-fluid animate__animated animate__fadeInRight"
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* Shape Divider */}
      <div className="shape-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ display: "block", width: "100%", height: "auto" }}
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,213.3C96,235,192,277,288,266.7C384,256,480,192,576,160C672,128,768,128,864,144C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Background;
