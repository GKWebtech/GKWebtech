import React from 'react';
import { Trophy, History } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { ExperienceItem } from '../types';
import { TiltCard } from './TiltCard';

const awards: ExperienceItem[] = [
  { period: '2023', role: 'Best SEO Agency', company: 'Digital Excellence Awards' },
  { period: '2021', role: 'Top Content Strategy', company: 'Global Marketing Awards' },
  { period: '2019', role: 'Rising Star Agency', company: 'Agency World' },
];

const history: ExperienceItem[] = [
  { period: '2018-Present', role: 'Global Expansion', company: 'Opened offices in Europe' },
  { period: '2016-2018', role: 'Agency Founded', company: 'Started as a small creative studio' },
  { period: '2014-2016', role: 'Initial Consulting', company: 'Freelance marketing consulting' },
];

export const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="Our Journey" 
          title="Awards and" 
          subtitle="Company History"
          center 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* Awards Column */}
          <TiltCard className="bg-white p-8 rounded-3xl shadow-sm h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center text-secondary">
                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <Trophy size={18} />
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-text-dark">Recognition</h3>
            </div>
            
            <div className="space-y-8 pl-4 border-l-2 border-dashed border-gray-200">
              {awards.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                   <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-gray-200"></div>
                  <span className="text-sm text-gray-400 font-medium mb-1 block">{item.period}</span>
                  <h4 className="text-lg font-bold text-text-dark">{item.role}</h4>
                  <p className="text-gray-500">{item.company}</p>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* History Column */}
          <TiltCard className="bg-white p-8 rounded-3xl shadow-sm h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center text-secondary">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <History size={18} />
                  </div>
              </div>
              <h3 className="text-2xl font-bold text-text-dark">Milestones</h3>
            </div>
            
            <div className="space-y-8 pl-4 border-l-2 border-dashed border-gray-200">
              {history.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-gray-200"></div>
                  <span className="text-sm text-gray-400 font-medium mb-1 block">{item.period}</span>
                  <h4 className="text-lg font-bold text-text-dark">{item.role}</h4>
                  <p className="text-gray-500">{item.company}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};