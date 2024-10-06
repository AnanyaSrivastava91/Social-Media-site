'use client';
import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here
    console.log('Feedback submitted:', feedback);
    setFeedback(''); // Clear the textarea after submission
  };

  return (
    <div className='bg-gradient-to-r from-[#780206] to-[#061161] h-screen flex flex-col justify-center items-center'>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-black to-gray-950 p-4 w-full fixed top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">Flexin</div>
          <div className="space-x-4">
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
        </div>
      </nav>

      {/* Feedback Section */}
      <div className='flex flex-col items-center justify-center h-full p-10'>
        <h1 className='text-5xl font-bold text-white mb-4'>We Value Your Feedback</h1>
        <p className='text-lg text-gray-300 mb-2 text-center'>
          Your thoughts and suggestions help us improve. Please share your feedback below!
        </p>
        <p className='text-lg text-gray-300 mb-6 text-center'>
          Every piece of feedback is a step towards creating a better experience for you and others.
        </p>
        <p className='text-lg text-gray-300 mb-6 text-center'>
          Thank you for taking the time to help us grow and evolve!
        </p>

        <form onSubmit={handleSubmit} className='w-full max-w-lg p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#C04848] to-[#480048]'>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="6"
            placeholder="Type your feedback here..."
            className='w-full p-3 mb-4 text-gray-800 rounded-lg focus:outline-none border border-gray-300'
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'>
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
