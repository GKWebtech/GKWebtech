import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { ServicesPage } from './components/ServicesPage';
import { BlogsPage } from './components/BlogsPage';
import { BlogDetail } from './components/BlogDetail';
import { ScrollToTop } from './components/ScrollToTop';
import { BrochureTemplate } from './components/BrochureTemplate';
import { PortfolioPage } from './components/PortfolioPage';
import { ProjectDetail } from './components/ProjectDetail';
import { Tools } from './components/Tools';
import { ArrowUp } from 'lucide-react';
import CourseDetail from './components/CourseDetail';
import { CoursesPage } from './components/CoursesPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-bg-light dark:bg-gray-950 font-sans text-text-dark dark:text-gray-100 selection:bg-secondary selection:text-primary transition-colors duration-300 xl:px-8 2xl:px-16">
        <ScrollToTop />
        <Routes>
          {/* Brochure Route - No Navbar/Footer */}
          <Route path="/brochure-preview" element={<BrochureTemplate />} />
          
          {/* Main App Routes */}
          <Route path="*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/service/:id" element={<ServiceDetail />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/course/:id" element={<CourseDetail />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/portfolio/:id" element={<ProjectDetail />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                </Routes>
              </main>

              {/* Floating WhatsApp CTA goes here, OUTSIDE of Routes */}
              <a
                href="https://wa.me/9971944676?text=Hi,%20I%20want%20to%20discuss%20digital%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 fixed bottom-5 right-4 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-12 h-12"
                />
              </a>

              {showScrollTop && (
                <button
                  aria-label="Scroll to top"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="z-50 fixed bottom-20 right-5 bg-black text-white rounded-full shadow-lg hover:scale-105 transition p-3"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              )}

              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
