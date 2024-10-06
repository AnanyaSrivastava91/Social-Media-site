'use client';
import React from 'react';

const AboutDeveloper = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-950 h-auto'>
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
      <hr />

      {/* Developer Info Section */}
      <div className='flex flex-col items-center p-20'>
        <img 
          className='w-48 h-48 rounded-full border-4 border-blue-500 mb-6' 
          src='./CEO.jpg' 
          alt='Developer' 
        />
        <h1 className='text-5xl font-bold text-white'>Ananya Srivastava</h1>
        <h2 className='text-3xl text-gray-300'>Developer | Founder</h2>
        <p className='mt-4 max-w-2xl text-center text-white'>
          "Passionate about creating seamless digital experiences that empower users."
        </p>

        <h3 className='text-xl font-semibold mt-6'>Key Skills:</h3>
        <ul className='list-disc list-inside mt-2 text-white'>
          <li>MERN Stack developement</li>
          <li>Springboot developement</li>
          <li>Java & its frameworks</li>
          <li>javascript & its liberaries</li>
          <li>python</li>

          
        </ul>

        <h3 className='text-xl font-semibold mt-6'>Current Role:</h3>
        <p className='mt-2 text-white'>
          Leading development initiatives and building innovative solutions at Flexin.
        </p>

        <h3 className='text-xl font-semibold mt-6'>Contact:+91 7379766338</h3>
        <p className='mt-2 text-white'>
          Email: <a href="mailto:your.email@example.com" className="text-blue-400">ananyasrivastava419@gmail.com</a>
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center p-10 space-y-6">
        <h2 className="text-4xl text-white font-bold mb-4">What People Say</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <p>"Your work has had a profound impact on our team!" - Client A</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <p>"A dedicated developer who always goes the extra mile!" - Client B</p>
        </div>
      </div>

      {/* Closing Section */}
      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='text-5xl font-bold text-white p-10 text-center'>We are ever evolving minds like you are....</h1>
        <h1 className='text-5xl font-bold text-white p-10 text-center'></h1>
      </div>
    </div>
  );
}

export default AboutDeveloper;
