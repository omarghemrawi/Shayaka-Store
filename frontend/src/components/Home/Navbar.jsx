import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Shayaka</h1>
      <div className="nav-items">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
