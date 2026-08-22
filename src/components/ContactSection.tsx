import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ formData, setFormData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please provide your full name, email, and a brief message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceNeeded: 'Home Renovation',
      propertyAddress: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Sunflower Enterprise Holdings LLC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about a home renovation, rental housing opportunities, or property support in Metairie, Louisiana? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Local Metairie Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                Connect with our local team in Metairie, LA. We look forward to hearing about your project or housing inquiry.
              </p>

              <div className="space-y-6">
                {/* Phone Card */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  id="contact-box-phone-link"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Telephone (Toll-Free / Local)</div>
                    <div className="text-base font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                      {COMPANY_INFO.phoneDisplay}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Click to call directly</div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  id="contact-box-email-link"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-medium">Email Inquiries</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors break-all">
                      {COMPANY_INFO.email}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Click to send an email</div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Headquarters Location</div>
                    <div className="text-base font-bold text-white">
                      {COMPANY_INFO.fullLocation}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Serving Metairie & Jefferson Parish
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Note */}
              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Service Coverage:</span> Metairie, Kenner, Jefferson Parish, and neighboring Greater New Orleans residential areas.
              </div>
            </div>

            {/* Quick trust reassurance */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 font-bold">Privacy & Communication:</strong> Your contact information is used strictly to respond to your inquiry and discuss housing or renovation services. We respect your privacy.
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm text-left">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank You for Your Inquiry!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We have received your message for <strong className="text-slate-800">{COMPANY_INFO.name}</strong>. Our team in Metairie, LA will review your details and be in touch soon.
                </p>
                
                <div className="p-4 rounded-xl bg-white border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-700 space-y-1">
                  <div><strong className="font-semibold text-slate-900">Name:</strong> {formData.fullName}</div>
                  <div><strong className="font-semibold text-slate-900">Email:</strong> {formData.email}</div>
                  <div><strong className="font-semibold text-slate-900">Service:</strong> {formData.serviceNeeded}</div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                  >
                    Call Now: {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="business-contact-form">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    Send an Inquiry Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Fill out the form below and we will get back to you promptly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone and Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="e.g. (504) 555-0199"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-serviceNeeded" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Needed <span className="text-amber-600">*</span>
                    </label>
                    <select
                      id="contact-serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Home Renovation">Home Renovation (Remodeling & Repairs)</option>
                      <option value="Rental Housing">Rental Housing (Tenant & Inventory Inquiries)</option>
                      <option value="Property Services">Property Services (General Upkeep & Support)</option>
                      <option value="General Inquiry">General Business Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Optional Property Address / Area */}
                <div>
                  <label htmlFor="contact-propertyAddress" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Address or Area (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-propertyAddress"
                    name="propertyAddress"
                    placeholder="e.g. Metairie, LA neighborhood or project location"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Project Details <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your renovation goals, rental housing questions, or property requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-sm outline-none transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-button"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 font-extrabold text-sm tracking-wide shadow-md shadow-amber-500/25 hover:shadow-amber-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message to Sunflower Enterprise Holdings LLC</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
