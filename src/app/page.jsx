'use client';
import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-scroll';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const Welcome = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className='bg-gradient-to-r from-[#152331] to-[#000000] min-h-screen relative overflow-hidden'>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
          },
        }}
      />

      {/* Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <div className="text-white text-4xl font-bold">
            Flexin
          </div>
          <div className="space-x-6">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <Link 
                key={index} 
                to={item.toLowerCase()} 
                smooth={true} 
                duration={500}
                className="relative cursor-pointer text-white text-lg font-semibold after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Parallax Hero Section */}
      <Parallax bgImage="./background-image.jpg" strength={500}>
        <div className='min-h-screen flex items-center justify-between px-20 py-40 relative z-10'>
          <div className='w-1/2'>
            <motion.h1
              className='text-white text-7xl font-bold leading-tight'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Flexin
            </motion.h1>
            <motion.p
              className='text-white mt-6 text-xl'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Share your valuable moments with your beloved people.
            </motion.p>
            <motion.button
              className="mt-10 bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Join the Community
            </motion.button>
          </div>
          <div className='w-1/2 flex justify-center'>
            <motion.img
              className='w-96 h-96 rounded-full shadow-lg object-cover' // Changed to rounded-full for circular image
              src='./flexin.png'
              alt='logo'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </Parallax>

      {/* Featured Moments Section */}
      <div id="about" className='flex flex-col items-center p-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black'>
        <h2 className="text-4xl text-white font-bold mb-10">Featured Moments</h2>
        <div className="grid grid-cols-3 gap-10">
          {['jumping girl.jpeg', 'masculine man.jpeg', 'diwali girl.jpeg'].map((src, index) => (
            <motion.div
              key={index}
              className="relative group bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <img className="rounded-lg" src={`./${src}`} alt={`Featured Post ${index + 1}`} />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg hidden group-hover:flex items-center justify-center text-white font-semibold">
                Moment {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div id="services" className="flex justify-center items-center p-20 bg-gradient-to-r from-blue-500 to-green-500">
        <motion.button
          className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          Become a Member
        </motion.button>
      </div>

      {/* User Testimonials Section */}
      <div id="testimonials" className="flex flex-col items-center p-20 space-y-6 bg-gray-900">
        <h2 className="text-4xl text-white font-bold mb-4">What Our Users Say</h2>
        {['Jane Doe', 'John Smith'].map((name, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-[#C04848] to-[#480048] p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <p>"Flexin has transformed how I share moments with my loved ones!" - {name}</p>
          </motion.div>
        ))}
      </div>

      {/* Community Events Section */}
      <div id="events" className="flex flex-col items-center p-20 bg-gray-900">
        <h2 className="text-4xl text-white font-bold mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { title: 'Photo Contest', description: 'Join our monthly photo contest! Submit your entries by the end of the month.' },
            { title: 'Weekly Challenges', description: 'Participate in weekly challenges to win exciting prizes!' }
          ].map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-black text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div id="contact" className='flex flex-col items-center justify-center p-20 bg-gradient-to-r from-black via-gray-900 to-black'>
        <motion.h1
          className='text-5xl font-bold text-white p-10 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We are ever-evolving minds
        </motion.h1>
        <motion.h1
          className='text-5xl font-bold text-white p-10 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          like you are....
        </motion.h1>
      </div>
    </div>
  );
};

export default Welcome;
