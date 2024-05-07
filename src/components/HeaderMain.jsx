import React, { useState } from "react";
import logo from "../imgs/Atlas-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
          <a href="/aboutus" className="text-white">
            About Us
          </a>
          <a href="/services" className="text-white">
            Services
          </a>
          <button className="  px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
            Become a coach
          </button>
          {userInfo ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Logout
              </button>
              <div className="flex items-center">
                <img
                  src={userInfo.profilePicture}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                {/* You may replace 'userInfo.profilePicture' with actual image URL */}
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
                Sign in
              </button>
            </Link>
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
          <div className="md:hidden backdrop-blur-sm flex flex-col items-center space-y-4 bg-black bg-opacity-70 text-white p-4 absolute w-full top-16">
            <a href="/homepage" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About Us
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <button className="  px-4 py-2 bg-white hover:bg-gray-300 text-black rounded transition duration-300 ease-in-out">
              Become a coach
            </button>
            {userInfo ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                >
                  Logout
                </button>
                <div className="flex items-center">
                  <img
                    src={userInfo.profilePicture}
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  {/* You may replace 'userInfo.profilePicture' with actual image URL */}
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
