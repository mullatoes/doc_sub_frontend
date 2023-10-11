import React, { useState } from "react";
import "./LoginSignUp.css";
import person_icon from "../components/assets/person.png";
import password_icon from "../components/assets/password.png";
import email_icon from "../components/assets/email.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:9000/";

  const [formData, setFormData] = useState({
    name: "",
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

  const handleSignUp = async () => {
    try {
      const response = await fetch(baseUrl + "users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log("User registered successfully");
        navigate("/signin");
      } else {
        console.error("User registration failed");
      }
    } catch (error) {
      console.error("Error while signing up:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person_icon} alt="" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
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

      <div className="new-user">
        Already a user? <span>Click Here</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignUp}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default SignUp;
