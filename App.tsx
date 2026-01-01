import React from 'react';
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
import { AyuuChatbot } from './components/AyuuChatbot';
import CourseDetail from './components/CourseDetail';
import { CoursesPage } from './components/CoursesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-light dark:bg-gray-950 font-sans text-text-dark dark:text-gray-100 selection:bg-secondary selection:text-primary transition-colors duration-300">
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
                </Routes>
              </main>

              {/* Floating WhatsApp CTA goes here, OUTSIDE of Routes */}
              <a
                href="https://wa.me/9971944676?text=Hi,%20I%20want%20to%20discuss%20digital%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 flex items-center p-1 justify-center bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-12 h-12"
                />
              </a>

              <AyuuChatbot />

              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;