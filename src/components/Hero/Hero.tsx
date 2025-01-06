import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export const Hero = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32 sm:pt-auto">
    <HeroContent />
  </section>
);