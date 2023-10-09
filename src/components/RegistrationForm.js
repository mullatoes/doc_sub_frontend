import { useState } from "react";
import "../RegistrationForm.css";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const registrationData = {
      name: formData.name,
      password: formData.password,
    };

    if (!formData.name) {
      alert("Name cannot be empty");
      return;
    }

    if (!formData.password) {
      alert("Password cannot be empty");
      return;
    }

    try {
      // Make an HTTP POST request to your Node.js API
      const response = await fetch("http://localhost:9000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData), // Convert data to JSON format
      });

      if (response.ok) {
        // Registration successful
        console.log("User registered successfully");
        alert("User registered successfully");
        // You can perform any additional actions here, such as redirecting the user.
        navigate("/login");
      } else {
        // Registration failed
        console.error("User registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  // Handle login form submission
  const handleLogin = (event) => {
    event.preventDefault();
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">USERNAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          REGISTER
        </button>
      </form>
      <h3>Already a user?</h3>
      <form onSubmit={handleLogin}>
        <button type="submit" className="submit-button">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
