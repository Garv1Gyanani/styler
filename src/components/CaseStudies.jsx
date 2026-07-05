import React from 'react';

const CaseStudies = () => {
  return (
    <section id="casestudies" className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--emerald-deep)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <p className="eyebrow">In Detail</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--ivory)]">
            Case studies, not just <span className="font-display-italic text-[var(--gold)]">photos.</span>
          </h2>
          <p className="text-sm mt-4 max-w-lg mx-auto text-[var(--beige)]">
            The area, timeline and scope behind four recent projects — replace with your own project data and photography.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Case 1 */}
          <div className="reveal blueprint-corner overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/project_living_room.webp" alt="Living room case study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 bg-[rgba(248,245,240,0.06)]">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">LIVING ROOM</span>
              <h3 className="font-display text-2xl mt-2 text-[var(--ivory)]">Warm Walnut Family Living Room</h3>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[rgba(212,175,55,0.2)]">
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Area</p><p className="text-sm mt-1 text-[var(--beige)]">420 sqft</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Timeline</p><p className="text-sm mt-1 text-[var(--beige)]">6 weeks</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Scope</p><p className="text-sm mt-1 text-[var(--beige)]">Design + Execution</p></div>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="reveal blueprint-corner overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/project_kitchen.webp" alt="Modular kitchen case study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 bg-[rgba(248,245,240,0.06)]">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">MODULAR KITCHEN</span>
              <h3 className="font-display text-2xl mt-2 text-[var(--ivory)]">Handle-less Island Kitchen</h3>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[rgba(212,175,55,0.2)]">
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Area</p><p className="text-sm mt-1 text-[var(--beige)]">180 sqft</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Timeline</p><p className="text-sm mt-1 text-[var(--beige)]">5 weeks</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Scope</p><p className="text-sm mt-1 text-[var(--beige)]">Design + Execution</p></div>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="reveal blueprint-corner overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/project_wardrobe.webp" alt="Walk-in wardrobe case study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 bg-[rgba(248,245,240,0.06)]">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">WARDROBE</span>
              <h3 className="font-display text-2xl mt-2 text-[var(--ivory)]">Backlit Walk-in Dressing Room</h3>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[rgba(212,175,55,0.2)]">
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Area</p><p className="text-sm mt-1 text-[var(--beige)]">95 sqft</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Timeline</p><p className="text-sm mt-1 text-[var(--beige)]">3 weeks</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Scope</p><p className="text-sm mt-1 text-[var(--beige)]">Design + Execution</p></div>
              </div>
            </div>
          </div>

          {/* Case 4 */}
          <div className="reveal blueprint-corner overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/images/project_ceiling.webp" alt="False ceiling case study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 bg-[rgba(248,245,240,0.06)]">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">FALSE CEILING</span>
              <h3 className="font-display text-2xl mt-2 text-[var(--ivory)]">Cove-Lit Gypsum Ceiling</h3>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[rgba(212,175,55,0.2)]">
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Area</p><p className="text-sm mt-1 text-[var(--beige)]">320 sqft</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Timeline</p><p className="text-sm mt-1 text-[var(--beige)]">2 weeks</p></div>
                <div><p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">Scope</p><p className="text-sm mt-1 text-[var(--beige)]">Design + Execution</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center reveal">
          <a href="https://wa.me/919168047444?text=Hi%20Styler%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wide bg-[#25D366] text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.9 0-8.9 4-8.9 8.9 0 1.57.4 3.1 1.18 4.45L3 21l3.77-1.28a8.9 8.9 0 0 0 5.28 1.71h.01c4.9 0 8.9-4 8.9-8.9 0-2.38-.94-4.62-2.36-6.21ZM12.06 19.9h-.01a7.3 7.3 0 0 1-4.7-1.71l-.34-.2-2.79.95.93-2.72-.22-.35a7.36 7.36 0 0 1-1.13-3.98c0-4.06 3.3-7.36 7.37-7.36a7.3 7.3 0 0 1 5.2 2.16 7.28 7.28 0 0 1 2.15 5.19c0 4.06-3.3 7.36-7.36 7.36Z"/></svg>
            Discuss a Project on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
