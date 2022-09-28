import React, { useState } from "react";
import "./login.css";
import axios from "axios";

// React Router Dom
import { useNavigate } from "react-router-dom";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate(`/timer`);
      console.log(res.data);
    } catch (err) {
      console.log("Login Error:", err);
    }
  };
  console.log("currentUser:", { currentUser });

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        name,
        email,
        password,
      });
      navigate(`/timer`);
      console.log(res.data);
    } catch (err) {
      console.log("Signup Error:", err);
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
