import React from 'react';
import logo from '../imgs/Atlas-white.png'; // Import the image

const Header = () => {
  const headerStyle = {
    fontFamily: 'Koulen, sans-serif', // Use Koulen font with fallback to sans-serif
  };

  return (
    <header className="bg-black bg-opacity-90 text-white py-4" style={headerStyle}>
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
        <a href="#" className="flex items-center mb-4 md:mb-0 hover:opacity-75">
          <img src={logo} alt="Logo" className="h-8 mr-4" />
        </a>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 md:ml-auto">
        <a href="#" className="flex items-center mb-4 md:mb-0"/>
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Services</a>
        </nav>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded mb-2 md:mb-0 md:mr-2 ml-5">
            Become a Coach
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;