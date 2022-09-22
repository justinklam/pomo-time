import React, { useState } from "react";
import "./navbar.css";
// React Router Dom
import { Link } from "react-router-dom";

// Components
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);

  // sets opposite of current click status
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Pomo-Time
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {/* if click is true, show fas fa-times else hamburger */}
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </nav>
  );
};

export default Navbar;
