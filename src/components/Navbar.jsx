import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative w-11 h-11 flex items-center justify-center border border-[var(--gold)]">
            <span className="font-display italic text-2xl text-[var(--gold)]">S</span>
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span id="brandTop" className="font-display text-lg tracking-wide text-[var(--ivory)]">STYLER</span>
            <span className="text-[10px] tracking-[0.3em] text-[var(--gold)]">INTERIOR DESIGN STUDIO</span>
          </span>
        </a>

        <div id="navlinks" className="hidden lg:flex items-center gap-10 text-sm tracking-wide text-[var(--ivory)]">
          <a href="#home" className="navlink">Home</a>
          <a href="#projects" className="navlink">Projects</a>
          <a href="#casestudies" className="navlink">Case Studies</a>
          <a href="#services" className="navlink">Services</a>
          <a href="#process" className="navlink">Process</a>
          <a href="#testimonials" className="navlink">Testimonials</a>
          <a href="#contact" className="navlink">Contact</a>
        </div>

        <a href="#lead" className="hidden lg:inline-block px-6 py-2.5 text-sm tracking-wide btn-primary">Book Consultation</a>

        <button 
          id="menuBtn" 
          className="lg:hidden flex flex-col gap-1.5 w-8 z-50" 
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="h-px w-full bg-[var(--ivory)]"></span>
          <span className="h-px w-full bg-[var(--ivory)]"></span>
          <span className="h-px w-full bg-[var(--ivory)]"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobileMenu" className="lg:hidden fixed inset-0 z-40 bg-[var(--emerald-deep)]">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-lg text-[var(--ivory)]">
            <a href="#home" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#projects" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#casestudies" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
            <a href="#services" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#testimonials" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#lead" className="mobile-link px-8 py-3 border border-[var(--gold)] text-[var(--gold)]" onClick={() => setIsMobileMenuOpen(false)}>Book Consultation</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
