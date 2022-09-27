import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <h2 className="login-subtitle">to track your stats!</h2>
      <form className="login-form">
        <input placeholder="Username" className="login-input"></input>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        ></input>
        <button className="login-button">Login</button>
      </form>

      <h2 className="login-subtitle">or</h2>
      <h1 className="login-title">Sign Up</h1>
      <form className="login-form">
        <input placeholder="Username" className="login-input"></input>
        <input type="email" placeholder="Email" className="login-input"></input>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        ></input>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
