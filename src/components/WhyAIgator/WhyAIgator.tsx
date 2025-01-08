import React from 'react';
import { WhyAIgatorContent } from './WhyAIgatorContent';
import { WhyAIgatorBackground } from './WhyAIgatorBackground';


export const WhyAIgator = () => (
  <section className="relative p-4 pt-10 md:p-20 overflow-hidden">
    <WhyAIgatorBackground />
    <WhyAIgatorContent />
  </section>
);