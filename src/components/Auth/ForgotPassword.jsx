import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <>
            <div className="flex items-center justify-center h-screen bg-gray-300 dark:bg-gray-900">
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Forgot Password</h1>
                    <form className="space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm py-2 mt-4"
                        >
                            Submit
                        </button>

                    </form>
                </section>
            </div>
        </>
    );
};

export default SignIn;
