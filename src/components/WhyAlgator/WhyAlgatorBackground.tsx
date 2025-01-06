import React from 'react';
import BlackBg from '../../assets/black-bg.png';

export const WhyAlgatorBackground = () => (
  <div className="absolute inset-0">
    {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#2a1a3a]" /> */}
    {/* <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{backgroundImage:  }} /> */}
    <img src={BlackBg} alt="" className="bg-cover bg-center opacity-100 w-full h-full object-cover" />
  </div>
);