'use client'
import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-950 h-auto '>

      <nav class="bg-gradient-to-r from-black to-gray-950 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-white text-3xl font-bold">
            Flexin
          </div>
          <div class="space-x-4">
            <a href="#" class="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#" class="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#" class="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#" class="relative text-white after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
        </div>
      </nav>
      <hr />

      <div className='flex items-center p-56 pb-72 pt-60'>
        <div className='w-1/2 flex justify-center'>
          <img className='w-96 h-72 rounded-l-full rounded-r-full' src='./flexin.png' alt='logo' />
        </div>
        <div className='w-1/2 flex flex-col justify-center items-start'>
          <h1 className='text-white text-6xl font-bold relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'>Welcome to Flexin</h1>
          <h4 className='text-white mt-4 relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'>Share your valuable moments with your beloved people.</h4>
        </div>
      </div>
      <hr className='' />
      <div className='flex justify-center items-center p-10'>
        <div className='w-1/2 flex justify-center mt-24'>
          <img className='rounded-l-full rounded-r-full relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full' src='./diwali girl.jpeg' alt='photo of girl' />
        </div>
        <div className='w-1/2 flex justify-center'>
          <h1 className='mt-12 text-6xl text-white font-bold relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full '>Share every moment with your people</h1>
        </div>

      </div>

      <div className='flex justify-center items-center p-10'>
        <div className='w-1/2 flex justify-center'>
          <h1 className='mt-12 text-6xl text-white font-bold relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'>Feel joyful to be yourself </h1>
        </div>
        <div className='w-1/2 flex justify-center mt-24'>
          <img className='rounded-l-full rounded-r-full relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full' src='./jumping girl.jpeg' alt='photo of jumping girl' />
        </div>
      </div>

      <div className='flex justify-center items-center p-10'>
        <div className='w-1/2 flex justify-center mt-24'>
          <img className='rounded-l-full rounded-r-full relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full' src='./masculine man.jpeg' alt='photo of girl' />
        </div>
        <div className='w-1/2 flex justify-center'>
          <h1 className='mt-12 text-6xl text-white font-bold relative inline-block transition-transform duration-300 hover:scale-105 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'>Promote influencial events</h1>
        </div>
      </div>
      <hr />
      <div className=''>
        <div className='w-1/4'>
        </div>
        <div className='w-3/4'>
          <h1 className='text-9xl font-bold text-white p-10'>We are ever</h1>
          <h1 className='text-9xl font-bold text-white p-10'>evolving minds </h1>
          <h1 className='text-9xl font-bold text-white p-10'>like you are....</h1>
        </div>
      </div>

    </div>
  )
}

export default Welcome
