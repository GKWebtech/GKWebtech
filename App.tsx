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
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/portfolio/:id" element={<ProjectDetail />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;