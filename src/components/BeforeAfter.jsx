import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter = () => {
  const sliderRef = useRef(null);
  const [percent, setPercent] = useState(50);
  const isDragging = useRef(false);

  const moveSlider = (e) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let clientX = e.clientX;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    } else if (e.clientX === undefined) {
      return; // fallback
    }
    
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const p = (x / rect.width) * 100;
    setPercent(p);
  };

  useEffect(() => {
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e) => { moveSlider(e); };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: false });

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--ivory)]">
      <div className="max-w-5xl mx-auto text-center reveal">
        <p className="eyebrow text-[var(--emerald)]">The Difference</p>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--emerald-deep)]">
          See the room, <span className="font-display-italic">before we touch it.</span>
        </h2>
        <p className="text-sm mt-4 text-gray-500">Drag the divider to compare.</p>
      </div>

      <div className="max-w-4xl mx-auto mt-14 reveal">
        <div 
          ref={sliderRef}
          className="relative w-full aspect-[16/10] overflow-hidden blueprint-corner select-none cursor-ew-resize"
          onMouseDown={() => isDragging.current = true}
          onTouchStart={() => isDragging.current = true}
        >
          <img src="/images/after_renovation.webp" alt="After renovation" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none" 
            style={{ width: `${percent}%` }}
          >
            <img 
              src="/images/before_renovation.webp" 
              alt="Before renovation" 
              className="absolute inset-0 h-full object-cover" 
              style={{ width: '100%', minWidth: '100vw', maxWidth: 'none', left: 0 }} 
            />
          </div>
          
          <div 
            className="ba-slider-handle absolute top-0 bottom-0 flex items-center justify-center pointer-events-none" 
            style={{ left: `${percent}%`, width: '2px', background: 'var(--gold)', transform: 'translateX(-1px)' }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center -ml-5 bg-[var(--gold)] text-[var(--emerald-deep)]">
              <span className="text-xs">↔</span>
            </div>
          </div>
          
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] px-3 py-1 glass text-[var(--ivory)] pointer-events-none">BEFORE</span>
          <span className="absolute top-4 right-4 text-[10px] tracking-[0.25em] px-3 py-1 glass text-[var(--ivory)] pointer-events-none">AFTER</span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
