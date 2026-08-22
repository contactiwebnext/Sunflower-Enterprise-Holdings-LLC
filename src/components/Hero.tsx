import React from 'react';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenInquiry: (serviceType?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry: _onOpenInquiry, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
      {/* Background Hero Image with Elegant Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Sunflower Enterprise Holdings LLC - Residential Property and Home Renovation Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayer Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/90 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-slate-950/90" />
      </div>
      
      {/* Subtle grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Metairie Location Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Metairie, Louisiana Housing & Property Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl">
            Building Better Homes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              Creating Better Living.
            </span>
          </h1>

          {/* Introduction */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal">
            Welcome to <span className="text-white font-semibold">{COMPANY_INFO.name}</span>. Based in Metairie, LA, we specialize in high-quality home renovations, residential rental housing, and dedicated property improvement services. Whether you are revitalizing a residence, seeking rental opportunities, or enhancing property value, we deliver dependable workmanship with local care.
          </p>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2">
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Quality Craftsmanship</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Responsive Property Care</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Local Metairie Commitment</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              id="hero-contact-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-950 font-bold bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 text-sm sm:text-base group"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={onExploreServices}
              id="hero-services-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 text-sm sm:text-base"
            >
              <span>Learn About Our Services</span>
            </button>
          </div>

          {/* Direct Contact reassurance */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
            <span>Direct Inquiries:</span>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 hover:underline font-semibold">
              {COMPANY_INFO.phoneDisplay}
            </a>
            <span>•</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:underline">
              {COMPANY_INFO.email}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
