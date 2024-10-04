'use client';
import { useFormik } from 'formik';
import React from 'react';

const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      setSubmitting(true);
    },
  });

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
            Signup Page
          </h1>
          <form onSubmit={signupForm.handleSubmit} className="space-y-4 rounded-3xl">
            <div>
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100"
              />
              {signupForm.touched.name && signupForm.errors.name && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-white">Email Address</label>
              <input
                type="email"
                id="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100"
              />
              {signupForm.touched.email && signupForm.errors.email && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-white">Password</label>
              <input
                type="password"
                id="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100"
              />
              {signupForm.touched.password && signupForm.errors.password && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={signupForm.handleChange}
                value={signupForm.values.confirmPassword}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100"
              />
              {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword && (
                <p className="text-red-500 mb-5 text-sm">
                  {signupForm.errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              disabled={signupForm.isSubmitting}
              type="submit"
              className="bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full disabled:bg-gray-400"
            >
              Submit
            </button>
            <p className="text-white text-center">Already have an account?</p>

            {/* Centering the last button */}
            <div className="flex justify-center">
              <button className="bg-black px-6 py-2 rounded-lg">
                <a className="text-white text-center" href="#">
                  Let's get you Logged!
                </a>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
export default Signup;
