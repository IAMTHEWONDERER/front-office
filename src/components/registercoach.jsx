import React, { useState } from 'react';
import axios from 'axios';
import backimage from '../imgs/backregistercoach.jpg';
import { useNavigate } from "react-router-dom";

export default function RegisterCoach() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phone_number: '',
    gender: '',
    city: '',
    address: '',
    cv: null,
    image: null,
    cin: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      console.warn('No file selected for', name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post(
        'http://localhost:3111/api/registercoach',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      navigate("/login");
    } catch (error) {
      console.error('Error registering coach:', error);
    }
  };

const handleUploadSuccess = (url, id, type) => {
  console.log("cloudinary url returned", url);
  const fileData = { url: url, cloudinaryId: id };
  setFormData((prevData) => ({
    ...prevData,
    [type]: fileData,
  }));
};

  const backgroundStyle = {
    backgroundImage: `url(${backimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };  

    return (
        <div className="relative min-h-screen flex items-center justify-center" style={backgroundStyle}>
        <div className=" bg-opacity-45 mt-10 font-koulen backdrop-blur-md bg-gray-200 rounded-lg px-8 py-12 sm:px-12 mx-auto z-10">
        <div>
          <h2 className="mt-6 text-center text-3xl tracking-tight text-white mb-8">Register as a Coach</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="fullname">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  autoComplete="fullname"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  name="fullname"
                  id="fullname"
                  required
                  type="text"
                  onChange={handleChange}
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
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="email"
                  name="email"
                  required
                  type="email"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="phone_number">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  autoComplete="tel"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  onChange={handleChange}
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
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="password"
                  name="password"
                  required
                  type="password"
                  onChange={handleChange}
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
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="availability">
                Availability
              </label>
              <div className="mt-1">
                <select
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="availability"
                  name="availability"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Availability</option>
                  <option value="online">online</option>
                  <option value="In-person">In-person</option>
                  <option value="All-in-one">All-in-one</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="address">
                Address
              </label>
              <div className="mt-1">
                <input
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="address"
                  name="address"
                  required
                  type="text"
                  onChange={handleChange}
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
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="city"
                  name="city"
                  required
                  type="text"
                  onChange={handleChange}
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
                type="file"
                name="cv"
                onChange={handleFileChange}
              />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="image">
                Upload Profile Picture
              </label>
              <div className="mt-1">
              <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div>
              <label className="block text-lg font-medium text-white" htmlFor="cin">
                Upload CIN
              </label>
              <div className="mt-1">
              <input
                type="file"
                name="cin"
                onChange={handleFileChange}
              />
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