import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { WhyAlgator } from './components/WhyAlgator/WhyAlgator';
import { SignUp } from './components/SignUp/SignUp';
import { Footer } from './components/Footer';
import { HeroBackground } from './components/Hero/HeroBackground';
import { WhatAigator } from './components/WhatAigator/WhatAirgator';

function App() {
  return (
    <div className="min-h-screen">
      <HeroBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <WhatAigator />
        <WhyAlgator />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;