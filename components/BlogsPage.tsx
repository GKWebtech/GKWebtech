import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data';
import { ArrowRight, ArrowLeft, User, Clock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { TiltCard } from './TiltCard';
import { Seo } from './Seo';

export const BlogsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
      <Seo
        title="Blog | Gajkesri Webtech"
        description="Insights on SEO, social media, PPC, content strategy, and web development."
        keywords="blog, SEO trends, social media, PPC, content strategy, web development"
        canonical={`${window.location.origin}/blogs`}
        image={`${window.location.origin}/images/logo.png`}
        type="website"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors backdrop-blur-sm bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
           <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-0.5 w-4 bg-secondary"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Our Insights
            </span>
            <span className="h-0.5 w-4 bg-secondary"></span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-white mb-6">
             Latest <span className="text-secondary">Articles</span>
           </h1>
           <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Expert analysis, digital marketing trends, and actionable strategies to help your business grow.
           </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <div key={blog.id} className="animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
               <Link to={`/blog/${blog.id}`} className="block h-full group">
                  <TiltCard className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:border-secondary dark:hover:border-secondary transition-all duration-300 h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                       <img 
                         src={blog.image} 
                         alt={blog.title} 
                         loading="lazy"
                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                       />
                       <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {blog.category}
                       </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                       <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                          <span className="flex text-gray-600 dark:text-gray-400 items-center gap-1">
                             <Clock size={14} /> {blog.readTime}
                          </span>
                          <span>|</span>
                          <span className="flex text-gray-600 dark:text-gray-400 items-center gap-1">
                             <User size={14} /> {blog.author}
                          </span>
                       </div>

                       <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                          {blog.title}
                       </h3>
                       
                       <p className="text-gray-700 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                          {blog.excerpt}
                       </p>

                       <div className="flex items-center text-primary dark:text-secondary font-semibold text-sm mt-auto group-hover:underline decoration-2 underline-offset-4">
                          Read Full Article <ArrowRight size={16} className="ml-2" />
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
