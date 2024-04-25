import React, { useState, useEffect } from 'react';
import heroImg from '../../imgs/herosection-2.png';

const Hero = () => {
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
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-koulen">
        <h1 className="text-5xl md:text-7xl font-bold font-koulen">Welcome to Atlas Fitness</h1>
        <h2 className="text-lg md:text-2xl">Your fitness journey starts here</h2>
        {scrollDownVisible && (
          <div className="absolute bottom-10">
            <p className="text-white text-xl md:text-2xl transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-0">Scroll Down</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
