'use client';
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null); // For handling errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the payload
    const payload = {
      email: username, // Assuming you use email as username
      password,
    };

    // Make the POST request
    axios.post('http://localhost:5000/api/login', payload)////////////////////////////////////////////
      .then((response) => {
        console.log(response.data);
        // Handle successful login (e.g., save token, redirect)
      })
      .catch((err) => {
        console.error(err);
        setError('Invalid credentials, please try again.');
        console.log(err?.response?.status);
      });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <img
        src="./bg image.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Form container */}
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="max-w-lg w-full rounded-lg shadow-lg p-10 bg-black bg-opacity-50 backdrop-blur-sm">
          <h1 className="text-2xl font-extrabold uppercase mb-6 text-center text-white">
            Login
          </h1>

          {/* Show error message if exists */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl">
            <div>
              <label htmlFor="username" className="text-white">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-white">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-white">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full"
            >
              Login
            </button>
          </form>

          <p className="text-white text-center mt-4">Don't have an account?</p>

          {/* Centering the last button */}
          <div className="flex justify-center">
            <button className="bg-black px-6 py-2 rounded-lg mt-4">
              <a className="text-white text-center" href="#">
                Sign Up Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
