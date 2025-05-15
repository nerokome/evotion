import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('/chur.png')] bg-center bg-cover sm:h-screen h-[70vh] relative text-white sm:bg-cover sm:bg-center">
        <div className="absolute inset-0 bg-black opacity-60 z-[1] sm:opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-[1]"></div>
        <div className="p-9 relative z-[2]">
          <Navbar />
          <div className="flex flex-col items-center justify-center h-full py-20 sm:py-70">
            <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">Welcome to Evotion</h1>
            <p className="text-lg text-center mb-8">A powerful way to stay connected to God through daily devotion and reflection.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
