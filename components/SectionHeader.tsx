import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string; // Sometimes the title is split into two lines or has a highlight
  center?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  subtitle,
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
        <span className="h-0.5 w-4 bg-secondary"></span>
        <span className={`text-sm font-semibold uppercase tracking-wider ${light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
          {label}
        </span>
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-text-dark dark:text-white'}`}>
        {title} <span className="text-secondary">{subtitle}</span>
      </h2>
    </div>
  );
};