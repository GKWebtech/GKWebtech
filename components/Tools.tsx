import React from 'react';
import { Tool } from '../types';
import { SectionHeader } from './SectionHeader';

const tools: Tool[] = [
  { name: 'Next.js', percentage: 98, color: '#0070F3', icon: 'Nx' }, // Vercel Blue
  { name: 'WordPress', percentage: 95, color: '#21759B', icon: 'WP' }, // WordPress Blue
  { name: 'DaVinci Resolve', percentage: 92, color: '#5C6BC0', icon: 'DR' }, // Indigo
  { name: 'Semrush', percentage: 95, color: '#FF642D', icon: 'Se' }, // Semrush Orange
  { name: 'Canva', percentage: 96, color: '#00C4CC', icon: 'Ca' }, // Canva Teal
  { name: 'n8n', percentage: 90, color: '#EA4B71', icon: 'n8' }, // n8n Red
];

export const Tools: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Our Tech Stack" 
          title="Tools We Use to" 
          subtitle="Drive Growth"
          center 
        />
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-lg">
                {/* SVG Circle Progress */}
                <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 dark:text-gray-700 stroke-current transition-colors"
                    strokeWidth="4"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="stroke-current transition-all duration-1000 ease-out"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    style={{
                      stroke: tool.color,
                      strokeDasharray: 251.2,
                      strokeDashoffset: 251.2 - (251.2 * tool.percentage) / 100
                    }}
                  />
                </svg>
                {/* Icon Placeholder */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md z-10 transform group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: tool.color }}
                >
                  {tool.icon}
                </div>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-text-dark dark:text-white">{tool.percentage}%</span>
                <span className="text-gray-700 dark:text-gray-400 font-medium">{tool.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};