import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Quote, Maximize2, X } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { projectsData } from '../data';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [fullScreenMedia, setFullScreenMedia] = useState<{url: string, type: 'image' | 'video'} | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find(p => p.id === id);

  const handleStartProjectClick = () => {
    navigate('/services');
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4 bg-bg-light dark:bg-gray-950">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Project Not Found</h2>
        <Link to="/portfolio" className="text-secondary hover:underline">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <>
      <div className="pt-24 pb-20 bg-bg-light dark:bg-gray-950 min-h-screen transition-colors">
        
        {/* Hero Header */}
        <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
               <div className="container mx-auto px-4 md:px-6">
                   <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-secondary mb-6 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/10 w-fit">
                      <ArrowLeft size={16} />
                      <span>Back to Gallery</span>
                   </Link>
                   <div className="flex flex-wrap gap-4 items-center text-white/90 mb-4 text-sm font-medium">
                      <span className="bg-secondary text-primary px-3 py-1 rounded-full">{project.category}</span>
                      <span className="flex items-center gap-1"><MapPin size={16} /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={16} /> {project.duration}</span>
                   </div>
                   <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                   </h1>
               </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             
             {/* Left Content: Story */}
             <div className="lg:col-span-2 space-y-12">
                
                {/* Challenge & Solution */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800">
                   <div className="mb-10">
                      <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">The Challenge</h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                         {project.challenge}
                      </p>
                   </div>
                   <div>
                      <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">The Solution</h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                         {project.solution}
                      </p>
                   </div>
                </div>

                {/* Images Scroll View */}
                <div>
                   <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Project Images</h2>
                   <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory">
                      {project.gallery?.map((img, idx) => (
                         <div key={idx} className="relative min-w-[280px] md:min-w-[400px] h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer snap-center border border-gray-200 dark:border-gray-800">
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                               <button 
                                 onClick={() => setFullScreenMedia({url: img, type: 'image'})}
                                 className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-colors"
                               >
                                  <Maximize2 size={32} />
                               </button>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* ✅ Fixed YouTube Videos Section */}
                {project.youtubeIds && project.youtubeIds.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Project Videos</h2>

                    <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory">
                      {project.youtubeIds.map((yt, idx) => (
                        <div
                          key={idx}
                          className="relative min-w-[280px] md:min-w-[400px] h-64 md:h-80 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 bg-black snap-center"
                        >
                          <iframe
                            src={`https://www.youtube.com/embed/${yt}?rel=0&modestbranding=1&controls=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>

                          {/* Fullscreen overlay to open modal */}
                          <button
                            onClick={() => setFullScreenMedia({ url: `https://www.youtube.com/watch?v=${yt}`, type: 'video' })}
                            className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white hover:scale-110 transition"
                          >
                            <Maximize2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden text-white">
                     <Quote size={80} className="absolute top-4 right-8 text-white/10 rotate-180" />
                     <div className="relative z-10">
                        <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">"{project.testimonial.text}"</p>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-xl">
                              {project.testimonial.author.charAt(0)}
                           </div>
                           <div>
                              <h4 className="font-bold text-lg">{project.testimonial.author}</h4>
                              <p className="text-secondary text-sm">{project.testimonial.role}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                )}

             </div>

             {/* Right Sidebar: Stats & Info */}
             <div className="lg:col-span-1 space-y-8">
                <TiltCard className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 sticky top-24">
                   <h3 className="text-lg font-bold text-primary dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">Project Details</h3>
                   <div className="space-y-6">
                      <div>
                         <span className="block text-xs uppercase tracking-wide text-gray-400 mb-1">Client</span>
                         <span className="block text-lg font-bold text-text-dark dark:text-white">{project.client}</span>
                      </div>
                      <div>
                         <span className="block text-xs uppercase tracking-wide text-gray-400 mb-1">Services Provided</span>
                         <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag, i) => (
                               <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-bold">
                                 {tag}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                   <button 
                     onClick={handleStartProjectClick}
                     className="w-full mt-8 bg-secondary text-primary py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors shadow-lg"
                   >
                      Start Similar Project
                   </button>
                   <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                      <h4 className="font-bold text-primary dark:text-white mb-4 text-sm uppercase">Key Results</h4>
                      <ul className="space-y-3">
                        {project.results?.map((result, idx) => (
                           <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                              <span>{result}</span>
                           </li>
                        ))}
                      </ul>
                   </div>
                </TiltCard>
             </div>

          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {fullScreenMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up">
           <button 
             onClick={() => setFullScreenMedia(null)}
             className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
           >
              <X size={32} />
           </button>

           <div className="w-full h-full flex items-center justify-center max-w-7xl max-h-[90vh]">
              {fullScreenMedia.type === 'video' && (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeIds[0]}?controls=1&autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-[80vh] rounded-lg shadow-2xl border-0"
                ></iframe>
              )}
           </div>
        </div>
      )}
    </>
  );
};
