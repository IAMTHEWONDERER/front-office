import React from 'react';
import online from '../../imgs/online.jpg';
import inperson from '../../imgs/inperson.jpg';
import allinone from '../../imgs/allinone.jpg';

const ServiceCard = () => {
  return (
    <div className="mb-10 mt-10 font-koulen  ">
      <div className="text-10xl md:text-5xl text-center mb-10">
        OUR SERVICES AND THEIR ADVANTAGES
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-3 text-center text-white ">
        <div className="bg-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={online} alt="Online" className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Online</h2>
            <ul>
              <li className='mb-4'>Weekly Online Sessions With Your Coach.</li>
              <li className='mb-4'>Free gym training program</li>
              <li className='mb-4'>Flexibility in schedule</li>
            </ul>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full mt-auto">
              Book here
            </button>
          </div>
        </div>
        <div className="bg-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={allinone} alt="All-In-One" className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2 text-center">ALL-IN-ONE</h2>
            <ul>
              <li className='mb-4'>Weekly Online & in-person Sessions With Your Coach.</li>
              <li className='mb-4'>Free training and nutrition programs provided by Atlas</li>
              <li className='mb-4'>Flexibility in all schedules</li>
            </ul>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full mt-auto">
              Book here
            </button>
          </div>
        </div>
        <div className="bg-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={inperson} alt="In-Person" className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2 text-center">IN PERSON</h2>
            <ul>
              <li className='mb-4'>Weekly in-person Sessions With Your Coach.</li>
              <li className='mb-4'>Free training program provided by Atlas</li>
              <li className='mb-4'>At home or in-gym sessions</li>
            </ul>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full mt-auto">
              Book here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
