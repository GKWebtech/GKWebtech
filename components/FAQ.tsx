import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in organic traffic and rankings within 3 to 6 months."
  },
  {
    q: "Do you offer custom marketing packages?",
    a: "Yes, we understand every business is unique. We offer tailored packages to fit your specific goals, budget, and industry requirements."
  },
  {
    q: "Which social media platforms should my business be on?",
    a: "It depends on your target audience. B2B businesses usually thrive on LinkedIn, while lifestyle brands see great engagement on Instagram and TikTok."
  },
  {
    q: "How do you report on campaign performance?",
    a: "We provide detailed monthly reports and have bi-weekly strategy calls. You'll have access to a custom dashboard tracking KPIs like ROI, Traffic, and Conversions."
  },
  {
    q: "Can you help with rebranding?",
    a: "Absolutely. Our creative team specializes in brand strategy, logo design, and visual identity to give your business a fresh, modern look."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(1); // Default open second item as per design

  return (
    <section className="py-20 bg-primary" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
           label="Common Queries" 
           title="Frequently Asked" 
           subtitle="Questions" 
           center 
           light
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-secondary' : 'bg-[#3A5A4D]'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  {isOpen ? <Minus className="text-primary" /> : <Plus className="text-white" />}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-primary opacity-80 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};