import { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import {useNavigate} from 'react-router-dom';

export default function Component() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    gender: '',
    city: '',
    phone_number: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const response = await axios.put(`http://localhost:3111/users/putuser/${userId}`, formData);
      setMessage('User modified successfully');
      navigate("/findacoach")
    } catch (err) {
      setMessage('Error modifying user');
    }
  };

  return (
    <div className="bg-[#FEFAF6] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-md space-y-8 border p-6 rounded-lg bg-white shadow-2xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Health Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">Fill out the form to create your health profile.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="weight">Weight (Kg)</label>
              <input
                className="w-full border border-gray-300 rounded-lg px-2 py-1"
                id="weight"
                placeholder="Enter your weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="height">Height (m)</label>
              <input
                className="w-full border border-gray-300 rounded-lg px-2 py-1"
                id="height"
                placeholder="Enter your height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
              <label className="block text-lg font-medium text-black" htmlFor="gender">
                Gender
              </label>
              <div className="mt-1">
                <select
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black text-lg"
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
          <div className="space-y-2">
            <label htmlFor="city">City</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-2 py-1"
              id="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-2 py-1"
              id="phone_number"
              name='phone_number'
              placeholder="Enter your phone number"
              type="tel"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </div>
  );
}
