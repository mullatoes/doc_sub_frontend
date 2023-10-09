import { useState } from "react";

function Login() {
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

    try {
      const response = await fetch(
        `http://localhost:9000/users/login?name=${loginData.name}&password=${loginData.password}`
      );

      if (response.status === 200) {
        console.log("User logged in successfully");
        // You can perform any additional actions here, such as redirecting the user.
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
