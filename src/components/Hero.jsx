import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end bg-[var(--emerald-deep)]">
      <div className="absolute inset-0">
        <img src="/banner.png" alt="Luxury living room designed by Styler Interior Design Studio" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,43,32,.55) 0%, rgba(10,43,32,.35) 40%, rgba(10,43,32,.95) 100%)' }}></div>
      </div>

      {/* blueprint coordinate marks */}
      <div className="absolute top-28 left-6 lg:left-10 hidden md:block hero-anim-1">
        <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] opacity-70">26.9124° N, 75.7873° E</div>
      </div>
      <div className="absolute top-28 right-6 lg:right-10 hidden md:block hero-anim-1 text-right">
        <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] opacity-70">VAISHALI NAGAR — JAIPUR</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-40 w-full">
        <p className="eyebrow hero-anim-1 mb-6">Luxury Interior Design Studio — Jaipur &amp; NCR</p>
        <h1 className="hero-anim-2 font-display text-[13vw] leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.5rem] max-w-4xl text-[var(--ivory)]">
          Luxury interiors designed around your <span className="font-display-italic text-[var(--gold)]">lifestyle.</span>
        </h1>
        <p className="hero-anim-3 mt-8 max-w-xl text-base sm:text-lg text-[var(--beige)]">
          Residential &nbsp;•&nbsp; Commercial &nbsp;•&nbsp; Modular Kitchens &nbsp;•&nbsp; Turnkey Projects
        </p>

        <div className="hero-anim-4 mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 text-sm tracking-wide btn-primary">View Portfolio</a>
          <a href="#lead" className="px-8 py-4 text-sm tracking-wide btn-outline">Book Consultation</a>
        </div>

        {/* floating stats */}
        <div className="hero-anim-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          <div className="glass blueprint-corner px-5 py-5 float-anim" style={{ animationDelay: '0s' }}>
            <div className="font-display text-2xl text-[var(--gold)]">Residential</div>
            <div className="text-xs mt-1 tracking-wide text-[var(--beige)]">&amp; Commercial</div>
          </div>
          <div className="glass blueprint-corner px-5 py-5 float-anim" style={{ animationDelay: '.4s' }}>
            <div className="font-display text-2xl text-[var(--gold)]">Jaipur</div>
            <div className="text-xs mt-1 tracking-wide text-[var(--beige)]">&amp; NCR Service Area</div>
          </div>
          <div className="glass blueprint-corner px-5 py-5 float-anim" style={{ animationDelay: '.8s' }}>
            <div className="font-display text-2xl text-[var(--gold)]">Custom</div>
            <div className="text-xs mt-1 tracking-wide text-[var(--beige)]">Designs, Every Time</div>
          </div>
          <div className="glass blueprint-corner px-5 py-5 float-anim" style={{ animationDelay: '1.2s' }}>
            <div className="font-display text-2xl text-[var(--gold)]">Turnkey</div>
            <div className="text-xs mt-1 tracking-wide text-[var(--beige)]">Execution</div>
          </div>
        </div>

      </div>

      <a href="#about" className="absolute bottom-8 right-6 lg:right-10 hidden sm:flex items-center gap-3 text-xs tracking-[0.25em] text-[var(--beige)]">
        <span className="rotate-90 origin-left">SCROLL</span>
        <span className="w-px h-10 bg-[var(--gold)]"></span>
      </a>
    </section>
  );
};

export default Hero;
