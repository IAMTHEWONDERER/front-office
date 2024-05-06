import React from 'react';
import backimage from '../imgs/backregistercoach.jpg'

export default function Component() {

    const backgroundStyle = {
        backgroundImage: `url(${backimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center" style={backgroundStyle}>
        <div className="bg-opacity-45 mt-10 font-koulen backdrop-blur-md bg-gray-200 rounded-lg px-8 py-12 sm:px-12 mx-auto z-10">
        <div>
          <h2 className="mt-6 text-center text-3xl tracking-tight text-white mb-8">Register as a Coach</h2>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="fullName">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  name="fullName"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="email">
                Email address
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="phone">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  autoComplete="tel"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="password">
                Password
              </label>
              <div className="mt-1">
                <input
                  autoComplete="current-password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="password"
                  name="password"
                  required
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="gender">
                Gender
              </label>
              <div className="mt-1">
                <select
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="gender"
                  name="gender"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="address">
                Address
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="address"
                  name="address"
                  required
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="city">
                City
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="city"
                  name="city"
                  required
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="cv">
                Upload CV
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="cv"
                  name="cv"
                  required
                  type="file"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="profilePicture">
                Upload Profile Picture
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-sm"
                  id="profilePicture"
                  name="profilePicture"
                  required
                  type="file"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
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