import React, { useState, useEffect } from 'react';

const CostEstimator = () => {
  const [propType, setPropType] = useState(2); // default 2 BHK
  const [area, setArea] = useState(1200);
  const [chkKitchen, setChkKitchen] = useState(false);
  const [chkWardrobe, setChkWardrobe] = useState(false);
  const [chkCeiling, setChkCeiling] = useState(false);
  const [estimate, setEstimate] = useState({ low: 0, high: 0 });

  useEffect(() => {
    let baseRateLow = 800 * propType;
    let baseRateHigh = 1200 * propType;
    
    let low = area * baseRateLow;
    let high = area * baseRateHigh;
    
    if(chkKitchen) { low += 180000; high += 320000; }
    if(chkWardrobe) { low += 90000; high += 160000; }
    if(chkCeiling) { low += 60000; high += 110000; }
    
    setEstimate({ low, high });
  }, [propType, area, chkKitchen, chkWardrobe, chkCeiling]);

  const formatLakh = (val) => '₹ ' + (val / 100000).toFixed(1) + 'L';

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--beige)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center reveal">
          <p className="eyebrow text-[var(--emerald)]">Plan Your Budget</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-[var(--emerald-deep)]">
            Interior Cost Estimator
          </h2>
          <p className="text-sm mt-4 text-gray-600 max-w-lg mx-auto">
            A ballpark range in seconds. The final quote depends on your site visit and material choices.
          </p>
        </div>

        <div className="mt-14 bg-[var(--ivory)] blueprint-corner p-8 sm:p-12 reveal">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-gray-500 block">Property Type</label>
              <select 
                value={propType} 
                onChange={(e) => setPropType(parseFloat(e.target.value))}
                className="w-full mt-3 bg-transparent border-b border-[var(--emerald)] py-3 outline-none"
              >
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK / Villa</option>
                <option value="0.6">Commercial / Office</option>
              </select>
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-gray-500 block">
                Area (sqft): <span className="text-[var(--emerald)] font-bold">{area}</span>
              </label>
              <input 
                type="range" 
                min="400" 
                max="6000" 
                step="50" 
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full mt-5" 
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <label className="flex items-center gap-3 p-4 border border-[rgba(15,61,46,0.2)] cursor-pointer">
              <input 
                type="checkbox" 
                checked={chkKitchen}
                onChange={(e) => setChkKitchen(e.target.checked)}
                className="w-4 h-4 accent-[var(--emerald)]" 
              />
              <span className="text-sm">Modular Kitchen</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-[rgba(15,61,46,0.2)] cursor-pointer">
              <input 
                type="checkbox" 
                checked={chkWardrobe}
                onChange={(e) => setChkWardrobe(e.target.checked)}
                className="w-4 h-4 accent-[var(--emerald)]" 
              />
              <span className="text-sm">Wardrobes</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-[rgba(15,61,46,0.2)] cursor-pointer">
              <input 
                type="checkbox" 
                checked={chkCeiling}
                onChange={(e) => setChkCeiling(e.target.checked)}
                className="w-4 h-4 accent-[var(--emerald)]" 
              />
              <span className="text-sm">False Ceiling</span>
            </label>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-gray-500">Estimated Budget</p>
            <p className="font-display text-4xl sm:text-5xl mt-3 text-[var(--emerald-deep)]">
              {formatLakh(estimate.low)} – {formatLakh(estimate.high)}
            </p>
            <a href="#lead" className="inline-block mt-8 px-8 py-4 text-sm tracking-wide btn-primary">
              Get an Exact Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CostEstimator;
