import React from "react";
import "./navbar.css";

// Image Assets
// import Logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <i class="fa-solid fa-clock"></i>
          <h4>Pomo-Time</h4>
        </a>
      </div>
      <ul className="navlinks">
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="/">Timer</a>
        </li>
        <li className="link">
          <a href="/">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
