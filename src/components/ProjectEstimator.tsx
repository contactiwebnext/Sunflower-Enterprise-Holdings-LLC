import React, { useState } from 'react';
import { SlidersHorizontal, ArrowRight, CheckCircle2, Calculator, Sparkles, Building, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ProjectEstimatorProps {
  onApplyPlanToContact: (data: { service: string; details: string; timeline: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyPlanToContact }) => {
  const [selectedService, setSelectedService] = useState<string>('Home Renovation');
  const [selectedScope, setSelectedScope] = useState<string>('Kitchen / Bath Remodel');
  const [timeline, setTimeline] = useState<string>('Within 1-3 Months');

  const scopeOptions: Record<string, string[]> = {
    'Home Renovation': [
      'Kitchen / Bath Remodel',
      'Full Interior Living Area Refresh',
      'Flooring & Drywall Upgrades',
      'Exterior Repair & Siding Maintenance',
      'Custom Residential Improvement'
    ],
    'Rental Housing': [
      'Single-Family Home Rental',
      'Townhome / Multi-Unit Rental',
      'Upcoming Inventory Inquiries',
      'Tenant Placement Support'
    ],
    'Property Services': [
      'Turnover Preparation & Move-In Refresh',
      'Routine Property Upkeep & Inspections',
      'Cosmetic & General Fixes',
      'Ongoing Landlord / Housing Support'
    ]
  };

  const handleStartInquiry = () => {
    onApplyPlanToContact({
      service: selectedService,
      details: selectedScope,
      timeline
    });
  };

  return (
    <section className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 lg:p-14 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
                <span>Interactive Project Guide</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Plan Your Housing Project or Rental Inquiry
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Use this simple project planner to specify your housing goals with Sunflower Enterprise Holdings LLC. We will review your selections and connect with you to discuss options and next steps.
              </p>

              <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>No obligation, initial consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Serving Metairie, LA and neighboring areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Clear communication and honest timelines</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Configurator */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  1. Select Primary Service:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Home Renovation', 'Rental Housing', 'Property Services'].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => {
                        setSelectedService(srv);
                        setSelectedScope(scopeOptions[srv][0]);
                      }}
                      className={`p-3 rounded-xl text-xs font-bold transition-all text-center border ${
                        selectedService === srv
                          ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Specific Scope */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  2. Focus Area / Need:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {scopeOptions[selectedService]?.map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setSelectedScope(scope)}
                      className={`p-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-left border flex items-center justify-between ${
                        selectedScope === scope
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{scope}</span>
                      {selectedScope === scope && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Preferred Timeline */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  3. Desired Timeline:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Immediate / Urgent', 'Within 1-3 Months', '3-6 Months', 'Just Exploring'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`p-2 rounded-xl text-[11px] font-semibold transition-all text-center border ${
                        timeline === t
                          ? 'bg-amber-100 text-amber-900 border-amber-400 font-bold'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit to Contact Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleStartInquiry}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Transfer Selections to Contact Form</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
