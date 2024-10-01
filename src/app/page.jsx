'use client'
import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-950 h-auto '>

      <div className='flex items-center h-5/6 p-52'>
        <div className='w-1/2 flex justify-center'>
          <img className='w-96 h-72 rounded-l-full rounded-r-full' src='./flexin.png' alt='logo' />
        </div>
        <div className='w-1/2 flex flex-col justify-center items-start'>
          <h1 className='text-white text-6xl font-bold'>Welcome to Flexin</h1>
          <h4 className='text-white mt-4'>Share your valuable moments with your beloved people.</h4>
        </div>
      </div>
      <div>
        <h2 className='text-2xl text-white text-center'>Lets get you started...</h2>
      </div>
    </div>
  )
}

export default Welcome
