import React from 'react';
import backimage from '../imgs/backregistercoach.jpg'

export default function Component() {

    const backgroundStyle = {
        backgroundImage: `url(${backimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center" style={backgroundStyle}>
        <div className=" bg-opacity-35 backdrop-blur-md bg-gray-200 rounded-lg px-8 py-12 sm:px-12 lg:px-16 max-w-md w-full mx-auto mt-20 mb-8 z-10">
          <h2 className="text-3xl font-semibold text-black ml-6 mb-8">Register as a Coach</h2>

          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="block text-lg font-semibold text-black" htmlFor="fullName">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  autoComplete="name"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="fullName"
                  name="fullName"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-black" htmlFor="email">
                Email address
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
            </div>
            <div>
            <label className="block text-lg font-semibold text-black" htmlFor="password">
              Password
            </label>
            <div className="mt-1">
              <input
                autoComplete="new-password"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
          </div>
            <div>
              <label className="block text-lg font-semibold text-black" htmlFor="phone">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  autoComplete="tel"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                />
              </div>
            </div>
          <div>
            <label className="block text-lg font-semibold text-black" htmlFor="gender">
              Gender
            </label>
            <div className="mt-1">
              <select
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                id="gender"
                name="gender"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-semibold text-lg text-black" htmlFor="city">
              City
            </label>
            <div className="mt-1">
              <input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                id="city"
                name="city"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-lg text-black" htmlFor="address">
              Address
            </label>
            <div className="mt-1">
              <input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                id="address"
                name="address"
                required
                type="text"
              />
            </div>
          </div>
          
          <div>
              <label className="block font-semibold text-lg text-black" htmlFor="cv">
                Upload CV
              </label>
              <div className="mt-1">
                <input
                  className="block w-full text-black rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="cv"
                  name="cv"
                  required
                  type="file"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold text-lg text-black" htmlFor="profilePicture">
                Upload Profile Picture
              </label>
              <div className="mt-1">
                <input
                  className="block w-full text-black rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="profilePicture"
                  name="profilePicture"
                  required
                  type="file"
                />
              </div>
            </div>
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-[#ff0000] py-2 px-4 text-xl font-medium text-black shadow-sm hover:bg-[#cc0000] focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-offset-2"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}