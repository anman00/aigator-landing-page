import React from 'react';
import { WhyAlgatorBackground } from './WhyAlgatorBackground';
import { WhyAlgatorContent } from './WhyAlgatorContent';

export const WhyAlgator = () => (
  <section className="relative p-4 pt-10 md:p-20 overflow-hidden">
    <WhyAlgatorBackground />
    <WhyAlgatorContent />
  </section>
);