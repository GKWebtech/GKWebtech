import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { Ticker } from './Ticker';
import { Services } from './Services';
import { About } from './About';
import { WhyChooseUs } from './WhyChooseUs';
import { Team } from './Team';
import { Tools } from './Tools';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { Testimonials } from './Testimonials';
import { Blog } from './Blog';
import { FAQ } from './FAQ';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a specific section based on state or hash
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state to prevent scrolling on subsequent renders if needed
      // window.history.replaceState({}, document.title);
    } else if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <WhyChooseUs />
        <Team />
        <Tools />
        <Portfolio />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
    </>
  );
};