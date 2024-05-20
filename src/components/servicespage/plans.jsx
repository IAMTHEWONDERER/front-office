import React, { useState } from 'react';
import {Link} from 'react-router-dom';
export default function Component() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [sessionPrices, setSessionPrices] = useState({
    sessions3: { price: 139, total: 417 },
    sessions6: { price: 129, total: 774 },
    sessions12: { price: 119, total: 1428 },
    sessions24: { price: 109, total: 2616 },
  });

  const handlePlanSelect = (planType) => {
    let updatedPrices = { ...sessionPrices };

    switch (planType) {
      case 'Online':
        updatedPrices = {
          sessions3: { price: 139, total: 417 },
          sessions6: { price: 129, total: 774 },
          sessions12: { price: 119, total: 1428 },
          sessions24: { price: 109, total: 2616 },
        };
        break;
      case 'In Person':
        updatedPrices = {
          sessions3: { price: 159, total: 477 },
          sessions6: { price: 149, total: 894 },
          sessions12: { price: 139, total: 1668 },
          sessions24: { price: 129, total: 3096 },
        };
        break;
      case 'All-In-One':
        updatedPrices = {
          sessions3: { price: 169, total: 507 },
          sessions6: { price: 159, total: 954 },
          sessions12: { price: 149, total: 1788 },
          sessions24: { price: 139, total: 3348 },
        };
        break;
      default:
        break;
    }

    setSessionPrices(updatedPrices);
  };

  return (
<div className='ml-4 mr-4 md:ml-12 md:mr-12 mt-6 rounded-full overflow-hidden ' style={{ borderRadius: '5px' }}>
  <div className="bg-red-800 rounded-lg overflow-hidden pl-4 md:pl-9 pr-4 md:pr-19 pb-8 md:pb-16 pt-6 md:pt-10 text-white" >
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-koulen uppercase">Choose your plan</h1>
      <p className="mt-2 text-lg md:text-2xl font-koulen mx-2 md:mx-6">
        Buy your plan today and plan it for later, a refund is possible within one month from the date of purchase (depending on the number of sessions in the package).
      </p>
    </div>

    <div className="flex justify-center mt-6">
      <div className="max-w-md">
        <div className="bg-white text-black rounded-full px-3 py-1 text-lg md:text-2xl uppercase font-bold flex flex-wrap justify-center sm:space-x-4 sm:space-y-0 space-y-2">
          <button
            className={`font-koulen px-3 py-2 rounded-full ${
              selectedPlan === 'Online' ? 'bg-gray-300' : ''
            } hover:bg-gray-300 transition-colors`}
            onClick={() => {
              handlePlanSelect('Online');
              setSelectedPlan('Online');
            }}
          >
            ONLINE
          </button>
          <button
            className={`font-koulen px-3 py-2 rounded-full ${
              selectedPlan === 'In Person' ? 'bg-gray-300' : ''
            } hover:bg-gray-300 transition-colors`}
            onClick={() => {
              handlePlanSelect('In Person');
              setSelectedPlan('In Person');
            }}
          >
            IN PERSON
          </button>
          <button
            className={`font-koulen px-3 py-2 rounded-full ${
              selectedPlan === 'All-In-One' ? 'bg-gray-300' : ''
            } hover:bg-gray-300 transition-colors`}
            onClick={() => {
              handlePlanSelect('All-In-One');
              setSelectedPlan('All-In-One');
            }}
          >
            ALL-IN-ONE
          </button>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4 pr-4 mt-6">
      {Object.keys(sessionPrices).map((key) => (
        <div className="bg-red-800 p-4 text-center rounded-lg" key={key}>
          <h2 className="font-koulen text-2xl md:text-4xl">{key.split('sessions')[1]} SESSIONS</h2>
          <p className="text-base mt-2 font-koulen">Starting from</p>
          <p className="text-lg md:text-2xl font-koulen">{sessionPrices[key].price}DH</p>
          <p className="text-sm">per session</p>
          <p className="text-lg mt-2 md:mt-4 font-koulen">Total Price:</p>
          <p className="text-lg md:text-2xl font-koulen">{sessionPrices[key].total}DH</p>
          <Link to="/findacoach">
          <button className="font-koulen text-lg md:text-2xl mt-4 mb-6 bg-black text-white rounded-lg px-6 py-5 hover:text-black hover:bg-gray-300 transition-colors">Choose Plan</button>
          </Link>
        </div>  
      ))}
    </div>
  </div>
</div>
  );
}