import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from '../Image/Logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          scrolled ? "navbar-scrolled" : "navbar-default"
        }`}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <span className="logo"><img src={Logo} alt=""  style={{width: '70px', height: '70px'}}/></span>
          </a>

          {/* Hamburger Icon */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="">
                About
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                Programm
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );  
}

export default Header;
