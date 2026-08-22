import React, { useState } from 'react';
import { Hammer, Sparkles, CheckCircle2, ArrowRight, Eye, RefreshCw } from 'lucide-react';
import { TRANSFORMATION_SHOWCASE, COMPANY_INFO } from '../data/mockData';

interface RenovationVisualizerProps {
  onInquireRenovation: (type: string) => void;
}

export const RenovationVisualizer: React.FC<RenovationVisualizerProps> = ({ onInquireRenovation }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const currentItem = TRANSFORMATION_SHOWCASE[activeTab] || TRANSFORMATION_SHOWCASE[0];

  return (
    <section id="renovations" className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Hammer className="w-3.5 h-3.5 text-amber-400" />
            <span>Remodeling & Improvement Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Residential Renovation Transformations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover how strategic renovations elevate everyday living spaces with modern finishes, improved functionality, and lasting residential value.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {TRANSFORMATION_SHOWCASE.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setViewMode('after');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Visualizer Card */}
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visualizer Image Display Area */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[440px] bg-slate-950">
              <img
                src={viewMode === 'after' ? currentItem.afterImage : currentItem.beforeImage}
                alt={`${currentItem.title} (${viewMode})`}
                className="w-full h-full object-cover transition-opacity duration-300 min-h-[360px]"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* View Mode Toggle Controls */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase backdrop-blur-md ${
                  viewMode === 'after' 
                    ? 'bg-amber-500 text-slate-950' 
                    : 'bg-slate-900/90 text-slate-300 border border-slate-700'
                }`}>
                  {viewMode === 'after' ? 'Completed Transformation' : 'Original State Reference'}
                </span>

                <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-700 shadow">
                  <button
                    type="button"
                    onClick={() => setViewMode('before')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      viewMode === 'before' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('after')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      viewMode === 'after' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                  {currentItem.area}
                </div>
                <div className="text-sm font-medium text-slate-200 mt-0.5">
                  {viewMode === 'after' ? currentItem.afterDescription : currentItem.beforeDescription}
                </div>
              </div>
            </div>

            {/* Details & Specs Panel */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between text-left">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Transformation Overview
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Carefully planned property renovations upgrade both aesthetic comfort and long-term durability. From cabinetry to lighting and flooring, every element is installed with precision.
                </p>

                <div className="mt-6">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                    Key Renovation Enhancements:
                  </div>
                  <div className="space-y-2.5">
                    {currentItem.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-700/80 space-y-3">
                <button
                  type="button"
                  onClick={() => onInquireRenovation(currentItem.title)}
                  className="w-full py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Renovation Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-xs text-slate-400">
                  Or call directly at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 font-semibold hover:underline">{COMPANY_INFO.phoneDisplay}</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
