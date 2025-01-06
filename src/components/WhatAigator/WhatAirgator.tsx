import React from 'react';
import { useInView } from 'react-intersection-observer';
import  HeroBg from '../../assets/Group 1.svg';
import  Blur from '../../assets/blur.png';
import  BlueBg from '../../assets/blue-bg.png';
import  Arrow from '../../assets/arrow-narrow-up-right.png';

const WhatAigator = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`m-4 md:m-auto relative z-10 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
     <div className="bg-[#6854FF] max-w-7xl mx-auto my-10 rounded-3xl relative overflow-hidden" >
      <div className="inset-0 -z-10 ">
      <img src={HeroBg} alt="" className='w-full h-4/5 md:h-auto object-cover md:object-none absolute opacity-100' />
      <img src={Blur} alt="" className='w-full top-0 absolute opacity-[44%]' />

      </div>
     <div className="p-4 md:p-10 relative flex md:flex-row flex-col justify-between">
          <div className="p-4 md:p-10 text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
                What is AI Gator?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                AI Gator is an AI aggregator platform that connects users with the most optimal AI tools, enabling them to streamline workflows, enhance productivity, and save costs.
          </p>
          </div>
          <div className="justify-center hidden md:flex">
            <div className=" rounded-xl flex items-center">
              <div className="relative h-[50px] overflow-hidden rounded-xl rounded-r-none flex align-center">
                <img src={BlueBg} className='absolute top-[-30px]' />
                <div className="relative flex items-center px-4 gap-4">
                  <div className="text-2xl font-bold text-white">1305</div>
                  <div className="text-white/80 font-bold">joined waitlist</div>
                </div>
              </div>
              <button className=" relative h-[120px] w-[150px] flex items-end overflow-hidden text-purple-600 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                <img src={BlueBg} className='absolute w-full h-full' />
                <img src={Arrow} alt="" className='absolute top-8 right-8' />
                <h2 className='relative text-white text-left px-6 py-7 text-xl font-bold'> Join <br/>Waitlist</h2>
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
          <div className="relative h-36 mt-4 rounded-xl flex items-center flex-col w-full">
              <div className="absolute -right-4 -top-12">
                <div className="relative h-[50px] overflow-hidden rounded-xl rounded-r-none flex align-center">
                  <img src={BlueBg} className='absolute top-[-30px]' />
                  <div className="relative flex items-center px-4 gap-4">
                    <div className="text-2xl font-bold text-white">1305</div>
                    <div className="text-white/80 font-bold">joined waitlist</div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 top-4">
                <button className=" relative h-[120px] w-[180px] flex items-end overflow-hidden text-purple-600 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                  <img src={BlueBg} className='absolute w-full h-full' />
                  <img src={Arrow} alt="" className='absolute top-8 right-8' />
                  <h2 className='relative text-white text-left px-6 py-7 text-xl font-bold'> Join <br/>Waitlist</h2>
                </button>
              </div>
            </div>
          </div>
     </div>
     </div>
    </div>
  );
};

export {WhatAigator}