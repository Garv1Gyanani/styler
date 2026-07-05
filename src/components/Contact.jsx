import React, { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--emerald-deep)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <p className="eyebrow">Start a Project</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--ivory)]">
            Ready to redesign <span className="font-display-italic text-[var(--gold)]">your space?</span>
          </h2>
          <p className="text-base leading-relaxed mt-6 text-[var(--beige)]">
            Drop your details below and our team will get back to you within 24 hours to schedule an initial site visit or studio consultation.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">Call Us</p>
                <p className="text-lg mt-1 text-[var(--ivory)]">+91 91680 47444</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">Email</p>
                <p className="text-lg mt-1 text-[var(--ivory)]">hello@stylerinteriors.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">Studio</p>
                <p className="text-base mt-1 text-[var(--ivory)]">Vaishali Nagar, Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        <div id="lead" className="bg-[var(--ivory)] p-8 sm:p-12 blueprint-corner reveal">
          <h3 className="font-display text-2xl text-[var(--emerald-deep)]">Book a Consultation</h3>
          <p className="text-sm mt-2 text-gray-600">Fill in your details to schedule a call.</p>
          
          <form id="leadForm" onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-2">Name</label>
              <input type="text" required className="w-full bg-transparent border-b border-[var(--emerald)] py-3 outline-none text-[var(--charcoal)]" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-2">Phone</label>
              <input type="tel" required className="w-full bg-transparent border-b border-[var(--emerald)] py-3 outline-none text-[var(--charcoal)]" placeholder="10-digit mobile number" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-2">Project Type</label>
              <select required className="w-full bg-transparent border-b border-[var(--emerald)] py-3 outline-none text-[var(--charcoal)]">
                <option value="">Select project type</option>
                <option value="residential">Residential (Full Home)</option>
                <option value="commercial">Commercial / Office</option>
                <option value="kitchen">Modular Kitchen Only</option>
                <option value="wardrobe">Wardrobes Only</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="w-full py-4 text-sm tracking-wide btn-primary mt-4">Submit Request</button>
          </form>

          {formSubmitted && (
            <div id="leadSuccess" className="mt-6 p-4 bg-[rgba(15,61,46,0.08)] border border-[var(--emerald)] text-[var(--emerald-deep)] text-sm">
              Thank you! Your request has been received. Our team will contact you shortly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
