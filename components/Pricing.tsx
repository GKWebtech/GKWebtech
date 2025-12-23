import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Check, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/Month',
    features: [
      'Basic SEO Audit',
      'Social Media Management (2 Platforms)',
      'Monthly Content Calendar',
      'Performance Reporting',
      'Email Support',
      'Keyword Research',
      'Competitor Analysis'
    ],
    bg: 'bg-[#3A5A4D]', // Lighter green for cards
    button: 'primary'
  },
  {
    name: 'Growth',
    price: '$2,499',
    period: '/Month',
    features: [
      'Advanced SEO Strategy',
      'Social Media (4 Platforms)',
      'PPC Campaign Management',
      'Weekly Blog Posts',
      'Conversion Rate Optimization',
      'Dedicated Account Manager',
      'Bi-Weekly Strategy Calls',
      'Custom Analytics Dashboard'
    ],
    bg: 'bg-secondary',
    isPopular: true,
    button: 'dark'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Full-Service Digital Marketing',
      'Omnichannel Strategy',
      'PR & Influencer Outreach',
      'Video Production',
      'International SEO',
      '24/7 Priority Support',
      'Custom Tech Integrations',
      'Executive Reporting'
    ],
    bg: 'bg-[#3A5A4D]',
    button: 'primary'
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
           <SectionHeader 
            label="Pricing Plans" 
            title="Choose Your" 
            subtitle="Growth Plan" 
            light 
          />
          {/* Toggle could go here */}
          <div className="hidden md:flex bg-primary-dark rounded-full p-1 items-center">
             <button className="px-6 py-2 rounded-full bg-secondary text-primary font-medium text-sm">Monthly</button>
             <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full ml-2">
                <ArrowUpRight size={20} className="text-primary"/>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <TiltCard 
              key={idx} 
              className={`rounded-3xl p-8 relative h-full ${plan.bg} ${plan.isPopular ? 'text-primary transform md:-translate-y-4' : 'text-gray-300'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                   <h3 className={`text-lg font-medium mb-2 ${plan.isPopular ? 'text-primary' : 'text-white'}`}>{plan.name}</h3>
                   <div className="flex items-baseline">
                     <span className={`text-4xl font-bold ${plan.isPopular ? 'text-primary' : 'text-secondary'}`}>{plan.price}</span>
                     <span className="text-sm ml-1 opacity-70">{plan.period}</span>
                   </div>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
                      <Check size={10} />
                    </div>
                    <span className={`text-sm ${plan.isPopular ? 'text-primary font-medium' : 'text-gray-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};