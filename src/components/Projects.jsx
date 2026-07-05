import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--emerald-deep)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--ivory)]">
              A portfolio built on <span className="font-display-italic text-[var(--gold)]">restraint.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--beige)]">
            Six recent rooms and spaces — each one designed from scratch around how the client actually lives or works.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="project-card relative group blueprint-corner aspect-[4/5] reveal">
            <img src="/images/project_living_room.png" alt="Modern luxury living room" className="w-full h-full object-cover" />
            <div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">RESIDENTIAL</span>
              <h3 className="font-display text-xl mt-2 text-[var(--ivory)]">Modern Luxury Living Room</h3>
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--beige)]">
                A double-height living space in warm walnut and brushed brass, planned around a family that entertains often.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="project-card relative group blueprint-corner aspect-[4/5] sm:mt-10 reveal">
            <img src="/images/project_kitchen.png" alt="Contemporary modular kitchen" className="w-full h-full object-cover" />
            <div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">MODULAR KITCHEN</span>
              <h3 className="font-display text-xl mt-2 text-[var(--ivory)]">Contemporary Modular Kitchen</h3>
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--beige)]">
                A handleless island kitchen in matte emerald and stone, built for a client who cooks daily, not just for guests.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="project-card relative group blueprint-corner aspect-[4/5] reveal">
            <img src="/images/project_bedroom.png" alt="Elegant master bedroom" className="w-full h-full object-cover" />
            <div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">RESIDENTIAL</span>
              <h3 className="font-display text-xl mt-2 text-[var(--ivory)]">Elegant Master Bedroom</h3>
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--beige)]">
                A quiet, low-lit retreat with a fabric-panelled headboard wall and a custom reading nook by the window.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="project-card relative group blueprint-corner aspect-[4/5] sm:mt-10 reveal">
            <img src="/images/project_office.png" alt="Corporate office space" className="w-full h-full object-cover" />
            <div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">COMMERCIAL</span>
              <h3 className="font-display text-xl mt-2 text-[var(--ivory)]">Corporate Office Space</h3>
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--beige)]">
                A 4,200 sqft workspace balancing private cabins with open collaboration zones, in oak and deep green.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="project-card relative group blueprint-corner aspect-[4/5] reveal">
            <img src="/images/project_wardrobe.png" alt="Luxury wardrobe design" className="w-full h-full object-cover" />
            <div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">WARDROBES</span>
              <h3 className="font-display text-xl mt-2 text-[var(--ivory)]">Luxury Wardrobe Design</h3>
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--beige)]">
                A walk-in dressing room with backlit shelving and mixed-finish shutters, planned around the client's wardrobe inventory.
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="project-card relative group blueprint-corner aspect-[4/5] sm:mt-10 reveal">
            <img src="/images/project_ceiling.png" alt="False ceiling transformation" className="w-full h-full object-cover" />
            <div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-[0.25em] text-[var(--gold)]">FALSE CEILING</span>
              <h3 className="font-display text-xl mt-2 text-[var(--ivory)]">False Ceiling Transformation</h3>
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[var(--beige)]">
                A cove-lit gypsum ceiling that reshaped how light moves through a formerly flat, builder-grade living room.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
