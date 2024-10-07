'use client';
import React from 'react';

const AboutDeveloper = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#780206] to-[#061161]">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-black to-gray-950">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">Flexin</div>
          <div className="space-x-4">
            <a href="#" className="relative text-white">Home</a>
            <a href="#" className="relative text-white">About</a>
            <a href="#" className="relative text-white">Services</a>
            <a href="#" className="relative text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Developer Info Section */}
      <div className="flex flex-col items-center p-20 pt-32">
        <img
          className="w-48 h-48 rounded-full border-4 border-blue-500 mb-6"
          src="./CEO.jpg"
          alt="Developer"
        />
        <h1 className="text-5xl font-bold text-white">Ananya Srivastava</h1>
        <h2 className="text-3xl text-gray-300">Developer | Founder</h2>
        <p className="mt-4 max-w-2xl text-center text-white">
          "Passionate about creating seamless digital experiences that empower users."
        </p>

        <h3 className="text-xl font-semibold mt-6 text-white">Key Skills:</h3>
        <ul className="list-disc list-inside mt-2 text-white">
          <li>MERN Stack Development</li>
          <li>Spring Boot Development</li>
          <li>Java & its frameworks</li>
          <li>JavaScript & its libraries</li>
          <li>Python</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 text-white">Current Role:</h3>
        <p className="mt-2 text-white">
          Leading development initiatives and building innovative solutions at Flexin.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-white">Contact:</h3>
        <p className="mt-2 text-white">
          Phone: +91 7379766338
        </p>
        <p className="mt-2 text-white">
          Email: <a href="mailto:ananyasrivastava419@gmail.com" className="text-blue-400">ananyasrivastava419@gmail.com</a>
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center p-10 space-y-6">
        <h2 className="text-4xl text-white font-bold mb-4">What People Say</h2>
        <div className="bg-gradient-to-r from-[#C04848] to-[#480048] p-6 rounded-lg shadow-lg text-white">
          <p>"Your work has had a profound impact on our team!" - Client A</p>
        </div>
        <div className="bg-gradient-to-r from-[#C04848] to-[#480048] p-6 rounded-lg shadow-lg text-white">
          <p>"A dedicated developer who always goes the extra mile!" - Client B</p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold text-white p-10 text-center">We are ever evolving minds like you are....</h1>
      </div>
    </div>
  );
};

export default AboutDeveloper;
