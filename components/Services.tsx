import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { servicesData } from '../data';

export const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Triple the data to create buffers on both sides (Start Buffer | Real Data | End Buffer)
  const extendedServices = [...servicesData, ...servicesData, ...servicesData];

  useEffect(() => {
    // Center the scroll view on the middle set initially
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // Small timeout ensures layout is computed
        setTimeout(() => {
            const oneThird = container.scrollWidth / 3;
            container.scrollLeft = oneThird;
        }, 0);
    }
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const oneThird = totalWidth / 3;
    const currentScroll = container.scrollLeft;
    
    // Jump thresholds
    // If we scroll too far left (into the first cloned set), jump forward to the middle set
    if (currentScroll <= 50) {
        container.style.scrollBehavior = 'auto'; // Disable smooth scroll for instant jump
        container.scrollLeft = currentScroll + oneThird;
        container.style.scrollBehavior = ''; // Reset
    } 
    // If we scroll too far right (into the third cloned set), jump backward to the middle set
    else if (currentScroll >= (2 * oneThird) + 50) { // Using a safe buffer into the 3rd set
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = currentScroll - oneThird;
        container.style.scrollBehavior = '';
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const cardWidth = current.firstElementChild?.clientWidth || 300;
      const gap = 24; // 1.5rem gap (gap-6)
      const scrollAmount = cardWidth + gap;

      current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <SectionHeader label="Our Services" title="Solutions We" subtitle="Provide" />
           <div className="mb-12">
               <Link to="/services" className="bg-primary text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
                  <span className="font-medium">View All Services</span>
                  <span className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
               </Link>
           </div>
        </div>

        <div className="relative group">
            {/* Navigation Buttons */}
            <button 
                onClick={() => scroll('left')} 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-primary dark:text-white hover:bg-secondary dark:hover:bg-secondary hover:text-primary transition-all md:-ml-6 border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hidden md:flex"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-4 md:px-0"
            >
                {extendedServices.map((service, index) => (
                    <div 
                      // Using index as key because of duplicates
                      key={`${service.id}-${index}`} 
                      className="shrink-0 snap-center w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[23vw] 2xl:w-[18vw] h-full"
                    >
                        <Link to={`/service/${service.id}`} className="block h-full">
                            <TiltCard className="h-full relative z-0 hover:z-20 group">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl dark:shadow-none border border-gray-300 dark:border-gray-800 hover:border-secondary dark:hover:border-secondary transition-colors duration-300 cursor-pointer h-full relative overflow-hidden flex flex-col">
                                    <div className="w-full h-48 lg:h-56 bg-gray-50 dark:bg-gray-800 rounded-2xl mb-6 shadow-sm group-hover:shadow-md transition-all overflow-hidden border border-gray-100 dark:border-gray-700 relative flex-shrink-0">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-text-dark dark:text-white mb-4 line-clamp-1">{service.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm lg:text-base leading-relaxed line-clamp-3 min-h-[4.5em] flex-grow">{service.description}</p>
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

            <button 
                onClick={() => scroll('right')} 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-primary dark:text-white hover:bg-secondary dark:hover:bg-secondary hover:text-primary transition-all md:-mr-6 border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hidden md:flex"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};