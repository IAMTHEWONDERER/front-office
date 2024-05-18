import React, { useState } from "react";
import logo from "../imgs/Atlas-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from '../auth/authSlice';
import { FaUserCircle } from 'react-icons/fa'; // Import UserCircle icon
import { RiDashboardLine } from 'react-icons/ri'; // Import Dashboard icon
import { MdSettings, MdExitToApp } from 'react-icons/md'; // Import Home and ExitToApp icons

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

  const dashboardLink = userInfo?.isCoach ? '/coach/dashboard' : '/user/dashboard';

  return (
    <div>
      <nav className="bg-black backdrop-blur-sm bg-opacity-70 text-white pt-4 pr-4 pb-4 flex items-center justify-between font-koulen">
        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="h-8 mr-4 pl-4" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/homepage" className="text-white">
            Home
          </a>
          <a href="aboutus" className="text-white">
            About Us
          </a>
          <a href="services" className="text-white">
            Services
          </a>
          {!isAuthenticated && (
            <>
              <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
                Become a coach
              </button>
              <Link to="/login">
                <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
                  Sign in
                </button>
              </Link>
            </>
          )}
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
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-70 text-white p-4 absolute w-full top-16">
            <a href="/homepage" className="text-white">
              Home
            </a>
            <a href="/aboutus" className="text-white">
              About Us
            </a>
            <a href="/services" className="text-white">
              Services
            </a>
            {!isAuthenticated && (
              <>
                <Link to="/becomeacoach">
                  <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
                    Become a coach
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
                    Sign in
                  </button>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link to={dashboardLink}>
                  <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
                    Dashboard
                  </button>
                </Link>
                <Link to="/user/settings">
                  <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
                    Settings
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out"
                >
                  Log out
                </button>
              </>
            )}
          </div>
        )}
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
                  <Link to={dashboardLink} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    <RiDashboardLine className="mr-2" /> Dashboard
                  </Link>
                  <Link to="/user/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    <MdSettings className="mr-2" /> Settings
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
  