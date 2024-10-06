'use client';
import React from 'react';

const Welcome = () => {
  return (
    <div className='bg-gradient-to-r from-[#780206] to-[#061161] h-auto relative overflow-hidden'>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-r from-[#780206] to-[#061161] animate-gradient-background"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-black to-gray-950 p-4 z-10 relative">
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
      <div className='flex items-center p-56 pb-72 pt-60 relative z-10'>
        <div className='w-1/2 flex justify-center'>
          <img className='w-96 h-72 rounded-full shadow-lg' src='./flexin.png' alt='logo' />
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
          {['jumping girl.jpeg', 'masculine man.jpeg', 'diwali girl.jpeg'].map((src, index) => (
            <div key={index} className="relative group">
              <img className="rounded-lg transition-transform duration-300 hover:scale-105" src={`./${src}`} alt={`Featured Post ${index + 1}`} />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg hidden group-hover:block flex items-center justify-center text-white font-semibold">Moment {index + 1}</div>
            </div>
          ))}
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
        {['Jane Doe', 'John Smith'].map((name, index) => (
          <div key={index} className="bg-gradient-to-r from-[#C04848] to-[#480048] p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
            <p>"Flexin has transformed how I share moments with my loved ones!" - {name}</p>
          </div>
        ))}
      </div>

      {/* Inspiration Section */}
      <div className='flex flex-col items-center p-10'>
        <h2 className="text-4xl text-white font-bold mb-4">Inspiration</h2>
        <div className="flex space-x-4">
          {[
            { title: '5 Ways to Share Joy', description: 'Discover creative ways to capture and share your special moments.' },
            { title: 'Building Connections', description: 'Learn how to strengthen your relationships through sharing.' }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Events Section */}
      <div className="flex flex-col items-center p-10">
        <h2 className="text-4xl text-white font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {[
            { title: 'Photo Contest', description: 'Join our monthly photo contest! Submit your entries by the end of the month.' },
            { title: 'Weekly Challenges', description: 'Participate in weekly challenges to win exciting prizes!' }
          ].map((event, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          ))}
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
