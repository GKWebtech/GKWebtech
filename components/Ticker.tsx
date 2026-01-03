import React from 'react';
import { Asterisk } from 'lucide-react';

export const Ticker: React.FC = () => {
  const items = ["SEO Optimization", "Social Media Marketing", "Content Strategy & Analysis", "Google & Meta Ads", "Campaign Planning & Analytics", "Website Management", "Creative Reels"];

  return (
    <div className="bg-secondary py-6 overflow-hidden relative transform -skew-y-1 origin-bottom-left md:skew-y-0 xl:mx-[-2rem] 2xl:mx-[-4rem]">
       <div className="absolute inset-0 bg-primary opacity-0 md:hidden"></div> {/* Mobile adjustment if needed */}
       <div className="flex gap-12 whitespace-nowrap animate-marquee items-center">
         {[...items, ...items, ...items].map((item, index) => (
           <div key={index} className="flex items-center gap-12 text-2xl md:text-3xl font-bold text-primary opacity-90">
             <span>{item}</span>
             <Asterisk size={32} strokeWidth={3} className="opacity-60" />
           </div>
         ))}
       </div>
    </div>
  );
};
