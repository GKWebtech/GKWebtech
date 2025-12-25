import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { ArrowRight, Play, Image as ImageIcon, MapPin } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { Link } from 'react-router-dom';
import { projectsData } from '../data';

export const Portfolio: React.FC = () => {
  // Only show the first 3 projects on the home page
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeader 
            label="Our Portfolio" 
            title="Capturing" 
            subtitle="Heritage & Luxury" 
          />
          <div className="mb-12">
             <Button variant="primary" icon="arrow" href="/portfolio">View Full Gallery</Button>
          </div>
        </div>

        <div className="space-y-16">
        {displayedProjects.map((project, idx) => (
            <Link to={`/portfolio/${project.id}`} key={idx} className="block group">
            <TiltCard className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-4 shadow-xl dark:shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-300 dark:border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Image Section */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[400px]">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Media Badges */}
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-primary">
                        <Play size={14} fill="currentColor" />
                        <span>{project.mediaStats.videos} Videos</span>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-primary">
                        <ImageIcon size={14} />
                        <span>{project.mediaStats.photos} Photos</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 lg:pr-8">
                    <div className="flex items-center gap-2 text-secondary font-semibold text-sm mb-3">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-[#2D5C4B] bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-emerald-300 rounded-full text-xs font-semibold tracking-wide uppercase">
                        {tag}
                        </span>
                    ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-8">
                    {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                    <button className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors">
                        <ArrowRight size={24} />
                    </button>
                    <span className="font-medium text-sm text-gray-400 dark:text-gray-500 group-hover:text-secondary transition-colors">View Project Case Study</span>
                    </div>
                </div>
                </div>
            </TiltCard>
            </Link>
        ))}
        </div>
      </div>
    </section>
  );
};