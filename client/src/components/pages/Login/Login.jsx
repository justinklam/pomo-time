import React, { useContext, useState } from "react";
import "./login.css";
import axios from "axios";

// React Router Dom
import { Link, useNavigate } from "react-router-dom";

// Context
import UserContext from "../../../utils/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", {
        name,
        password,
      });
      setUser(res.data);
      navigate(`/`);
      // console.log("login-data", res.data);
      // console.log("user", user);
    } catch (err) {
      console.log("Login Error:", err);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <h2 className="login-subtitle">to track your stats!</h2>
      <form className="login-form">
        <input
          placeholder="Username"
          className="login-input"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <h2 className="login-subtitle">or</h2>
        <Link to="/sign-up">
          <button className="login-button">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
