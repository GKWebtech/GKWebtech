import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { blogsData } from '../data';

export const Blog: React.FC = () => {
  // Only show the first 3 blogs on the home page
  const displayedBlogs = blogsData.slice(0, 3);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors" id="blogs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <SectionHeader label="Insights" title="Marketing" subtitle="News & Trends" />
           <div className="mb-12">
               <Button variant="primary" icon="arrow" href="/blogs" className="bg-primary text-white hover:bg-primary-dark dark:bg-gray-800 dark:hover:bg-gray-700">
                 View All Articles
               </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedBlogs.map((blog, idx) => (
            <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Link to={`/blog/${blog.id}`} className="block group cursor-pointer bg-white dark:bg-gray-900 rounded-3xl p-5 shadow-xl dark:shadow-none border border-gray-300 dark:border-gray-800 hover:border-secondary transition-all duration-300">
                <div className="rounded-2xl overflow-hidden mb-6 relative aspect-[4/3]">
                   <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   {/* Floating arrow on hover or static */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <span className="text-primary font-bold text-xl">↗</span>
                   </div>
                </div>
                <div className="flex gap-4 mb-3 text-xs font-semibold">
                  <span className="bg-secondary/20 text-primary dark:text-secondary px-3 py-1 rounded-full">{blog.category}</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-full">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-500 text-sm mb-4 line-clamp-2">
                   {blog.excerpt}
                </p>
                <span className="text-primary dark:text-secondary font-semibold text-sm underline underline-offset-4 decoration-secondary group-hover:no-underline">Read More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};