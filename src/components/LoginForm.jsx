import { useState } from "react";
import "../RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:9000/";

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
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
      const response = await fetch(
        `${baseUrl}users/login?name=${loginData.name}&password=${loginData.password}`
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

  const handleRegisterClick = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="registration-container">
      <h2>Login</h2>
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
          Login
        </button>
      </form>
      <h3>New here?</h3>
      <form onSubmit={handleRegisterClick}>
        <button type="submit" className="submit-button">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Login;
