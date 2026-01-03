import React from 'react';
import { Seo } from './Seo';

export const Tools: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <Seo
        title="Tools & Downloads | Gajkesari Digital Agency"
        description="Download resources and tools to accelerate your marketing performance."
        keywords="tools, downloads, resources, marketing tools"
        canonical={`${window.location.origin}/tools`}
        image={`${window.location.origin}/images/logo.png`}
        type="website"
      />
      <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-4">
        Coming Soon
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Tools & downloads are under construction 🚀
      </p>
    </div>
  );
};

