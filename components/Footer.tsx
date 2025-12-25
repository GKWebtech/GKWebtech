import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, FileText } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

// Embedded SVG Data URI for Gajkesri Logo
const LOGO_SRC = "/images/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 pt-20 pb-10 border-t border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 border-b border-gray-100 dark:border-gray-800 pb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-6 md:mb-0 max-w-xl">
             Ready to <span className="text-secondary">Scale</span> your brand with us?
           </h2>
           <Button variant="primary" icon="arrow" href="/services">Start Your Project</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column - Wider */}
          <div className="lg:col-span-5">
             <div className="mb-6">
                <img 
                  src={LOGO_SRC} 
                  alt="Gajkesri Webtech" 
                  className="h-20 w-auto object-contain" 
                />
             </div>
             <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
               A premier digital marketing agency helping businesses grow through data-driven strategies and creative excellence.
             </p>
             <div className="flex gap-4">
               {/* Facebook */}
               <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                 <Facebook size={18} />
               </a>
               {/* YouTube */}
               <a href="https://www.youtube.com/@GajkesriDigitalAgency" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                 <Youtube size={18} />
               </a>
               {/* X (formerly Twitter) */}
               <a href="#" aria-label="X" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                 <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                 </svg>
               </a>
               {/* Instagram */}
               <a href="https://www.instagram.com/gajkesritech/" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                 <Instagram size={18} />
               </a>
               {/* LinkedIn */}
               <a href="https://www.linkedin.com/in/gajkesri-digital-agency-5412643a0/" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                 <Linkedin size={18} />
               </a>
             </div>
          </div>

          {/* Links Column - Centered visually in desktop grid */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-lg font-bold text-primary dark:text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-400">
              <li><Link to="/#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link to="/blogs" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/#faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/#contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column - Right aligned */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold text-primary dark:text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-400">
              <li className="flex items-start gap-3">
                 <span className="font-bold text-secondary">P:</span>
                  <div className="flex flex-col"> 
                    <a href="tel:+919971944676" className="hover:text-secondary transition-colors">+91 9971944676</a>
                    <a href="tel:+31620508410" className="hover:text-secondary transition-colors">+31 620508410</a>
                  </div>
                 </li>
              <li className="flex items-start gap-3">
                 <span className="font-bold text-secondary">E:</span>
                 <a href="mailto:info@ayurvedastro.com" className="hover:text-secondary transition-colors">info@ayurvedastro.com</a>
              </li>
              <li className="flex items-start gap-3">
                 <span className="font-bold text-secondary flex-shrink-0 mt-1">A:</span>
                 <span className="leading-relaxed">Tiwari Clinic, Mahatma Jyotiba Fule Circle, Sch. No. 7, Alwar 301001, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
           <p>Copyright © 2024 <span className="text-primary dark:text-white font-medium">Gajkesri Webtech</span>. All Rights Reserved.</p>
           <div className="flex items-center gap-6">
             <Link to="/" className="flex items-center gap-1 hover:text-secondary transition-colors" title="Download Brochure PDF">
               <FileText size={12} />
               <span>Brochure</span>
             </Link>
             <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
             <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};