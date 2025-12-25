import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const LOGO_SRC = "/images/logo.png";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

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
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setServiceOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services', dropdown: true },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blogs', id: 'blogs' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className="fixed w-full z-50 top-0 py-4 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`
          flex justify-between items-center rounded-full px-4 pl-6 py-2 transition-all duration-300 mx-auto
          bg-[#1F4037] dark:bg-gray-900 shadow-xl border border-[#2D5C4B] dark:border-gray-700
          ${scrolled ? 'w-full md:w-full backdrop-blur-md bg-opacity-75 dark:bg-opacity-95' : 'w-full md:w-full'}
        `}>

          {/* Logo */}
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
              link.dropdown ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setServiceOpen(true)}
                  ref={dropdownRef}
                >
                  <button className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-300 hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 bg-transparent border-none cursor-pointer">
                    {link.name}
                    <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>

                  {serviceOpen && (
                    <div
                      className="absolute top-12 left-1/2 -translate-x-1/2 bg-[#1F4037] dark:bg-gray-900 border border-[#2D5C4B] dark:border-gray-700 rounded-2xl shadow-xl py-3 w-40"
                      ref={dropdownRef}
                      onMouseEnter={() => setServiceOpen(true)}
                    >
                      <button
                        onClick={() => scrollToSection('services')}
                        className="block w-full text-left px-5 py-2 text-gray-300 hover:text-secondary hover:bg-white/5 transition-colors text-sm font-medium"
                      >
                        GKTech
                      </button>
                      <button
                        onClick={(e) => { e.preventDefault(); scrollToSection(''); }}
                        className="block w-full text-left px-5 py-2 text-gray-300 hover:text-secondary hover:bg-white/5 transition-colors text-sm font-medium"
                      >
                        GKInstitute
                      </button>
                    </div>
                  )}
                </div>
              ) : (
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
              )
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-300 hover:text-secondary hover:bg-white/10 transition-colors"
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

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-gray-300 hover:text-secondary">
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
                link.dropdown ? (
                  <div key={idx} className="text-left">
                    <p className="font-medium text-lg text-gray-300 mb-2 flex items-center gap-1">
                      {link.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </p>
                    <button onClick={() => scrollToSection('services')} className="block w-full text-left px-2 py-1 text-gray-300 hover:text-secondary transition-colors text-base">
                      GKTech
                    </button>
                    <button onClick={(e) => { e.preventDefault(); scrollToSection(''); }} className="block w-full text-left px-2 py-1 text-gray-300 hover:text-secondary transition-colors text-base">
                      GKInstitute
                    </button>
                  </div>
                ) : (
                  <button key={idx} onClick={() => scrollToSection(link.id)} className="font-medium text-lg hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4 transition-all text-left text-gray-300">
                    {link.name}
                  </button>
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
