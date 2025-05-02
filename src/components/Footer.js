// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../components/assets/logo.jpg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p><i className="fas fa-broadcast-tower"></i> <strong>Voice Fm</strong></p>
        <p><i className="fas fa-briefcase"></i> Voice FM is a commercial radio station that was established in 2024.</p>
        <p><i className="fas fa-map-marker"></i> Tshitereke village (Vhembe District) and Western Cape</p>
        
      </div>

      <div className="footer-center">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>© 2025 Voice FM 1105. All rights reserved.</p>
        <p className="footer-dev">Developed by P3.dev</p>
      </div>

      <div className="footer-right">
        <div className="social-icons">
          <a href="https://wa.me/0725173730" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+2272 517 3730">
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
        <p> Marketing</p>
        <p><i className="fas fa-phone"></i>: 072 809 9123</p>
        <p><i className="fas fa-envelope"></i>: DzivhuPhathu@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
