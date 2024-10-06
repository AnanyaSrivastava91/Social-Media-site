'use client';
import React from 'react';

const Welcome = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-950 h-auto '>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-black to-gray-950 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            Flexin
          </div>
          <div className="space-x-4">
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#" className="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
        </div>
      </nav>
      <hr />

      {/* Welcome Section */}
      <div className='flex items-center p-56 pb-72 pt-60'>
        <div className='w-1/2 flex justify-center'>
          <img className='w-96 h-72 rounded-l-full rounded-r-full' src='./flexin.png' alt='logo' />
        </div>
        <div className='w-1/2 flex flex-col justify-center items-start'>
          <h1 className='text-white text-6xl font-bold relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'>Welcome to Flexin</h1>
          <h4 className='text-white mt-4 relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'>Share your valuable moments with your beloved people.</h4>
        </div>
      </div>
      <hr />

      {/* Featured Moments Section */}
      <div className='flex flex-col items-center p-10'>
        <h2 className="text-4xl text-white font-bold mb-4">Featured Moments</h2>
        <div className="grid grid-cols-3 gap-4">
          <img className="rounded-lg transition-transform duration-300 hover:scale-105" src="./diwali girl.jpeg" alt="Featured Post 1" />
          <img className="rounded-lg transition-transform duration-300 hover:scale-105" src="./masculine man.jpeg" alt="Featured Post 2" />
          <img className="rounded-lg transition-transform duration-300 hover:scale-105" src="./jumping girl.jpeg" alt="Featured Post 3" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex justify-center items-center p-10">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Join the Community
        </button>
      </div>

      {/* User Testimonials Section */}
      <div className="flex flex-col items-center p-10 space-y-6">
        <h2 className="text-4xl text-white font-bold mb-4">What Our Users Say</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <p>"Flexin has transformed how I share moments with my loved ones!" - Jane Doe</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <p>"I love how easy it is to connect with friends and family!" - John Smith</p>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className='flex flex-col items-center p-10'>
        <h2 className="text-4xl text-white font-bold mb-4">Inspiration</h2>
        <div className="flex space-x-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold">5 Ways to Share Joy</h3>
            <p className="text-gray-400">Discover creative ways to capture and share your special moments.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold">Building Connections</h3>
            <p className="text-gray-400">Learn how to strengthen your relationships through sharing.</p>
          </div>
        </div>
      </div>

      {/* Community Events Section */}
      <div className="flex flex-col items-center p-10">
        <h2 className="text-4xl text-white font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold">Photo Contest</h3>
            <p className="text-gray-400">Join our monthly photo contest! Submit your entries by the end of the month.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-semibold">Weekly Challenges</h3>
            <p className="text-gray-400">Participate in weekly challenges to win exciting prizes!</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center p-10 space-x-4">
        <a href="#" className="text-white text-2xl"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
      </div>

      {/* Closing Section */}
      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='text-5xl font-bold text-white p-10 text-center'>We are ever evolving minds</h1>
        <h1 className='text-5xl font-bold text-white p-10 text-center'>like you are....</h1>
      </div>
    </div>
  );
}

export default Welcome;
