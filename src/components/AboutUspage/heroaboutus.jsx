import React, { useState, useEffect } from 'react';
import aboutusimg from '../../imgs/ABOUTUSIMAGE.jpg';

const Aboutushero = () => {
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
      <div className="mt-4 relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${aboutusimg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="pl-15 pr-15 absolute inset-0 flex flex-col items-center justify-center text-center text-white font-koulen">
          <h1 className="text-xl md:text-7xl font-koulen">WE ARE ATLAS</h1><br /><br /><br />
          <h2 className="md:text-4xl ml-10 mr-10 mb-5 font-koulen">The first moroccan fitness coaching service that connects coaches with</h2>  
          <h2 className="md:text-4xl ml-10 mr-10 mb-5 font-koulen"> fitness enthusiasts from all over morocco, We provide a platform for both</h2>
          <h2 className="md:text-4xl ml-10 mr-10 mb-10 font-koulen">coaches and clients to connect.</h2>
        </div> 
      </div>  
    </div>
    );
}
export default Aboutushero;