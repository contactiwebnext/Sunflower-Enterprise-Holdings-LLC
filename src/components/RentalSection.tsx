import React, { useState } from 'react';
import { Home, BedDouble, Bath, MapPin, Info, ArrowRight, Phone, Mail, Filter } from 'lucide-react';
import { RENTAL_LISTINGS_DATA, COMPANY_INFO } from '../data/mockData';
import { RentalListingPlaceholder } from '../types';

interface RentalSectionProps {
  onInquireProperty: (propertyTitle: string) => void;
}

export const RentalSection: React.FC<RentalSectionProps> = ({ onInquireProperty }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredListings = filterType === 'all' 
    ? RENTAL_LISTINGS_DATA 
    : RENTAL_LISTINGS_DATA.filter((item) => 
        filterType === 'single' ? item.propertyType.includes('Single-Family') : item.propertyType.includes('Townhome')
      );

  return (
    <section id="rentals" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Home className="w-3.5 h-3.5 text-amber-600" />
              <span>Residential Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Rental Housing & Living Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We provide quality, well-maintained residential rentals across Metairie and neighboring communities. Explore sample layouts below or contact our team directly to receive notifications on current and upcoming rental inventory.
            </p>
          </div>

          {/* Quick Notice Banner & Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterType === 'all' 
                    ? 'bg-white text-slate-900 font-bold shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Sample Layouts
              </button>
              <button
                type="button"
                onClick={() => setFilterType('single')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterType === 'single' 
                    ? 'bg-white text-slate-900 font-bold shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Single-Family
              </button>
              <button
                type="button"
                onClick={() => setFilterType('multi')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterType === 'multi' 
                    ? 'bg-white text-slate-900 font-bold shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Townhomes
              </button>
            </div>
          </div>
        </div>

        {/* Clear Placeholder Information Notice */}
        <div className="mb-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-left">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-bold">Rental Availability Notice:</strong> The listings shown below represent sample floor plan archetypes and placeholder formats. For live, up-to-the-minute availability, leasing terms, or tenant inquiries in Metairie, LA, please reach out directly at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-800 font-bold underline">{COMPANY_INFO.phoneDisplay}</a> or send an inquiry.
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              id={`listing-card-${listing.id}`}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-slate-900/90 text-amber-400 border border-slate-700/80 backdrop-blur-sm shadow">
                      {listing.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="px-2 py-1 rounded bg-slate-950/75 backdrop-blur-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {listing.location}
                    </span>
                  </div>
                </div>

                {/* Listing Details */}
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                    {listing.propertyType}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {listing.title}
                  </h3>

                  {/* Bed / Bath Specs */}
                  <div className="flex items-center gap-4 py-3 my-3 border-y border-slate-100 text-slate-600 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-amber-600" />
                      <span>{listing.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-amber-600" />
                      <span>{listing.bathrooms} Baths</span>
                    </div>
                    <div className="text-amber-800 ml-auto font-bold">
                      {listing.status}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {listing.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {listing.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] text-slate-600"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  id={`inquire-listing-${listing.id}`}
                  onClick={() => onInquireProperty(listing.title)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-950"
                >
                  <span>Inquire About Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Looking to List or Rent? */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for a Rental Home or Have a Property in Metairie, LA?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              We work with prospective tenants and property owners alike. Contact Sunflower Enterprise Holdings LLC to discuss housing requirements or learn about our property management and maintenance services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onInquireProperty('General Rental Housing Inquiry')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm text-center shadow transition-colors"
            >
              Submit Rental Inquiry
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm text-center border border-slate-700 transition-colors"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
