import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { SignUp } from './components/SignUp/SignUp';
import { Footer } from './components/Footer';
import { HeroBackground } from './components/Hero/HeroBackground';
import { WhatAigator } from './components/WhatAigator/WhatAirgator';
import { WhyAIgator } from './components/WhyAIgator/WhyAIgator';

function App() {
  return (
    <div className="min-h-screen relative" id="wrapper">
      <HeroBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <WhatAigator />
        <WhyAIgator />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;