import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const url = "http://localhost:7171/api/auth/signin"; // Replace with your actual API endpoint
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, formData);

      console.log("Response:", response.data);

      // Check for a successful response and handle accordingly
      if (response.status === 200) {
        console.log("Sign-in successful!");
        // Perform any additional actions on successful sign-in if needed
        navigate("/dash");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-300 dark:bg-gray-900">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Sign in to your account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 mr-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600"
                  required
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="forgot-password"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
              >
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-black font-medium rounded-lg text-sm py-2 mt-4"
            >
              Sign in
            </button>

            <Link
              to="/signup"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
            >
              Sign up{" "}
            </Link>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignIn;
