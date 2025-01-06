import { useInView } from 'react-intersection-observer';
import { WhyAlgatorFeature } from './WhyAlgatorFeature';
import { whyAlgatorFeatures } from './whyAlgatorData';

export const WhyAlgatorContent = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="mb-12">
        <span className='text-md text-[#838DFF]'>
             Why Algator?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-[450px]">
        AI Gator simplifies AI selection and usage by offering:
        </h2>
        <p className="text-xl text-white/80 max-w-2xl max-w-[550px]">
        In a world of endless AI options, finding the right tool can be overwhelming and time-consuming. AI Gator bridges the gap by providing a seamless way to explore, compare, and utilize the best AI models—all in one platform. Whether you’re a professional or a casual user, AI Gator ensures you get the most out of AI with ease.

        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {whyAlgatorFeatures.map((feature, index) => (
          <WhyAlgatorFeature key={index} {...feature} />
        ))}
      </div>
      
    
    </div>
  );
};