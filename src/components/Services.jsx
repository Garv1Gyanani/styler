import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <p className="eyebrow text-[var(--emerald)]">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl text-[var(--emerald-deep)]">
            Six services, one team, zero handoffs.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(15,61,46,0.15)]">
          {/* service 1 */}
          <div className="bg-[var(--ivory)] p-8 reveal">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.3">
              <path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>
            </svg>
            <h3 className="font-display text-xl mt-5 text-[var(--emerald-deep)]">Residential Interiors</h3>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Full-home or single-room design, planned around your routine — not a showroom layout.
            </p>
            <p className="text-xs mt-4 text-[var(--emerald)]">Apartments · Villas · Duplexes</p>
          </div>
          {/* service 2 */}
          <div className="bg-[var(--ivory)] p-8 reveal">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.3">
              <rect x="3" y="6" width="18" height="14" rx="1"/><path d="M3 11h18M9 6v-2h6v2"/>
            </svg>
            <h3 className="font-display text-xl mt-5 text-[var(--emerald-deep)]">Commercial Interiors</h3>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Offices, clinics and retail spaces designed for how your team and clients actually move through them.
            </p>
            <p className="text-xs mt-4 text-[var(--emerald)]">Offices · Retail · Clinics</p>
          </div>
          {/* service 3 */}
          <div className="bg-[var(--ivory)] p-8 reveal">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.3">
              <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 15h18M9 15V3"/>
            </svg>
            <h3 className="font-display text-xl mt-5 text-[var(--emerald-deep)]">Modular Kitchens</h3>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Handle-less, island and L-shaped layouts in finishes chosen to survive daily cooking, not just photograph well.
            </p>
            <p className="text-xs mt-4 text-[var(--emerald)]">German Hardware · Custom Layouts</p>
          </div>
          {/* service 4 */}
          <div className="bg-[var(--ivory)] p-8 reveal">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.3">
              <rect x="4" y="2" width="16" height="20" rx="1"/><path d="M12 2v20"/>
            </svg>
            <h3 className="font-display text-xl mt-5 text-[var(--emerald-deep)]">Wardrobes</h3>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Sliding, hinged or walk-in wardrobes designed around what you actually own, down to the last shelf.
            </p>
            <p className="text-xs mt-4 text-[var(--emerald)]">Walk-in · Sliding · Loft Storage</p>
          </div>
          {/* service 5 */}
          <div className="bg-[var(--ivory)] p-8 reveal">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.3">
              <path d="M3 8h18l-2 4H5L3 8Z"/><circle cx="12" cy="16" r="1"/>
            </svg>
            <h3 className="font-display text-xl mt-5 text-[var(--emerald-deep)]">False Ceilings</h3>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Cove lighting, gypsum detailing and POP work that reshapes how light and height feel in a room.
            </p>
            <p className="text-xs mt-4 text-[var(--emerald)]">Cove Lighting · POP · Gypsum</p>
          </div>
          {/* service 6 */}
          <div className="bg-[var(--ivory)] p-8 reveal">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.3">
              <path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/>
            </svg>
            <h3 className="font-display text-xl mt-5 text-[var(--emerald-deep)]">Turnkey Solutions</h3>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Design, materials, civil work and execution under one contract — one team accountable end to end.
            </p>
            <p className="text-xs mt-4 text-[var(--emerald)]">Design to Handover</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600 reveal">
          <span>+ Space Planning</span>
          <span className="hidden sm:inline">·</span>
          <span>+ 2D &amp; 3D Design</span>
        </div>

      </div>
    </section>
  );
};

export default Services;
