import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data';
import { TiltCard } from './TiltCard';
import { ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  // Ensure we start at the top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
           <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-0.5 w-4 bg-secondary"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Our Expertise
            </span>
            <span className="h-0.5 w-4 bg-secondary"></span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-white mb-6">
             All <span className="text-secondary">Services</span>
           </h1>
           <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             We offer a comprehensive suite of digital marketing solutions designed to elevate your brand, drive traffic, and convert leads into loyal customers.
           </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className="h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link to={`/service/${service.id}`} className="block h-full">
                    <TiltCard className="h-full relative z-0 hover:z-20 group">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none border border-gray-200 dark:border-gray-800 hover:border-secondary dark:hover:border-secondary transition-colors duration-300 cursor-pointer h-full relative overflow-hidden flex flex-col">
                            <div className="w-full h-64 bg-gray-50 dark:bg-gray-800 rounded-2xl mb-6 shadow-sm group-hover:shadow-md transition-all overflow-hidden border border-gray-100 dark:border-gray-700 relative flex-shrink-0">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-text-dark dark:text-white mb-4 line-clamp-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors">{service.title}</h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6 text-base leading-relaxed line-clamp-3 min-h-[4.5em] flex-grow">{service.description}</p>
                            <div className="flex items-center gap-2 text-primary dark:text-secondary font-semibold text-sm group-hover:text-secondary dark:group-hover:text-white transition-colors mt-auto">
                                <span>Learn more</span>
                                <ArrowRight size={16} />
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