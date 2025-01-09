import React from 'react';
import HeroBg from '../../assets/Group 1.svg';
import MobileBg from '../../assets/mobile-bg.png';
import Blur from '../../assets/blur.png';

export const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FF7366] via-[#9C3FE4] to-[#4C65F6] opacity-90" /> */}
    {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e')] bg-cover bg-center mix-blend-overlay" /> */}
    <img src={HeroBg} alt="" className='w-full h-[100vh] object-cover hidden md:block md:absolute md:h-auto md:object-contain' />
    <img src={MobileBg} alt="" className='w-full h-[100vh] object-cover md:hidden block absolute' />
    {/* <img src={Blur} alt="" className='w-full top-0 absolute opacity-[44%]' /> */}
  </div>
);