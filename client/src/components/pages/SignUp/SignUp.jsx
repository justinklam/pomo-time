import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

// React Router Dom
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        name,
        email,
        password,
      });
      navigate(`/login`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-title">Sign Up</h1>
      <form className="sign-up-form">
        <input
          placeholder="Username"
          className="sign-up-input"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="sign-up-input"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="sign-up-input"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="sign-up-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
