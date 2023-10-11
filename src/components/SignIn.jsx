import React, { useState } from "react";
import "./LoginSignUp.css";
import password_icon from "../components/assets/password.png";
import email_icon from "../components/assets/email.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:9000/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    if (!formData.email) {
      alert("Email cannot be empty");
      return;
    }

    if (!formData.password) {
      alert("Password cannot be empty");
      return;
    }

    try {
      const response = await fetch(
        `${baseUrl}users/login?email=${loginData.email}&password=${loginData.password}`
      );

      if (response.status === 200) {
        console.log("User logged in successfully");
        navigate("/dashboard");
      } else if (response.status === 401) {
        console.error("Incorrect password");
      } else {
        console.error("User login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign In</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click Here</span>
      </div>
      <div className="new-user">
        New here? <span>Sign Up</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignIn}>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default SignIn;
