import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary text-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
           
           {/* Left Image Circle */}
           <div className="relative flex-shrink-0">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-secondary p-2 relative z-10">
                 <img 
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                   alt="ri Webtech" 
                   className="w-full h-full rounded-full object-cover border-4 border-primary"
                 />
                 
                 {/* Floating tags */}
                 <div className="absolute top-4 -left-4 bg-[#2D5C4B] px-4 py-2 rounded-full text-xs font-semibold text-secondary border border-secondary">
                   Digital Strategy
                 </div>
                 <div className="absolute top-1/2 -right-8 bg-[#2D5C4B] px-4 py-2 rounded-full text-xs font-semibold text-secondary border border-secondary">
                   SEO Analysis
                 </div>
                 <div className="absolute bottom-10 -left-0 bg-[#2D5C4B] px-4 py-2 rounded-full text-xs font-semibold text-secondary border border-secondary">
                   Lead Gen
                 </div>
                 <div className="absolute bottom-0 right-10 bg-[#2D5C4B] px-4 py-2 rounded-full text-xs font-semibold text-secondary border border-secondary">
                   PPC Ads
                 </div>
              </div>
              <div className="absolute inset-0 bg-secondary rounded-full blur-[100px] opacity-20 -z-0"></div>
           </div>

           {/* Right Content */}
           <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-4 bg-secondary"></span>
                <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who is <span className="text-secondary">Gajkesri Webtech?</span>
              </h2>
              <p className="text-gray-300 mb-10 leading-relaxed max-w-xl">
                We are a full-service digital marketing agency dedicated to growing your business. From small startups to large enterprises, we tailor our strategies to meet your unique goals and deliver measurable results.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-10 border-b border-gray-600 pb-10">
                <div>
                   <h3 className="text-3xl font-bold text-secondary mb-1">600+</h3>
                   <p className="text-gray-400 text-sm">Campaigns Delivered</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-secondary mb-1">50+</h3>
                   <p className="text-gray-400 text-sm">Industries Served</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-secondary mb-1">18+</h3>
                   <p className="text-gray-400 text-sm">Years of Excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <button 
                  onClick={scrollToContact}
                  className="bg-[#2D5C4B] border border-secondary text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 hover:bg-secondary hover:text-primary transition-all group cursor-pointer"
                >
                   <span className="font-medium text-sm">Contact Us</span>
                   <span className="w-8 h-8 rounded-full bg-white text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                     <ArrowRight size={16} />
                   </span>
                </button>
                
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};