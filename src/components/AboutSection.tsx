import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, MapPin, Building, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, TRUST_PILLARS } from '../data/mockData';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>About Our Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Committed to Quality Housing & Dependable Service
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900">{COMPANY_INFO.name}</strong> is a dedicated housing services and property improvement enterprise based in Metairie, Louisiana. We believe that well-crafted living spaces and dependable property management form the bedrock of thriving local communities.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-slate-900">
              Our Vision: Building Better Homes. Creating Better Living.
            </h3>
            
            <p className="text-slate-600 leading-relaxed">
              Whether working with residential property owners needing thoughtful renovations, individuals seeking clean and comfortable rental housing, or maintaining residential properties with preventative care, our approach is defined by honesty, craftsmanship, and clear communication.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We focus our efforts across <strong className="text-slate-800">Metairie, Jefferson Parish, and neighboring Greater New Orleans communities</strong>, providing accessible housing solutions and hands-on property improvements.
            </p>

            {/* Core Values / Commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Professionalism & Integrity</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clear scopes of work, transparent interactions, and reliable follow-through on every project and tenant inquiry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Quality Workmanship</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Utilizing solid materials, practical design choices, and meticulous finishing for durable and aesthetically pleasing results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local Metairie Focus</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Direct local knowledge of regional housing needs, weather-resistant building methods, and residential standards.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-sm transition-colors"
              >
                Discuss Your Housing Needs
              </button>
              <a
                href="#services"
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                View Our 3 Core Services
              </a>
            </div>
          </div>

          {/* Right Column: Imagery & Business Summary Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" 
                alt="Sunflower Enterprise Holdings LLC - Interior living renovation and housing quality" 
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Building className="w-4 h-4" />
                  <span>Housing Services • Metairie, LA</span>
                </div>
                <div className="text-lg font-bold">Sunflower Enterprise Holdings LLC</div>
                <p className="text-xs text-slate-300 mt-1">
                  Dedicated to improving local residential quality through focused renovations and attentive housing solutions.
                </p>
              </div>
            </div>

            {/* Business Contact Snapshot Card */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-left">
              <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-3">
                Business Contact Reference
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Headquarters Location</div>
                  <div className="text-slate-900 font-semibold flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{COMPANY_INFO.fullLocation}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Telephone Inquiries</div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                  </a>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Address</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-800 hover:text-amber-800 font-semibold flex items-center gap-1.5 mt-0.5 break-all">
                    <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Core Industry Focus</div>
                  <div className="text-slate-800 font-semibold text-xs mt-0.5">
                    Housing Services • Renovations • Rentals
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
