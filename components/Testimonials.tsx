import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { testimonialsData } from '../data';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Client Success" 
          title="What Our" 
          subtitle="Partners Say"
          center 
        />

        <div className="relative max-w-6xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {/* We display all testimonials in a grid for simplicity in this implementation, 
                or mapping a slice if we want carousel logic.
                Here we stick to the grid layout used in previous version but with dynamic data. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {testimonialsData.map((item, idx) => (
                <TiltCard key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl dark:shadow-none border border-gray-300 dark:border-gray-700 relative group hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="absolute top-8 right-8 opacity-10">
                    <Quote size={64} className="text-primary dark:text-white fill-current" />
                    </div>
                    <div className="flex gap-1 mb-6 text-secondary">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < item.rating ? "currentColor" : "none"} />
                    ))}
                    <span className="text-text-dark dark:text-white font-bold ml-2 text-sm">{item.rating}.0</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-sm">
                    {item.text}
                    </p>
                    <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700" />
                    <div>
                        <h4 className="font-bold text-text-dark dark:text-white text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                    </div>
                </TiltCard>
                ))}
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};