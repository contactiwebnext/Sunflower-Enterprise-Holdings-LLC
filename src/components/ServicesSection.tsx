import React, { useState } from 'react';
import { Hammer, Home, ShieldCheck, Check, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('home-renovation');

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Housing & Property Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Sunflower Enterprise Holdings LLC</strong> provides focused solutions tailored to residential homeowners, rental residents, and property owners in Metairie, Louisiana.
          </p>
        </div>

        {/* 3 Main Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-2 border-amber-500 shadow-xl ring-4 ring-amber-500/10'
                    : 'bg-white border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Service Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                        : 'bg-amber-50 text-amber-700 group-hover:bg-amber-100'
                    }`}>
                      {service.id === 'home-renovation' && <Hammer className="w-6 h-6" />}
                      {service.id === 'rental-housing' && <Home className="w-6 h-6" />}
                      {service.id === 'property-services' && <ShieldCheck className="w-6 h-6" />}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-amber-700 mt-1 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className={`text-xs font-bold transition-colors ${
                    isSelected ? 'text-amber-800' : 'text-slate-500 group-hover:text-slate-800'
                  }`}>
                    {isSelected ? 'Active Details View' : 'Click to View Full Scope'}
                  </span>
                  <span className={`p-1.5 rounded-lg text-xs font-bold transition-transform ${
                    isSelected ? 'bg-amber-500 text-slate-950 scale-110' : 'bg-slate-100 text-slate-600 group-hover:translate-x-1'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Active Service Spotlight Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Spotlight Text & Features */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
                  <span>Detailed Scope & Focus</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeService.title}
                </h3>
                
                <p className="text-sm font-semibold text-amber-700 mt-1">
                  {activeService.tagline}
                </p>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Key Service Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action for this service */}
              <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  id={`service-inquiry-btn-${activeService.id}`}
                  onClick={() => onSelectServiceForInquiry(activeService.title)}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>{activeService.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Spotlight Image & Area Card */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px] lg:min-h-full">
              <img 
                src={activeService.imageUrl} 
                alt={`${activeService.title} - Sunflower Enterprise Holdings LLC Metairie LA`} 
                className="w-full h-full object-cover min-h-[320px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Local Metairie, LA Service
                </div>
                <div className="text-base font-bold">
                  {COMPANY_INFO.name}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Serving Metairie, Kenner, Jefferson Parish, and neighboring Greater New Orleans residential communities.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
