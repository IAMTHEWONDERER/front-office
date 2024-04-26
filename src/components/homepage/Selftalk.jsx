import React from 'react';
import people from '../../imgs/people.jpg';
import barbell from '../../imgs/barbell.jpg';
import online from '../../imgs/online.jpg';
import allinone from '../../imgs/allinone.jpg';
import inperson from '../../imgs/inperson.jpg';
const SelfTalk = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row bg-white p-4 md:p-8 font-koulen ">
       <div className="md:w-1/2 p-4">
        <div className="flex items-center justify-center h-full rounded-lg ">
          <img src={people} alt="Random" className="p-4 w-70 h-auto" />
        </div>
      </div>
      <div className="md:w-1/2 p-4 justify-center ">
        <h3 className=" font-bold mb-10 mt-5 text-4xl md:text-5xl text-center">WHO ARE ATLAS FITNESS</h3>
        <h4 className="text-1xl md:text-2xl text-center mb-5 mr-6 mt-18"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </h4>
        <div className='flex justify-center'>
        <button className=" bg-red-600 text-white px-4 py-2 rounded-lg mt-7">
  Learn More
</button>
      </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row bg-black p-4 md:p-8 font-koulen ">
    <div className="md:w-1/2 p-4 justify-center ">
        <h3 className=" font-bold mb-10 mt-5 text-4xl md:text-5xl text-center text-white">WHY CHOOSE US</h3>
        <h4 className="text-1xl md:text-2xl text-center mb-5 mr-6 mt-18 text-white"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </h4>
        <div className='flex justify-center'>
        <button className=" bg-red-600 text-white px-4 py-2 rounded-lg mt-7">
  Learn More
</button>
      </div>
      </div>
       <div className="md:w-1/2 p-4">
        <div className="flex items-center justify-center h-full rounded-lg ">
          <img src={barbell} alt="Random" className="p-4 w-70 h-auto" />
        </div>
      </div>
      
    </div>
    
    <div className="grid grid-row items-center justify-center h-screen bg-white font-koulen text-center m-3">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-5xl font-bold mb-2 text-center font-koulen ">Our services and their advantages</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-black text-white rounded-lg shadow-md p-4 mb-4">
            <img src={online} alt="Random" className="w-full lg:h-64 md:h-32 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-2 text-center ">Online</h2>
<ul>
<li className='mb-4'>
> Weekly Online Sessions With Your Coach.
</li>
 <li className='mb-4'>> Free gym training program</li>
 <li className='mb-4'>> Flexibility in schedule</li>
  </ul>              <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4  rounded transition duration-300 ease-in-out md:mb-0">Book here</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-black text-white rounded-lg shadow-md p-4 mb-4 transform -translate-y-4">
            <img src={allinone} alt="Random" className="w-full lg:h-64 md:h-32 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-2 text-center">ALL-IN-ONE</h2>
<ul>
<li  className='mb-4'>
> Weekly Online & in person Sessions With Your Coach.
</li>
 <li  className='mb-4'>> free training and nutrition programs provided by Atlas</li>
 <li  className='mb-6'>> Flexibility in all schedules</li>
  </ul>              <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4  rounded transition duration-300 ease-in-out">book here</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 ">
          <div className="bg-black text-white rounded-lg shadow-md p-4 mb-4">
            <img src={inperson} alt="Random" className="w-full lg:h-64 md:h-32 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-2 text-center">IN PERSON</h2>
              <ul>
<li  className='mb-4'>
> Weekly in person Sessions With Your Coach.
</li>
 <li  className='mb-4'>> free training program provided by Atlas</li>
 <li  className='mb-4'>> At home or in gym sessions</li>
                </ul>
              <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4  rounded transition duration-300 ease-in-out">book here</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default SelfTalk;