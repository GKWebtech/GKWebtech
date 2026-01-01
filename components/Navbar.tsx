"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flower, ChevronDown, Sun, Moon, Menu } from "lucide-react";

const LOGO_SRC = "/images/logo.png";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setServiceOpen(false);
  };

  const handleTabRedirect = (tab: "tech" | "institute") => {
    window.history.replaceState(null, "", `/?tab=${tab}`);
    scrollToSection("services");
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services", dropdown: true },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blogs", path: "/blogs" },
    { name: "FAQ", id: "faq" },
    { name: "Tools", path: "/tools" }
  ];

  return (
    <nav className="fixed w-full z-50 top-0 py-4 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex justify-between items-center rounded-full px-3 pl-4 py-1.5 bg-[#1F4037] dark:bg-gray-900 shadow-xl border border-[#2D5C4B] dark:border-gray-700 w-full`}>
          
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex w-1/6 items-center gap-3 group cursor-pointer">
            <img src={LOGO_SRC} alt="GK Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div key={idx} ref={dropdownRef} className="relative" onMouseEnter={() => setServiceOpen(true)}>
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-[#FDB827] hover:underline bg-transparent border-none cursor-pointer">
                    {link.name} <ChevronDown className="w-4 h-4 mt-[2px]" />
                  </button>

                  {serviceOpen && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[#1F4037] dark:bg-gray-900 border border-[#2D5C4B] dark:border-gray-700 rounded-2xl shadow-xl py-3 w-40">
                      <button onClick={() => handleTabRedirect("tech")} className="block w-full text-left px-5 py-2 text-gray-300 hover:text-[#FDB827] hover:bg-white/5 transition text-sm font-medium">
                        GKTech
                      </button>
                      <button onClick={() => handleTabRedirect("institute")} className="block w-full text-left px-5 py-2 text-gray-300 hover:text-[#FDB827] hover:bg-white/5 transition text-sm font-medium">
                        GKInstitute
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={idx} to={link.path || "/"} onClick={() => link.id && scrollToSection(link.id)} className="text-sm font-medium text-gray-300 hover:text-[#FDB827] hover:underline transition bg-transparent border-none cursor-pointer">
                  {link.name}
                </Link>
              )
            )}

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-300 hover:text-[#FDB827] hover:bg-white/10 transition">
              {isDark ? <Sun size={20}/> : <Moon size={20}/>}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection("contact")} className="bg-[#FDB827] text-[#1F4037] px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-[#1F4037] transition-all duration-300 shadow-md transform hover:scale-105">
              Get Proposal
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-gray-300 hover:text-[#FDB827]">
              {isDark ? <Sun size={20}/> : <Moon size={20}/>}
            </button>
            <button className="text-[#FDB827]" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-8 h-8"/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-[#1F4037] dark:bg-gray-900 text-white p-6 rounded-3xl shadow-xl border border-[#2D5C4B] dark:border-gray-700 z-40 fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                link.dropdown ? (
                  <div key={idx} className="text-left">
                    <p className="font-bold text-xl text-gray-300 mb-2">Services</p>
                    <button onClick={() => handleTabRedirect("tech")} className="block w-full text-left px-2 py-1 text-gray-300 hover:text-[#FDB827]">GKTech</button>
                    <button onClick={() => handleTabRedirect("institute")} className="block w-full text-left px-2 py-1 text-gray-300 hover:text-[#FDB827]">GKInstitute</button>
                  </div>
                ) : (
                  <Link key={idx} to={link.path || "/"} onClick={() => setIsOpen(false)} className="font-medium text-lg text-gray-300 hover:text-[#FDB827] hover:underline transition-all text-left">
                    {link.name}
                  </Link>
                )
              ))}

              <div className="h-px bg-white/10 my-2"></div>

              <button onClick={() => scrollToSection("contact")} className="bg-[#FDB827] text-[#1F4037] w-full py-3 rounded-xl font-bold hover:bg-white transition block text-center">
                Get Proposal
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
