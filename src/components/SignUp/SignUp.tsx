import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SignUpForm } from './SignUpForm';
import  BlueBg from '../../assets/blue-bg.png';

export const SignUp = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="relative p-4 md:p-20">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#9C3FE4] to-[#4C65F6]" /> */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e')] bg-cover bg-center mix-blend-overlay opacity-30" /> */}
      
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-5 gap-2">
        <div className={`text-white relaative col-span-2 transition-all overflow-hidden rounded-2xl duration-1000 min-h-[400px] ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <img src={BlueBg} className='absolute w-full h-full' />
         <div className="relative p-8">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be the First to Experience Algator
          </h2>
          <p className="text-xl text-white/90">
            Sign up for early access and get exclusive entry to our beta testing program.
          </p>
         </div>
        </div>
        <div className={`bg-white/5 col-span-3 flex justify-center relative backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <img src={BlueBg} className='absolute w-full h-full' />

          <SignUpForm />
        </div>
      </div>
    </section>
  );
};