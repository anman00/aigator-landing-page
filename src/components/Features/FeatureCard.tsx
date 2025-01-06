import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const FeatureCard = ({ title, description, icon: Icon, image }: FeatureCardProps) => (
  <div className="relative group">
    {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" /> */}
    <div className="relative rounded-2xl p-4 border bg-white border-white/20 w-[300px] md:min-w-[400px] hover:border-white/40 transition-all h-full">
      <div className="w-full h-[50%] mb-6 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* <Icon className="w-8 h-8 text-purple-400 mb-4" /> */}
      <h3 className="text-xl font-bold mb-2 ">{title}</h3>
      <p className="">{description}</p>
    </div>
  </div>
);