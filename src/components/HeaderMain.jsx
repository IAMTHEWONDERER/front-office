import React, { useState } from "react";
import logo from "../imgs/Atlas-white.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="backdrop-blur-sm bg-black bg-opacity-50 text-white p-4 flex items-center justify-between font-koulen">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 mr-4" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about-us" className="text-white">
            About Us
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/registercoach">
          <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
            Become a coach
          </button>
          </Link>
          <Link to="/login">
            <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
              Sign in
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-70 text-white p-4 absolute w-full top-16">
          <Link to="/home" className="text-white">
            Home
          </Link>
          <Link to="/about-us" className="text-white">
            About Us
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/registercoach">
          <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
            Become a coach
          </button>
          </Link> 
          <Link to="/login">
            <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;