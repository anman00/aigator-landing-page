import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FeatureCarousel } from './FeatureCarousel';
import { featuresData } from './featuresData';

export const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="relative pb-10 pt-10 md:pb-20 md:pt-0 overflow-hidden">
      <div className={`transition-all duration-1000 ${
        // inView ? 'opacity-100 translate-y-0 translate-x-[90px] md:translate-x-[45px]' : 'opacity-0 translate-y-10'
        inView ? 'opacity-100 ' : 'opacity-0'
      }`}>
        <FeatureCarousel features={featuresData} />
      </div>
    </section>
  );
};