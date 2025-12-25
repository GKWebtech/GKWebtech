import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-bg-light dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 z-10">
            <div className="inline-block relative mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -inset-1 border border-secondary border-dashed rounded-lg opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 px-4 py-1 rounded-md border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
                <span className="font-medium text-text-dark dark:text-gray-200">Growth Focused</span>
              </div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-secondary rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-secondary rounded-full"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-text-dark dark:text-white leading-tight mb-6 animate-fade-in-up opacity-0 transition-colors" style={{ animationDelay: '0.3s' }}>
              We are <span className="text-secondary underline decoration-secondary decoration-4 underline-offset-4">Gajkesri Webtech,</span><br/>
              Digital Marketing<br/>
              Experts Around the World.
            </h1>
            
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 text-lg animate-fade-in-up opacity-0 transition-colors" style={{ animationDelay: '0.5s' }}>
              We are an experienced Digital Marketing Agency helping brands scale with data-driven strategies, SEO, and creative campaigns.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
              <Button variant="primary" icon="arrow" href="/services">View Services</Button>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full border-2 border-text-dark dark:border-gray-200 font-medium hover:bg-text-dark dark:hover:bg-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-primary transition-colors inline-block cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
            <div className="relative z-10 w-full max-w-lg mx-auto">
               <div className="aspect-[4/5] relative">
                 {/* Yellow background shape */}
                 <div className="absolute right-0 top-10 w-3/4 h-3/4 bg-secondary rounded-full opacity-90 blur-3xl"></div>
                 <div className="absolute right-10 bottom-0 w-64 h-64 bg-secondary rounded-full z-0"></div>
                 
                 {/* Main Image */}
                 <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Gajkeri Webtech" 
                    className="relative z-10 w-full h-full object-cover rounded-b-full object-top mask-image-bottom"
                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                 />

                 {/* Floating Badges */}
                 <div className="absolute top-1/2 -right-4 md:-right-12 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="relative w-24 h-24">
                        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                          <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                          </defs>
                          <text fontSize="12" fill="#fff" fontWeight="bold" letterSpacing="2">
                            <textPath xlinkHref="#circle" className="text-primary fill-current">
                              GET RESULTS * GET RESULTS *
                            </textPath>
                          </text>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ArrowUpRight className="text-primary" />
                        </div>
                        <div className="absolute inset-0 bg-primary rounded-full -z-10 scale-90"></div>
                    </div>
                 </div>

                 <div className="absolute bottom-20 -left-4 md:-left-8 z-20 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce border border-gray-100 dark:border-gray-700 transition-colors" style={{ animationDuration: '4s' }}>
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold">$$</div>
                    <div>
                        <p className="text-xs text-gray-400 font-medium">Results</p>
                        <p className="font-bold text-sm dark:text-white">300% ROI</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-20 left-0 z-20 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                    Marketing Partners
                 </div>

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};