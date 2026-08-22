import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { RentalSection } from './components/RentalSection';
import { RenovationVisualizer } from './components/RenovationVisualizer';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { InquiryModal } from './components/InquiryModal';
import { ContactFormData } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Home Renovation');
  const [modalSubject, setModalSubject] = useState('');

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Home Renovation',
    propertyAddress: '',
    message: ''
  });

  // Track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'rentals', 'renovations', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers
  const handleOpenInquiry = (serviceType?: string) => {
    setModalService(serviceType || 'Home Renovation');
    setModalSubject('');
    setModalOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceNeeded: serviceTitle,
      message: prev.message || `I would like to inquire about ${serviceTitle} services.`
    }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProperty = (propertyTitle: string) => {
    setModalService('Rental Housing');
    setModalSubject(`Rental listing: ${propertyTitle}`);
    setModalOpen(true);
  };

  const handleInquireRenovation = (renoTitle: string) => {
    setModalService('Home Renovation');
    setModalSubject(`Renovation concept: ${renoTitle}`);
    setModalOpen(true);
  };

  const handleApplyPlanToContact = (data: { service: string; details: string; timeline: string }) => {
    setFormData((prev) => ({
      ...prev,
      serviceNeeded: data.service,
      message: `Project Focus: ${data.details}\nDesired Timeline: ${data.timeline}\nAdditional details:`
    }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenInquiry={handleOpenInquiry} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenInquiry={handleOpenInquiry} 
          onExploreServices={handleExploreServices} 
        />

        {/* 2. About Us Section */}
        <AboutSection 
          onOpenInquiry={() => handleOpenInquiry('General Inquiry')} 
        />

        {/* 3. Core Services Section */}
        <ServicesSection 
          onSelectServiceForInquiry={handleSelectServiceForInquiry} 
        />

        {/* 4. Rental Housing Section */}
        <RentalSection 
          onInquireProperty={handleInquireProperty} 
        />

        {/* 5. Home Renovation Visualizer Showcase */}
        <RenovationVisualizer 
          onInquireRenovation={handleInquireRenovation} 
        />

        {/* 6. Interactive Housing & Project Estimator */}
        <ProjectEstimator 
          onApplyPlanToContact={handleApplyPlanToContact} 
        />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Contact Section & Direct Form */}
        <ContactSection 
          formData={formData} 
          setFormData={setFormData} 
        />
      </main>

      {/* Footer with required iWebNext attribution & Metairie business details */}
      <Footer />

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* Quick Direct Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={modalService}
        defaultSubject={modalSubject}
      />
    </div>
  );
}
