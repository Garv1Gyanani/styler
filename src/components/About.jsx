import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--ivory)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="eyebrow text-[var(--emerald)]">The Studio</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight text-[var(--emerald-deep)]">
            Every room begins with how you actually <span className="font-display-italic">live in it.</span>
          </h2>
          <div className="hairline w-24 my-8"></div>
          <p className="text-base leading-relaxed text-[var(--charcoal)]">
            Styler Interior Design Studio is a Jaipur-based practice built on one conviction: a home should be
            designed around the people in it, not a catalogue. From Vaishali Nagar, our team works across
            Jaipur &amp; NCR on residential and commercial interiors — from the first measured drawing to the
            final handover — with the same attention whether we're detailing a wardrobe shutter or planning
            an entire floor.
          </p>
          <p className="text-base leading-relaxed mt-5 text-[var(--charcoal)]">
            We don't hand you a moodboard and disappear. Every material, finish and fitting is chosen with
            you, costed transparently, and executed by a team that stays accountable until the last light
            fixture is aligned.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <div className="font-display text-3xl text-[var(--emerald)]">Luxury</div>
              <div className="text-xs tracking-wide mt-1 text-gray-500">Materials &amp; finish</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[var(--emerald)]">Bespoke</div>
              <div className="text-xs tracking-wide mt-1 text-gray-500">Not templated design</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[var(--emerald)]">Precise</div>
              <div className="text-xs tracking-wide mt-1 text-gray-500">Attention to detail</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[var(--emerald)]">Client-first</div>
              <div className="text-xs tracking-wide mt-1 text-gray-500">Design that centres you</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative reveal">
          <div className="grid grid-cols-2 gap-4">
            <div className="blueprint-corner overflow-hidden aspect-[3/4] mt-10">
              <img src="/images/project_living_room.webp" alt="Styler Interior Design Studio — living space detail" className="w-full h-full object-cover" />
            </div>
            <div className="blueprint-corner overflow-hidden aspect-[3/4]">
              <img src="/images/project_kitchen.webp" alt="Styler Interior Design Studio — dining space" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-8 left-8 right-8 glass-light blueprint-corner p-6 flex items-center gap-6">
            <span className="font-display italic text-4xl text-[var(--gold)]">S</span>
            <p className="text-sm text-[var(--emerald-deep)]">"Designing Spaces, Defining Lifestyles" isn't a tagline we picked — it's the brief we give ourselves on every project.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
