import React, { useState } from 'react';
import ousamabefore from '../../imgs/baby.jpeg';
import ousamaafter from '../../imgs/bodybuilder.jpeg';
import johnafter from '../../imgs/blackbodybuilder.jpeg';

const users = [
  {
    name: 'Oussama Alouche',
    description:
      "It was the best experience i've ever had , the coaches are super nice and i really had a great glowup as you can see in the pictures",
    rating: 5,
    beforeImage: ousamabefore,
    afterImage: ousamaafter, 
  },
  {
    name: 'John Doe',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: 4,
    beforeImage: ousamabefore, 
    afterImage: johnafter, 
  },
  
];

export default function Component() {
  const [activeTab, setActiveTab] = useState('before');
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleArrowClick = (direction) => {
    const contentContainer = document.querySelector('.content-container');
    if (!contentContainer) return;
  
    const offset = 500; // Adjust the offset based on your design
  
    if (direction === 'left') {
      contentContainer.classList.add('-translate-x-full');
      setCurrentUserIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      contentContainer.classList.add('translate-x-full');
      setCurrentUserIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
    }
  
    // Reset class after animation (assuming the animation duration is 0.3s)
    setTimeout(() => {
      contentContainer.classList.remove('-translate-x-full', 'translate-x-full');
    }, 300);
  };
  

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-3xl font-bold uppercase tracking-widest">Before and After</h2>
      <div className="flex items-center justify-between w-full max-w-6xl mt-8">
        
        <ChevronLeftIcon
          className="text-black cursor-pointer hover:text-gray-500"
          onClick={() => handleArrowClick('left')}
        />

        
        <div className="flex space-x-12 content-container transition-transform duration-300 ease-in-out transform scale-100 opacity-100">
          <div className="bg-white p-4 shadow-lg w-[400px]">
            <div className="flex justify-between mb-2">
              <TabButton active={activeTab === 'before'} onClick={() => handleTabClick('before')}>
                BEFORE
              </TabButton>
              <TabButton active={activeTab === 'after'} onClick={() => handleTabClick('after')}>
                AFTER
              </TabButton>
            </div>
            {activeTab === 'before' && (
              <div className="h-[400px] bg-gray-200 mt-2">
                <img src={users[currentUserIndex].beforeImage} alt="Before" className="w-full h-full object-cover" />
              </div>
            )}
            {activeTab === 'after' && (
              <div className="h-[400px] bg-gray-300 mt-2">
                <img src={users[currentUserIndex].afterImage} alt="After" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          
          <div className="flex flex-col w-[500px] bg-black p-6 text-white">
            <h3 className="text-2xl font-bold">{users[currentUserIndex].name}</h3>
            <p className="mt-4 text-gray-300">{users[currentUserIndex].description}</p>
            <div className="flex mt-4">
              
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={index < users[currentUserIndex].rating ? 'text-red-500' : 'text-gray-500'}
                />
              ))}
            </div>
          </div>
        </div>

        
        <ChevronRightIcon
          className="text-black cursor-pointer hover:text-gray-500"
          onClick={() => handleArrowClick('right')}
        />
      </div>
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      className={`font-bold ${active ? 'text-black' : 'text-gray-500'} hover:text-gray-700 focus:outline-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}