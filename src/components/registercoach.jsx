import React from 'react';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o3MfBSJEdYS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#ff0000] to-[#000000] px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Register as a Coach</h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Fill out the form below to create your coach profile.
            </p>
          </div>
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="fullName">
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
              <label className="block text-sm font-medium text-white" htmlFor="email">
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
              <label className="block text-sm font-medium text-white" htmlFor="phone">
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
              <label className="block text-sm font-medium text-white" htmlFor="cv">
                Upload CV
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="cv"
                  name="cv"
                  required
                  type="file"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="profilePicture">
                Upload Profile Picture
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] sm:text-sm"
                  id="profilePicture"
                  name="profilePicture"
                  required
                  type="file"
                />
              </div>
            </div>
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-[#ff0000] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#cc0000] focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-offset-2"
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