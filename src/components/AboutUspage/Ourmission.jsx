import React from 'react';
import ourmissionimg from '../../imgs/barbell.jpg';

const Ourmission = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-7xl mt-16 font-koulen">OUR MISSION</h1>
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={ourmissionimg}
          alt="Description of the image"
          className="max-h-80 md:max-h-full max-w-full md:max-w-2xl rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <p className="text-lg md:text-3xl font-koulen">
        coaching service that connects coaches with Fitness enthusiasts from all over morocco
        </p>
      </div>
    </div>  
  </div>
  );
};

export default Ourmission;
