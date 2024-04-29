import React from 'react';
import img1 from '../../imgs/herosection-1.png'
import img2 from '../../imgs/people.jpg'
import img3 from '../../imgs/ABOUTUSIMAGE.jpg'
import img4 from '../../imgs/barbell.jpg'

const Bestchoice = () => {
  return (
    <div className="bg-black text-white">
      <div className="text-center py-6 text-5xl font-koulen uppercase">WHY WE ARE THE BEST CHOICE</div>
      <hr className="bg-white h-0" />
          <div className="flex justify-center mt-8">
      <div className="mb-16 text-xl text-black bg-white p-4 mx-4 rounded-lg font-koulen max-w-xs">
        <img src={img1} alt="Person 1" className="w-full h-40 rounded-md object-cover" />
        <p className="text-center mt-4 font-koulen font-bold">SECURE</p>
        <p className="text-center mt-4 break-words whitespace-normal">Your safety is our priority. Certified trainers and modern safety measures ensure a secure fitness environment</p>
      </div>
      <div className="mb-16 text-xl text-black bg-white p-4 mx-4 rounded-lg font-koulen max-w-xs">
        <img src={img2} alt="Person 2" className="w-full h-40 rounded-md object-cover" />
        <p className="text-center mt-4 font-koulen font-bold ">TRUST</p>
        <p className="text-center mt-4 break-words whitespace-normal">Build trust with us through transparency and integrity. Get reliable fitness solutions and guidance with confidence</p>
      </div>
      <div className="mb-16 text-xl text-black bg-white p-4 mx-4 rounded-lg font-koulen max-w-xs">
        <img src={img3} alt="Person 3" className="w-full h-40 rounded-md object-cover" />
        <p className="text-center mt-4 font-koulen font-bold ">QUALITY</p>
        <p className="text-center mt-4 break-words whitespace-normal">Experience top-notch quality in every aspect. From equipment to personalized plans, we strive for excellence</p>
      </div>
      <div className="mb-16 text-xl text-black bg-white p-4 mx-4 rounded-lg font-koulen max-w-xs">
        <img src={img4} alt="Person 4" className="w-full h-40 rounded-md object-cover" />
        <p className="text-center mt-4 font-koulen font-bold ">RESULTS</p>
        <p className="text-center mt-4 break-words whitespace-normal">Real, measurable results are our focus. Structured programs and support help you achieve your fitness goals</p>
      </div>
    </div>
  </div>
  );
};

export default Bestchoice;