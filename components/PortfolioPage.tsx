import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiltCard } from './TiltCard';
import { ArrowRight, Play, Image as ImageIcon, MapPin, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data';
import { Seo } from './Seo';

export const PortfolioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
      <Seo
        title="Portfolio | Gajkesri Webtech"
        description="Case studies and visual campaigns across hospitality, wellness, events, and more."
        keywords="portfolio, case studies, photography, videography, branding, hospitality, wellness"
        canonical={`${window.location.origin}/portfolio`}
        image={`${window.location.origin}/images/logo.png`}
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Portfolio",
          "url": `${window.location.origin}/portfolio`
        }}
      />
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Back Button */}
        <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors font-medium">
                <ArrowLeft size={20} />
                Back to Home
            </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
           <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-0.5 w-4 bg-secondary"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Our Work
            </span>
            <span className="h-0.5 w-4 bg-secondary"></span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-white mb-6">
             Full <span className="text-secondary">Gallery</span>
           </h1>
           <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Explore our diverse portfolio of digital campaigns, visual storytelling, and brand transformations.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <Link to={`/portfolio/${project.id}`} className="block h-full group">
                <TiltCard className="h-full bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-none border border-gray-300 dark:border-gray-800 hover:shadow-2xl hover:border-secondary dark:hover:border-secondary transition-all duration-300 flex flex-col">
                    
                    {/* Image Section */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Media Badges */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-primary">
                            <Play size={12} fill="currentColor" />
                            <span>{project.mediaStats.videos}</span>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-primary">
                            <ImageIcon size={12} />
                            <span>{project.mediaStats.photos}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center gap-2 text-white font-medium text-xs bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                            <MapPin size={12} />
                            <span>{project.location}</span>
                        </div>
                    </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-2">
                        <span className="text-secondary font-bold text-xs uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 text-sm line-clamp-3 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full text-xs font-medium">
                            #{tag}
                        </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary dark:text-secondary font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        View Case Study <ArrowRight size={16} />
                    </div>
                    </div>

                </TiltCard>
            </Link>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};
