import React from 'react';

const Footeraboutus = () => (

  <div className="h-60 flex flex-col items-center justify-center bg-black text-white p-4">
    <h1 className="text-2xl md:text-3xl text-center mb-2 md:mb-3 font-koulen">
      WHAT ARE YOU WAITING FOR?
    </h1>
    <p className="text-lg md:text-4xl text-center mb-4 md:mb-6 font-koulen">
      Join us now and get a free session, on us!
    </p>
    <div className="flex items-center justify-center space-x-2">
      <button className="mr-8 md:text-lg bg-custom-red text-white px-3 md:px-4 py-1 md:py-2 font-koulen">
        REGISTER
      </button>
      <button className="ml-8 md:text-lg bg-white text-black px-3 md:px-4 py-1 md:py-2 font-koulen">
        BOOK HERE
      </button>
    </div>
  </div>
);

export default Footeraboutus;

