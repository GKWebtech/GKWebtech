import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data';
import { ArrowLeft, Check, Download, ArrowRight, Mail } from 'lucide-react';
import { BrochureModal } from './BrochureModal';
import { TiltCard } from './TiltCard';
import { Seo } from './Seo';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === id);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Service Not Found</h2>
        <Link to="/" className="text-secondary hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${service.title} | Gajkesari Digital Agency`}
        description={service.description}
        keywords={service.features.join(', ')}
        canonical={`${window.location.origin}/service/${service.id}`}
        image={service.detailImage}
        type="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `${window.location.origin}/service/${service.id}`,
          "image": service.detailImage
        }}
      />
      <div className="pt-24 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen">
        {/* Hero Header */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={service.detailImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
             <div className="container mx-auto px-4 text-center">
               <Link to="/#services" className="inline-flex items-center gap-2 text-white/80 hover:text-secondary mb-6 transition-colors">
                 <ArrowLeft size={20} />
                 <span>Back to Services</span>
               </Link>
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">{service.title}</h1>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  {service.fullDescription}
                </p>
                
                <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Key Features & Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery / Visuals Placeholder */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                 <div className="grid grid-cols-2 h-64 md:h-80">
                    <div className="h-full">
                       <img src={service.image} className="w-full h-full object-cover" alt="Detail 1" loading="lazy" />
                    </div>
                    <div className="h-full bg-secondary/10 flex items-center justify-center p-8 text-center">
                       <div>
                          <h4 className="text-4xl font-bold text-primary dark:text-white mb-2">100%</h4>
                          <p className="text-sm font-medium text-gray-500">Client Satisfaction Guaranteed</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 relative z-10">
              
              {/* CTA Card */}
              <TiltCard className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-[50px] opacity-20"></div>
                 <h3 className="text-2xl font-bold mb-4">Ready to grow?</h3>
                 <p className="text-gray-300 mb-8 text-sm">Get a custom strategy tailored to your business needs today.</p>
                 
                 <div className="space-y-4">
                   <button 
                     onClick={handleContactClick}
                     className="bg-secondary text-primary w-full py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
                   >
                     <span>Contact Us</span>
                     <Mail size={18} />
                   </button>
                 </div>
              </TiltCard>

              {/* Need Help Card */}
              <TiltCard className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                 <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Need immediate help?</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Call our support team 24/7</p>
                 <a href="tel:+919971944676" className="text-2xl font-bold text-secondary hover:underline">
                   +91 99719 44676
                 </a>
              </TiltCard>

            </div>
          </div>
        </div>
      </div>
      
      <BrochureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={service.title}
      />
    </>
  );
};
