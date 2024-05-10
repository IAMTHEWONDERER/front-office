import React, { useState } from "react";
import logo from "../imgs/Atlas-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from '../auth/authSlice';
import { FaUserCircle } from 'react-icons/fa'; // Import UserCircle icon
import { RiDashboardLine } from 'react-icons/ri'; // Import Dashboard icon
import { MdHome, MdExitToApp } from 'react-icons/md'; // Import Home and ExitToApp icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate('/login');
  };

  return (
    <div>
      <nav className="bg-black backdrop-blur-sm bg-opacity-70 text-white pt-4 pr-4 pb-4 flex items-center justify-between font-koulen">
        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="h-8 mr-4 pl-4" />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/">
          <a className="text-white">
            Home
          </a>
          </Link>
          <Link to="/aboutus">
          <a className="text-white">
            About Us
          </a>
          </Link>
          <Link to="/services">
          <a className="text-white">
            Services
          </a>
          </Link>
          {!isAuthenticated && (
            <Link to="/becomeacoach">
              <button className="bg-gray-100 hover:bg-gray-300 text-black px-4 py-2 rounded transition duration-300 ease-in-out">
                Become a Coach
              </button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/login">
              <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
                Sign in
              </button>
            </Link>
          )}
          {isAuthenticated && (
            <div className="relative md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white rounded-full p-1 text-black focus:outline-none"
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
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                  <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    <RiDashboardLine className="mr-2" /> Dashboard
                  </Link>
                  <Link to="/homepage" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    <MdHome className="mr-2" /> Home
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                  >
                    <MdExitToApp className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        {isAuthenticated && (
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white rounded-full p-1 text-black focus:outline-none"
              >
                <FaUserCircle className="h-8 w-8" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                  <Link to="/user-dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    <RiDashboardLine className="mr-2" /> Dashboard
                  </Link>
                  <Link to="/homepage" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    <MdHome className="mr-2" /> Home
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                  >
                    <MdExitToApp className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
