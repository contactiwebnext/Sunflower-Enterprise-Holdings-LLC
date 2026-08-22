import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="3" fill="#020617" stroke="none" />
                  <path d="M12 2v2" stroke="#020617" />
                  <path d="M12 20v2" stroke="#020617" />
                  <path d="m4.93 4.93 1.41 1.41" stroke="#020617" />
                  <path d="m17.66 17.66 1.41 1.41" stroke="#020617" />
                  <path d="M2 12h2" stroke="#020617" />
                  <path d="M20 12h2" stroke="#020617" />
                  <path d="m6.34 17.66-1.41 1.41" stroke="#020617" />
                  <path d="m19.07 4.93-1.41 1.41" stroke="#020617" />
                </svg>
              </div>
              <div>
                <div className="text-white font-extrabold text-lg leading-tight tracking-tight">
                  Sunflower Enterprise Holdings LLC
                </div>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Housing Services • Metairie, LA
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Dedicated to building better homes and creating better living. Providing professional home renovations, quality residential rental housing, and dependable property improvements throughout Metairie and neighboring Louisiana communities.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Consultations & Tenant Inquiries</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Our Company</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Core Housing Services</a>
              </li>
              <li>
                <a href="#rentals" className="hover:text-amber-400 transition-colors">Rental Housing Opportunities</a>
              </li>
              <li>
                <a href="#renovations" className="hover:text-amber-400 transition-colors">Renovation Concepts</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Sunflower Enterprise</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Metairie, LA Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullLocation}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 hover:text-amber-300 font-bold">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-amber-300 break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <span>Submit Service Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Disclaimers */}
        <div className="pt-8 pb-4 text-xs text-slate-500 space-y-2 text-center max-w-3xl mx-auto">
          <p>
            Sunflower Enterprise Holdings LLC is committed to equal housing opportunity. All rental listings, floor plans, and property details shown are subject to change, prior lease, and verification.
          </p>
          <p>
            © {currentYear} Sunflower Enterprise Holdings LLC. All rights reserved. Metairie, Louisiana.
          </p>
        </div>

        {/* Center-Aligned Footer Attribution - Exact requested requirement */}
        <div className="pt-4 text-center text-xs text-slate-400 font-medium">
          Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 decoration-amber-500/50 hover:decoration-amber-400 transition-colors">iWebNext</a>
        </div>

      </div>
    </footer>
  );
};
