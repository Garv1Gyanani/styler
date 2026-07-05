import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Process from './components/Process';
import CostEstimator from './components/CostEstimator';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  // Intersection Observer for the reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Navbar background transition on scroll
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.style.background = 'var(--emerald-deep)';
      } else {
        navbar.style.background = 'transparent';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BeforeAfter />
      <Services />
      <Process />
      <CostEstimator />
      <CaseStudies />
      <Testimonials />
      <Contact />

      {/* FOOTER */}
      <footer className="py-10 px-6 lg:px-10 bg-[var(--emerald)] border-t border-[rgba(212,175,55,0.2)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display text-lg tracking-wide text-[var(--ivory)]">STYLER</span>
            <span className="text-[10px] tracking-[0.3em] text-[var(--gold)]">INTERIOR DESIGN STUDIO</span>
          </div>
          <p className="text-xs text-[var(--beige)]">&copy; {new Date().getFullYear()} Styler Interior Design Studio. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Instagram placeholder link */}
            <a href="#" className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--emerald)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
