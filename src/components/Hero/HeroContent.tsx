import React from 'react';
import { useInView } from 'react-intersection-observer';

export const HeroContent = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`relative z-10 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
        Your Gateway To The World's Best AI Models
      </h1>
      <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Discover, compare, and access cutting-edge AI tools with AI Gator - the smarter way to harness AI
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <a href="#waitlist">
        <button className="min-w-[220px] bg-gradient-to-r from-[#FD8151] to-[#FF00E5] text-white px-8 py-3 rounded-xl hover:bg-opacity-90 transition-all font-medium">
            Beta Coming Soon...
          </button>
       </a>
        <a href="#waitlist">
        <button className="min-w-[220px] bg-white bg-opacity-20  text-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#9C3FE4] transition-all font-medium">
          Join waitlist
        </button>
        </a>
      </div>
    </div>
  );
};