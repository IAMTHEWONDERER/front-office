import React, { useState, useEffect } from 'react';
import heroImg from '../../imgs/imgservice.jpg';

const ServicesHero = () => {
    const [scrollDownVisible, setScrollDownVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
          setScrollDownVisible(false);
        } else {
          setScrollDownVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="bg-black">
      <br /><br />
      <div className="mt-6 relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-koulen">
          <h1 className="text-5xl md:text-4xl font-koulen">FIND YOUR BEST FIT ON ATLAS</h1><br /><br /><br />
          <h2 className="text-lg md:text-5xl mb-10 font-bold font-Magra">WE PROVIDE OUR PAYING CUSTOMERS WITH A FREE <br /> 
                                                            TRAINING PROGRAM, ON US! </h2>
        </div>
      </div>  
      </div>
    );
}
export default ServicesHero;