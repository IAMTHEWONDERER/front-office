import React from 'react'
import Hero from '../components/homepage/Hero';
import Selftalk from '../components/homepage/Selftalk';
import Newsletter from '../components/homepage/Newsletter';
import ServiceCard from '../components/homepage/ServiceCard';

const HomePage = () => {
  return (
    <>
        <Hero/>
        <Selftalk/>
        <ServiceCard/>
        <Newsletter/>

        </>
  )
}

export default HomePage