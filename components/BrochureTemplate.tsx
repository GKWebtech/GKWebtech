import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

// Embedded SVG Data URI for Gajkeri Logo
const LOGO_SRC = "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22350%22%20height%3D%22100%22%20viewBox%3D%220%200%20350%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M60%2020C45%2020%2040%2055%2060%2080C80%2055%2075%2020%2060%2020Z%22%20stroke%3D%22url(%23paint0_linear)%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M48%2065C30%2055%2025%2030%2040%2025%22%20stroke%3D%22%234CAF50%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M72%2065C90%2055%2095%2030%2080%2025%22%20stroke%3D%22%23FDB827%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M60%2080C40%2090%2025%2075%2035%2060%22%20stroke%3D%22%234CAF50%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M60%2080C80%2090%2095%2075%2085%2060%22%20stroke%3D%22%23FDB827%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22110%22%20y%3D%2268%22%20fill%3D%22%231F4037%22%20font-family%3D%22Poppins%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2248%22%3EGaj%3Ctspan%20fill%3D%22%23FDB827%22%3Ekesari%3C%2Ftspan%3E%3C%2Ftext%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2240%22%20y1%3D%2250%22%20x2%3D%2280%22%20y2%3D%2250%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%234CAF50%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FDB827%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

export const BrochureTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white text-text-dark font-sans">
      {/* Print Controls - Hidden when printing */}
      <div className="fixed top-4 right-4 z-50 flex gap-4 print:hidden">
        <div className="bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm">
          Press <strong>Ctrl + P</strong> (or Cmd + P) and select "Save as PDF"
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
        >
          Download PDF
        </button>
      </div>

      {/* ------------------- PAGE 1: COVER ------------------- */}
      <div className="mx-auto bg-white w-[210mm] h-[297mm] shadow-2xl print:shadow-none mb-8 print:mb-0 relative overflow-hidden flex flex-col print:break-after-page">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-16">
          {/* Top Logo */}
          <div className="mb-6">
             <img 
               src={LOGO_SRC} 
               alt="Gajkesri Webtech" 
               className="h-24 w-auto object-contain"
             />
          </div>

          {/* Center Title */}
          <div>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <h2 className="text-7xl font-bold text-white leading-tight mb-6">
              Digital <br/>
              <span className="text-secondary">Excellence.</span>
            </h2>
            <p className="text-2xl text-gray-200 font-light max-w-md">
              Bridging the gap between creative storytelling and data-driven performance.
            </p>
          </div>

          {/* Bottom Footer */}
          <div className="flex justify-between items-end border-t border-white/20 pt-8">
            <div className="text-white/80 text-sm">
              <p>Agency Portfolio</p>
              <p>2024 - 2025 Edition</p>
            </div>
            <div className="text-white font-bold text-xl">
              www.ayurvedastro.com
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- PAGE 2: ABOUT & SERVICES ------------------- */}
      <div className="mx-auto bg-white w-[210mm] h-[297mm] shadow-2xl print:shadow-none mb-8 print:mb-0 relative overflow-hidden flex flex-col p-16 print:break-after-page">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-3xl font-bold text-primary">About Us</h3>
          <span className="text-gray-400 text-sm">02</span>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-4xl font-bold mb-6 text-text-dark">We build brands that <span className="text-secondary underline decoration-4 underline-offset-4">matter.</span></h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gajkeri Webtech is a premier digital marketing agency tailored for luxury, heritage, and high-growth businesses. We don't just chase metrics; we chase impact.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <span className="block text-3xl font-bold text-primary">600+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">18+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Years Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">300%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Avg ROI</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-64 object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all"
              alt="Team"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-lg shadow-lg max-w-[200px]">
              <p className="font-bold text-primary text-sm">"We turn traffic into revenue through strategic design."</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-auto">
          <h3 className="text-3xl font-bold text-primary mb-10 border-b border-gray-100 pb-4">Our Expertise</h3>
          
          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            {[
              { title: "SEO Optimization", desc: "Ranking #1 on Google with technical audits & content." },
              { title: "Social Media", desc: "Community management & viral reels production." },
              { title: "PPC Advertising", desc: "High-ROI Google & Meta ad campaigns." },
              { title: "Web Development", desc: "Fast, secure, and beautiful WordPress sites." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-full bg-secondary rounded-full"></div>
                <div>
                  <h5 className="font-bold text-lg text-text-dark">{s.title}</h5>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------- PAGE 3: PORTFOLIO & CONTACT ------------------- */}
      <div className="mx-auto bg-primary w-[210mm] h-[297mm] shadow-2xl print:shadow-none relative overflow-hidden flex flex-col p-16 text-white">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-3xl font-bold text-secondary">Featured Work</h3>
          <span className="text-white/50 text-sm">03</span>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-8 mb-16">
          {[
            { 
              name: "The Royal Heritage Fort", 
              cat: "Hospitality", 
              res: "300% Booking Increase",
              img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200" 
            },
            { 
              name: "Umaid Bhawan Grandeur", 
              cat: "Luxury Branding", 
              res: "50% Traffic Growth",
              img: "https://images.unsplash.com/photo-1585544314038-a0d07e6980e6?q=80&w=1200" 
            }
          ].map((p, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6 items-center">
                <img src={p.img} alt={p.name} className="w-32 h-24 object-cover rounded-lg" />
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{p.cat}</span>
                  <h4 className="text-xl font-bold mb-2">{p.name}</h4>
                  <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                    {p.res}
                  </div>
                </div>
             </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-auto bg-white text-text-dark p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-[60px] opacity-50"></div>
          
          <h3 className="text-3xl font-bold mb-8">Let's work together.</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                 <Phone size={18} />
               </div>
               <span className="font-bold">+91 99719 44676</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                 <Mail size={18} />
               </div>
               <span className="font-bold">info@ayurvedastro.com</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                 <MapPin size={18} />
               </div>
               <span className="font-bold text-sm">Tiwari Clinic, Mahatma Jyotiba Fule Circle, Alwar</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                 <Globe size={18} />
               </div>
               <span className="font-bold">www.ayurvedastro.com</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};