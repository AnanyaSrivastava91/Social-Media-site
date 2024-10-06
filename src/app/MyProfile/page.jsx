'use client';
import React from 'react';

const UserProfile = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-950 min-h-screen'>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-black to-gray-950 p-4">
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

      {/* User Profile Section */}
      <div className='flex flex-col items-center p-10'>
        <div className='flex flex-col items-center'>
          <img className='w-32 h-32 rounded-full border-4 border-white' src='./profile-pic.jpg' alt='Profile' />
          <h1 className='text-4xl text-white font-bold mt-4'>Username</h1>
          <p className='text-gray-400 mt-2'>Bio: Share your valuable moments with your beloved people.</p>
        </div>

        <div className='flex space-x-10 mt-6'>
          <div className='text-center'>
            <h2 className='text-2xl text-white font-bold'>0</h2>
            <p className='text-gray-400'>Posts</p>
          </div>
          <div className='text-center'>
            <h2 className='text-2xl text-white font-bold'>0</h2>
            <p className='text-gray-400'>Followers</p>
          </div>
          <div className='text-center'>
            <h2 className='text-2xl text-white font-bold'>0</h2>
            <p className='text-gray-400'>Following</p>
          </div>
        </div>

        {/* Posts Section */}
        <div className='flex flex-col items-center mt-10'>
          <h2 className='text-3xl text-white font-bold'>Posts</h2>
          <p className='text-gray-400'>No posts yet.</p>
        </div>
      </div>

      {/* Closing Section */}
      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='text-5xl font-bold text-white p-10 text-center'>We are ever evolving minds</h1>
        <h1 className='text-5xl font-bold text-white p-10 text-center'>like you are....</h1>
      </div>
    </div>
  );
};

export default UserProfile;
