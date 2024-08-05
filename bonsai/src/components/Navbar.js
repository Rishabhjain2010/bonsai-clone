import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg"
          alt="Logo"
        />
      </div>
      <div>
        <ul className="navbar-elements">
          <div>
            <li>
              <a href="#products">Products</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#Use cases">Use cases</a>
            </li>
          </div>
          <div>
            <li>
              <a href="#Templates">Templates</a>
            </li>
          </div>
          <div>
            {" "}
            <li>
              <a href="#Pricing">Pricing</a>
            </li>
          </div>
          <div>
            {" "}
            <li>
              <a href="#Book Demo">Book Demo</a>
            </li>
          </div>
          <div>
            {" "}
            <li>
              <a href="#Review">Reviews</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="navbar-actions">
        <div className="Log-in-bg">
          <button className="Log-in">Log In</button>
        </div>
        <div className="start-free-bg">
          <button className="start-free">Start Free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
