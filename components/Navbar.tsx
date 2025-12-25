import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

// Embedded SVG Data URI for Gajkesri Logo
const LOGO_SRC = "/images/logo.png";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
        // If not on home, navigation is handled by Link to="/" with hash
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsOpen(false);
  };

  const navLinks = [
      { name: 'About', id: 'about' },
      { name: 'Services', id: 'services' },
      { name: 'Portfolio', id: 'portfolio' },
      { name: 'Blogs', id: 'blogs' },
      { name: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className="fixed w-full z-50 top-0 py-4 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-">
        <div className={`
          flex justify-between items-center rounded-full px-4 pl-6 py-2 transition-all duration-300 mx-auto
          bg-[#1F4037] dark:bg-gray-900 shadow-xl border border-[#2D5C4B] dark:border-gray-700
          ${scrolled ? 'w-full md:w-full backdrop-blur-md bg-opacity-75 dark:bg-opacity-95' : 'w-full md:w-full'}
        `}>
          {/* Logo - Acts as Home Button */}
          <Link to="/" className="flex w-1/6 items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={LOGO_SRC} 
              alt="Gajkesri Webtech" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              location.pathname === '/' ? (
                <button 
                    key={idx}
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm font-medium transition-colors text-gray-300 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 bg-transparent border-none cursor-pointer"
                >
                    {link.name}
                </button>
              ) : (
                <Link 
                    key={idx}
                    to="/" 
                    className="text-sm font-medium transition-colors text-gray-300 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4"
                >
                    {link.name}
                </Link>
              )
            ))}
            
            {/* Theme Toggle Desktop */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-300 hover:text-secondary hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection('contact')} className="bg-secondary text-primary px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-md transform hover:scale-105 inline-block">
              Get Proposal
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-gray-300 hover:text-secondary"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-secondary" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-[#1F4037] dark:bg-gray-900 text-white p-6 rounded-3xl shadow-xl border border-[#2D5C4B] dark:border-gray-700 z-40 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                location.pathname === '/' ? (
                    <button 
                        key={idx} 
                        onClick={() => scrollToSection(link.id)}
                        className="font-medium text-lg hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-all text-left"
                    >
                        {link.name}
                    </button>
                ) : (
                    <Link 
                        key={idx} 
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-lg hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-all text-left"
                    >
                        {link.name}
                    </Link>
                )
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <button onClick={() => scrollToSection('contact')} className="bg-secondary text-primary w-full py-3 rounded-xl font-bold hover:bg-white transition-colors block text-center">
                Get Proposal
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};