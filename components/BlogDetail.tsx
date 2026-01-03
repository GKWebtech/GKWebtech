import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data';
import { ArrowLeft, User, Calendar, Clock, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { Seo } from './Seo';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogsData.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4 bg-bg-light dark:bg-gray-950">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Article Not Found</h2>
        <Link to="/blogs" className="text-secondary hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
      <Seo
        title={`${blog.title} | Gajkesri Webtech`}
        description={blog.excerpt}
        keywords={(blog.tags || []).join(', ')}
        canonical={window.location.href}
        image={blog.image}
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": blog.title,
          "image": [blog.image],
          "author": {"@type":"Person","name": blog.author},
          "datePublished": blog.date
        }}
      />
      
      {/* Article Header Background */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
             <div className="container mx-auto px-4 text-center">
                 <Link to="/blogs" className="inline-flex items-center gap-2 text-white/80 hover:text-secondary mb-6 transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full">
                    <ArrowLeft size={16} />
                    <span>Back to Articles</span>
                 </Link>
             </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30 -mt-32">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
           
           <div className="p-8 md:p-12">
              {/* Meta Data */}
              <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm text-gray-500 dark:text-gray-400 mb-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                 <span className="bg-secondary/20 text-primary dark:text-secondary px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
                    {blog.category}
                 </span>
                 <div className="flex items-center gap-2">
                    <Calendar size={16} /> {blog.date}
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock size={16} /> {blog.readTime}
                 </div>
                 <div className="flex items-center gap-2">
                    <User size={16} /> By {blog.author}
                 </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-text-dark dark:text-white mb-8 leading-tight">
                {blog.title}
              </h1>

              {/* Content Body */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>

              {/* Tags and Share */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex flex-wrap gap-2">
                    {blog.tags?.map((tag, idx) => (
                       <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                          #{tag}
                       </span>
                    ))}
                 </div>

                 <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-400 flex items-center gap-2">
                       <Share2 size={16} /> Share:
                    </span>
                    <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                       <Facebook size={16} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                       <Twitter size={16} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                       <Linkedin size={16} />
                    </button>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};
