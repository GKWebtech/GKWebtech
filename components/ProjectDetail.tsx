import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Quote, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { projectsData } from '../data';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [fullScreenMedia, setFullScreenMedia] = useState<{url: string, type: 'image' | 'video'} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find(p => p.id === id);
  const galleryImages = project?.gallery || [];

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openFullScreenImage = (img: string) => {
    const index = galleryImages.indexOf(img);
    setCurrentImageIndex(index >= 0 ? index : 0);
    setFullScreenMedia({ url: img, type: 'image' });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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

        {/* Normal Gallery with Scroll Buttons ✔ */}
        <div className="container mx-auto px-4 md:px-6 mt-12">
          <div className="relative flex items-center">

            {/* Left Scroll Button */}
            <button
              onClick={(e) => { e.stopPropagation(); galleryScrollRef.current?.scrollBy({ left: -400, behavior: "smooth" }); }}
              className="absolute left-[-18px] bg-[#1F4037]/80 dark:bg-gray-800/80 text-white p-2 rounded-full z-20 hover:bg-secondary transition"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Scrollable Images */}
            <div
              ref={galleryScrollRef}
              id="gallery-scroll"
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
            >
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative min-w-[280px] md:min-w-[400px] h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-200 dark:border-gray-800 snap-center">
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); openFullScreenImage(img); }}
                      className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <Maximize2 size={32} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={(e) => { e.stopPropagation(); galleryScrollRef.current?.scrollBy({ left: 400, behavior: "smooth" }); }}
              className="absolute right-[-18px] bg-[#1F4037]/80 dark:bg-gray-800/80 text-white p-2 rounded-full z-20 hover:bg-secondary transition"
            >
              <ChevronRight size={28} />
            </button>

          </div>
        </div>

        {/* Sidebar */}
        <div className="container mx-auto px-4 md:px-6 mt-16">
          <div className="flex justify-center">
            <TiltCard className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 sticky top-24">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">Project Details</h3>
              <button onClick={handleStartProjectClick} className="w-full mt-8 bg-secondary text-primary py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors shadow-lg">
                Start Similar Project
              </button>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
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

      {/* Fullscreen Modal with Image Nav + Close Button ✔ */}
      {fullScreenMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6">

          {/* Prev */}
          {fullScreenMedia.type === 'image' && galleryImages.length > 1 && (
            <button onClick={prevImage} className="fixed left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-50">
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Next */}
          {fullScreenMedia.type === 'image' && galleryImages.length > 1 && (
            <button onClick={nextImage} className="fixed right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-50">
              <ChevronRight size={48} />
            </button>
          )}

          {/* ❌ Close Button FIXED 🔥 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFullScreenMedia(null);
            }}
            className="fixed top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
          >
            <X size={36} />
          </button>

          {/* Image */}
          {fullScreenMedia.type === 'image' && (
            <img
              src={galleryImages[currentImageIndex]}
              alt="Fullscreen"
              className="w-auto h-[85vh] object-contain rounded-xl shadow-2xl z-40"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Video */}
          {fullScreenMedia.type === 'video' && (
            <iframe
              src={`https://www.youtube.com/embed/${fullScreenMedia.url.split('v=')[1]}?controls=1&autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-[90vw] h-[80vh] rounded-xl shadow-2xl border-0 z-40 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            ></iframe>
          )}

        </div>
      )}

    </>
  );
};
