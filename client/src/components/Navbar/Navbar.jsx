import React, { useState } from "react";
import "./navbar.css";
// React Router Dom
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  // sets opposite of current click status
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Pomo-Time
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {/* if click is true, show fas fa-times else hamburger */}
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/timer" className="nav-links" onClick={closeMobileMenu}>
            Timer <i class="fa-solid fa-clock"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <Link to="/sign-up">
        <button className="sign-up-btn">Sign Up</button>
      </Link>
    </nav>
  );
};

export default Navbar;
