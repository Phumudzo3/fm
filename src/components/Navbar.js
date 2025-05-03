import React from 'react';
import './Navbar.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../components/assets/logo.jpg'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-center">
      <ul className="nav-links">
  <li><a href="/">Home</a></li>
  <li><a href="#live">Live</a></li>
  <li><a href="#adverts">Adverts</a></li>
</ul>
        <p className="welcome-message">
        
        </p>
      </div>

      <div className="navbar-right">
        <a href="https://web.facebook.com/people/VOICE-FM/61568759630987/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
