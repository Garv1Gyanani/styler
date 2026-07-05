import React from 'react';

const Process = () => {
  return (
    <section id="process" className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--ivory)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center reveal">
          <p className="eyebrow text-[var(--emerald)]">How We Work</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--emerald-deep)]">
            Six stages. <span className="font-display-italic">One accountable team.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="timeline-line hidden sm:block absolute left-6 top-2 bottom-2 w-px"></div>

          <div className="space-y-14 sm:space-y-16">
            <div className="relative sm:pl-20 reveal">
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center border border-[var(--gold)] font-display text-[var(--gold)] bg-[var(--ivory)]">1</div>
              <h3 className="font-display text-xl text-[var(--emerald-deep)]">Consultation</h3>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                We visit the site, understand your budget, lifestyle and must-haves, and map the scope of work.
              </p>
            </div>
            <div className="relative sm:pl-20 reveal">
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center border border-[var(--gold)] font-display text-[var(--gold)] bg-[var(--ivory)]">2</div>
              <h3 className="font-display text-xl text-[var(--emerald-deep)]">Concept Design</h3>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                Layouts, mood boards and material direction are presented for your sign-off before anything is finalised.
              </p>
            </div>
            <div className="relative sm:pl-20 reveal">
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center border border-[var(--gold)] font-display text-[var(--gold)] bg-[var(--ivory)]">3</div>
              <h3 className="font-display text-xl text-[var(--emerald-deep)]">3D Visualization</h3>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                Photorealistic renders of every room, so you see the space before a single wall is touched.
              </p>
            </div>
            <div className="relative sm:pl-20 reveal">
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center border border-[var(--gold)] font-display text-[var(--gold)] bg-[var(--ivory)]">4</div>
              <h3 className="font-display text-xl text-[var(--emerald-deep)]">Material Selection</h3>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                Hands-on selection of finishes, hardware and fabric at our studio — with clear cost implications for each.
              </p>
            </div>
            <div className="relative sm:pl-20 reveal">
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center border border-[var(--gold)] font-display text-[var(--gold)] bg-[var(--ivory)]">5</div>
              <h3 className="font-display text-xl text-[var(--emerald-deep)]">Execution</h3>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                Site work, carpentry and civil execution run on a fixed schedule, tracked and shared with you weekly.
              </p>
            </div>
            <div className="relative sm:pl-20 reveal">
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center border border-[var(--gold)] font-display text-[var(--gold)] bg-[var(--ivory)]">6</div>
              <h3 className="font-display text-xl text-[var(--emerald-deep)]">Handover</h3>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                A final walkthrough, snag-list resolution, and keys handed over to a space that's genuinely finished.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
