import React, { useContext, useState } from "react";
import "./navbar.css";
// React Router Dom
import { Link } from "react-router-dom";

// Context
import UserContext from "../../utils/UserContext";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { user, setUser } = useContext(UserContext);
  // console.log("nav-user", user);

  // sets opposite of current click status
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        Pomo-Time
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Timer <i className="fa-solid fa-clock"></i>
          </Link>
        </li>
        {/* Mobile Nav Links */}
        <li className="nav-item">
          <Link
            to="/statistics"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Statistics
          </Link>
        </li>

        {/* Mobile Nav Links */}
        {!user ? (
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links-mobile"
              onClick={() => {
                closeMobileMenu();
                setUser(null);
              }}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>

      {!user ? (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      ) : (
        <Link to="/timer">
          <button
            className="login-btn"
            onClick={() => {
              setUser(null);
            }}
          >
            Logout
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
