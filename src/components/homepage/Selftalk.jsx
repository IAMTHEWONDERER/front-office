import React from 'react';
import people from '../../imgs/people.jpg'
const SelfTalk = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 p-4 md:p-8 font-koulen ">
       <div className="md:w-1/2 p-4">
        <div className="flex items-center justify-center h-full rounded-lg ">
          <img src={people} alt="Random" className="p-4 w-70 h-auto" />
        </div>
      </div>
      <div className="md:w-1/2 p-4 justify-center ">
        <h3 className=" font-bold mb-4 mt-5 text-4xl md:text-5xl text-center">WHO ARE ATLAS FITNESS</h3>
        <h4 className="text-1xl md:text-2xl text-center mb-5 mr-6 mt-18"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </h4>
        <div className='flex justify-center'>
        <button className=" bg-red-600 text-white px-4 py-2 rounded-lg mt-7">
  Learn More
</button>
      </div>
      </div>
     
    </div>
  );
};

export default SelfTalk;