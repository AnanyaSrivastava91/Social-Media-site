import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';

const Signup = () => {
  const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

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

      // Update the URL to your backend endpoint
      axios.post('http://localhost:5000/api/signup', values)////////////////////////////////////////////////////////////////////
        .then((result) => {
          console.log('Signup successful:', result.data);
          resetForm();
          // You may redirect or show a success message here
        })
        .catch((err) => {
          console.log(err);
          console.log(err?.response?.status);
          setSubmitting(false);
          // Optionally, handle specific error messages here
        });
    },
    validationSchema: signupSchema,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#152331] to-[#000000]">
      {/* Form container */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-lg w-full rounded-lg shadow-lg p-10 bg-gradient-to-r from-[#152331] to-[#000000]">
          <h1 className="text-3xl font-extrabold uppercase mb-6 text-center text-white relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            Signup Page
          </h1>
          <form onSubmit={signupForm.handleSubmit} className="space-y-4 rounded-3xl">
            {/* Form Fields */}
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C04848] transition duration-300"
              />
              {signupForm.touched.name && signupForm.errors.name && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-white">Email Address</label>
              <input
                type="email"
                id="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C04848] transition duration-300"
              />
              {signupForm.touched.email && signupForm.errors.email && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="text-white">Password</label>
              <input
                type="password"
                id="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C04848] transition duration-300"
              />
              {signupForm.touched.password && signupForm.errors.password && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={signupForm.handleChange}
                value={signupForm.values.confirmPassword}
                className="w-full p-2 border rounded-lg my-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C04848] transition duration-300"
              />
              {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword && (
                <p className="text-red-500 mb-5 text-sm">{signupForm.errors.confirmPassword}</p>
              )}
            </div>

            <button
              disabled={signupForm.isSubmitting}
              type="submit"
              className="bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full disabled:bg-gray-400 transition-transform duration-300 hover:scale-105"
            >
              Submit
            </button>
            <p className="text-white text-center">Already have an account?</p>

            {/* Centering the last button */}
            <div className="flex justify-center">
              <button className="bg-black px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
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
