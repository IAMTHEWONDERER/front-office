import React, { useState } from 'react';

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
    <div className='ml-12 mr-12 mt-6 rounded-full'>
      <div className="bg-red-800 pl-9 pr-19 pb-16 pt-10 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-koulen uppercase">Choose your plan</h1><br /><br />
          <p className="mt-2 text-2xl font-koulen ml-6 mr-6 pr-6 pl-6">
            Buy your plan today and plan it for later, refund is possible during 1 month from the date of purchase (depending on the number of sessions in the package)
          </p>
        </div>

        <div className=" flex justify-center mt-6">
          <div className="max-w-md">
            <div className="bg-white text-black rounded-full px-3 py-1 text-2xl uppercase font-bold flex space-x-4 justify-center">

            <button
            className={`font-koulen px-4 py-2 rounded-full ${
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
            className={`font-koulen px-4 py-2 rounded-full ${
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
              className={`font-koulen px-4 py-2 rounded-full ${
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

        <div className="grid grid-cols-4 pl-16 pr-16 mt-6">
          {Object.keys(sessionPrices).map((key) => (
            <div className="bg-red-800 p-4 text-center" key={key}>
              <h2 className="font-koulen text-4xl">{key.split('sessions')[1]} SESSIONS</h2>
              <p className="text-s mt-2 font-koulen">Starting from</p>
              <p className="text-2xl  font-koulen">{sessionPrices[key].price}DH</p>
              <p className="text-sm">per session</p>
              <p className="text-lg mt-4 font-koulen">Total Price :</p>
              <p className="text-2xl  font-koulen">{sessionPrices[key].total}DH</p>
              <button className="font-koulen text-xl mt-4 bg-black text-white rounded-full px-5 py-3 hover:text-black hover:bg-gray-300 transition-colors">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}