import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo192.png" alt="Logo" />
        <ul className="navbar-menu">
          <li><a href="#home">Product</a></li>
          <li><a href="#services">Use cases</a></li>
          <li><a href="#about">Templates</a></li>
          <li><a href="#contact">Pricing</a></li>
          <li><a href="#contact">Book demo</a></li>
          <li><a href="#contact">Reviews</a></li>

        </ul>
      </div>

      <div className="navbar-buttons">
        <button className="login-btn">Log 
          in</button>
        <button className="startfree-btn">Start Free</button>
      </div>
    </nav>
  );
}

export default Navbar;
