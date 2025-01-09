import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WhyAIgatorFeatureProps {
  icon: LucideIcon;
  title: string;
}

export const WhyAIgatorFeature = ({ icon , title } : any) => (
  <div className="flex items-center gap-2 md:gap-4 bg-[#080809] bg-opacity-40 backdrop-blur-md rounded-full py-2 md:py-4 pl-4 pr-4 md:px-8 transition-all">
    {/* <Icon className="" /> */}
    <img src={icon} alt="" className="w-[24px] md:w-auto" />
    <span className="text-white md:font-medium">{title}</span>
  </div>
);