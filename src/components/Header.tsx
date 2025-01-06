// import React from 'react';
// import { useInView } from 'react-intersection-observer';

export const Header = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true
  // });

  return (
    <header className="w-full py-4 px-4 md:px-20 flex justify-between items-center bg-transparent absolute top-0 z-50">
      <div className="text-white text-2xl font-bold">✧ Algator</div>
      {/* <button className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-[#9C3FE4] transition-all">
        Log in
      </button> */}
    </header>
  );
};