import React, { useState } from 'react';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {/* WHY A WEBSITE MATTERS SECTION */}
      <section className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center reveal">
            <p className="eyebrow text-[var(--emerald)]">Beyond Instagram</p>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--emerald-deep)]">
              Why a website matters for Styler.
            </h2>
            <p className="text-sm mt-4 max-w-lg mx-auto text-gray-600">
              Instagram builds awareness. A website converts that awareness into booked consultations.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[rgba(15,61,46,0.15)]">
            <div className="bg-[var(--ivory)] p-7 reveal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.4"><rect x="3" y="4" width="18" height="14" rx="1"/><path d="M8 21h8M12 18v3"/></svg>
              <h3 className="font-display text-base mt-4 text-[var(--emerald-deep)]">Showcase Projects Professionally</h3>
              <p className="text-xs mt-2 text-gray-600 leading-relaxed">A permanent, organised portfolio — not a feed that scrolls away.</p>
            </div>
            <div className="bg-[var(--ivory)] p-7 reveal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.4"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>
              <h3 className="font-display text-base mt-4 text-[var(--emerald-deep)]">Generate Consultation Requests</h3>
              <p className="text-xs mt-2 text-gray-600 leading-relaxed">A form and cost estimator that turn visitors into booked calls.</p>
            </div>
            <div className="bg-[var(--ivory)] p-7 reveal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.4"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <h3 className="font-display text-base mt-4 text-[var(--emerald-deep)]">Appear on Google Searches</h3>
              <p className="text-xs mt-2 text-gray-600 leading-relaxed">Show up when someone searches "interior designer near me" in Jaipur.</p>
            </div>
            <div className="bg-[var(--ivory)] p-7 reveal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.4"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <h3 className="font-display text-base mt-4 text-[var(--emerald-deep)]">Build Trust Beyond Instagram</h3>
              <p className="text-xs mt-2 text-gray-600 leading-relaxed">A branded site signals an established studio, not just a page.</p>
            </div>
            <div className="bg-[var(--ivory)] p-7 reveal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.4"><path d="M3 5h18M3 12h18M3 19h18"/></svg>
              <h3 className="font-display text-base mt-4 text-[var(--emerald-deep)]">Collect Qualified Leads</h3>
              <p className="text-xs mt-2 text-gray-600 leading-relaxed">Capture project type, budget and area upfront — before the first call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-28 lg:py-36 px-6 lg:px-10 overflow-hidden bg-[var(--ivory)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center reveal">
            <p className="eyebrow text-[var(--emerald)]">Client Voices</p>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--emerald-deep)]">
              Homes and offices, in their words.
            </h2>
          </div>
        </div>

        <div className="mt-16 relative">
          <div 
            id="testiTrack" 
            className="flex gap-6 marquee-track" 
            style={{ width: 'max-content', animationPlayState: isPaused ? 'paused' : 'running' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* set 1 */}
            <div className="testi-card w-[320px] sm:w-[380px] shrink-0 bg-[var(--beige)] blueprint-corner p-8">
              <div className="flex gap-1 mb-4 text-[var(--gold)]">★★★★★</div>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]">
                Styler turned our builder-flat into something we're proud to invite people into. The 3D renders matched the final result almost exactly.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display bg-[var(--emerald)] text-[var(--ivory)]">A</div>
                <div><p className="text-sm font-semibold">Ananya Sharma</p><p className="text-xs text-gray-500">3BHK Apartment, Vaishali Nagar</p></div>
              </div>
            </div>
            <div className="testi-card w-[320px] sm:w-[380px] shrink-0 bg-[var(--beige)] blueprint-corner p-8">
              <div className="flex gap-1 mb-4 text-[var(--gold)]">★★★★★</div>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]">
                Our office fit-out was done on schedule with zero surprise costs. The team managed vendors so we didn't have to.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display bg-[var(--emerald)] text-[var(--ivory)]">R</div>
                <div><p className="text-sm font-semibold">Rohit Agarwal</p><p className="text-xs text-gray-500">Corporate Office, C-Scheme</p></div>
              </div>
            </div>
            
            {/* Duplicated for marquee effect */}
            <div className="testi-card w-[320px] sm:w-[380px] shrink-0 bg-[var(--beige)] blueprint-corner p-8">
              <div className="flex gap-1 mb-4 text-[var(--gold)]">★★★★★</div>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]">
                Styler turned our builder-flat into something we're proud to invite people into. The 3D renders matched the final result almost exactly.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display bg-[var(--emerald)] text-[var(--ivory)]">A</div>
                <div><p className="text-sm font-semibold">Ananya Sharma</p><p className="text-xs text-gray-500">3BHK Apartment, Vaishali Nagar</p></div>
              </div>
            </div>
            <div className="testi-card w-[320px] sm:w-[380px] shrink-0 bg-[var(--beige)] blueprint-corner p-8">
              <div className="flex gap-1 mb-4 text-[var(--gold)]">★★★★★</div>
              <p className="text-sm leading-relaxed text-[var(--charcoal)]">
                Our office fit-out was done on schedule with zero surprise costs. The team managed vendors so we didn't have to.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display bg-[var(--emerald)] text-[var(--ivory)]">R</div>
                <div><p className="text-sm font-semibold">Rohit Agarwal</p><p className="text-xs text-gray-500">Corporate Office, C-Scheme</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
