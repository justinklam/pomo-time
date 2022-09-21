import React from "react";
import "./navbar.css";

// Image Assets
import Logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
    </>
  );
};

export default Navbar;
