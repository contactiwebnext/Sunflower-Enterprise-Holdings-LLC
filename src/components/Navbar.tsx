import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenInquiry: (serviceType?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Rentals', href: '#rentals' },
    { label: 'Renovations', href: '#renovations' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility contact bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.location}</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              id="topbar-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Company Name */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
            id="brand-logo-link"
          >
            {/* Stylized Sunflower Crest Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 text-slate-950 font-bold group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" fill="#1E293B" stroke="none" />
                <path d="M12 2v2" stroke="#1E293B" />
                <path d="M12 20v2" stroke="#1E293B" />
                <path d="m4.93 4.93 1.41 1.41" stroke="#1E293B" />
                <path d="m17.66 17.66 1.41 1.41" stroke="#1E293B" />
                <path d="M2 12h2" stroke="#1E293B" />
                <path d="M20 12h2" stroke="#1E293B" />
                <path d="m6.34 17.66-1.41 1.41" stroke="#1E293B" />
                <path d="m19.07 4.93-1.41 1.41" stroke="#1E293B" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-tight group-hover:text-amber-600 transition-colors">
                Sunflower Enterprise
              </div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-amber-700">
                Holdings LLC • Metairie, LA
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive 
                      ? 'text-amber-800 bg-amber-50 font-semibold' 
                      : 'text-slate-700 hover:text-amber-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="nav-quick-call"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenInquiry()}
              id="nav-cta-inquire"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 text-amber-700 bg-amber-50 rounded-lg"
              aria-label="Call Sunflower Enterprise Holdings LLC"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-center font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-2.5 px-4 text-center font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm transition-colors text-sm"
                >
                  Request Consultation & Info
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
