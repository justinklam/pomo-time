import React, { useState } from "react";
import "./navbar.css";
// React Router Dom
import { Link } from "react-router-dom";

// Components
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Navbar
      </Link>
    </nav>
  );
};

export default Navbar;
