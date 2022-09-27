import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
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
      </form>

      <h2 className="login-subtitle">or</h2>
      <h1 className="login-title">Sign Up</h1>
      <form className="login-form">
        <input
          placeholder="Username"
          className="login-input"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
