import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Register = () => {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <form className="space-y-4 mt-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input type="text" id="username" name="username" className="form-input mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" id="email" name="email" className="form-input mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input type="password" id="password" name="password" className="form-input mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="form-input mt-1 block w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Confirm
        </button>
      </form>
      <div className="text-center mt-4">
        <a href="#" className="text-sm text-blue-500">Already have an account? Log in</a>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center mt-8">
    <p className="text-sm text-gray-600">Or register with</p>
    <div className="flex mt-2">
      <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-2">Google</button>
      <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2">Apple</button>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Facebook</button>
    </div>
  </div>
</div>
);
};

export default Register;