import { ServiceItem, RentalListingPlaceholder, TransformationItem } from '../types';

export const COMPANY_INFO = {
  name: 'Sunflower Enterprise Holdings LLC',
  shortName: 'Sunflower Enterprise Holdings',
  location: 'Metairie, LA',
  fullLocation: 'Metairie, Louisiana',
  phone: '888-974-4048',
  phoneRaw: '8889744048',
  phoneDisplay: '(888) 974-4048',
  email: 'lonzoclay@yahoo.com',
  tagline: 'Building Better Homes. Creating Better Living.',
  mission: 'Dedicated to providing dependable housing services, quality home renovations, and residential property solutions for homeowners, tenants, and property owners in Metairie, Louisiana, and surrounding communities.',
  serviceAreas: ['Metairie', 'Kenner', 'Jefferson Parish', 'Greater New Orleans Metro Area']
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-renovation',
    title: 'Home Renovation',
    category: 'renovation',
    iconName: 'Hammer',
    tagline: 'Property Improvements, Remodeling & Repairs',
    description: 'Transform and revitalize residential spaces with focused remodeling, structural repairs, kitchen & bathroom updates, and interior/exterior improvements designed for long-lasting value and modern comfort.',
    features: [
      'Kitchen & bathroom remodeling and fixture upgrades',
      'Interior living space updates, flooring & dry-wall repairs',
      'Exterior enhancements, siding maintenance & trim work',
      'Structural repair solutions and preventative property maintenance',
      'Customized renovation scopes tailored to homeowner vision'
    ],
    ctaLabel: 'Plan a Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'rental-housing',
    title: 'Rental Housing',
    category: 'rental',
    iconName: 'Home',
    tagline: 'Residential Rental Opportunities & Housing Services',
    description: 'Connecting individuals and families with quality, well-maintained rental residences. We prioritize clean living environments, transparent communication, and responsive property care.',
    features: [
      'Quality single-family and multi-unit residential rentals',
      'Dedicated tenant support and responsive maintenance coordination',
      'Streamlined application and transparent inquiry process',
      'Well-maintained properties meeting high comfort standards',
      'Upcoming availability alerts and customized rental matching'
    ],
    ctaLabel: 'Inquire About Rentals',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'property-services',
    title: 'Property Services',
    category: 'property',
    iconName: 'ShieldCheck',
    tagline: 'General Property Improvement & Housing Support',
    description: 'Comprehensive property assistance ensuring your residential investment remains safe, functional, and aesthetically appealing through seasonal upkeep, turnover prep, and ongoing support.',
    features: [
      'Rental turnover preparation and move-in/move-out revitalization',
      'Routine property upkeep and preventative maintenance inspections',
      'Minor plumbing, electrical fixture, and cosmetic touch-ups',
      'Property enhancement consulting for maximum longevity',
      'Dependable local support for property owners and landlords'
    ],
    ctaLabel: 'Request Property Support',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  }
];

export const RENTAL_LISTINGS_DATA: RentalListingPlaceholder[] = [
  {
    id: 'prop-sample-1',
    title: 'Modern Single-Family Residence',
    badge: 'Placeholder Listing • Inquire for Inventory',
    propertyType: 'Single-Family Home',
    bedrooms: 3,
    bathrooms: 2,
    location: 'Metairie, LA (Sample Area)',
    status: 'Upcoming Availability',
    description: 'Example residential property layout featuring open-concept living, upgraded kitchen cabinetry, spacious bedrooms, and a private fenced yard.',
    features: ['Central HVAC', 'Updated Kitchen', 'Private Yard', 'Dedicated Parking'],
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  },
  {
    id: 'prop-sample-2',
    title: 'Renovated Townhome Living',
    badge: 'Placeholder Listing • Inquire for Inventory',
    propertyType: 'Townhome / Multi-Unit',
    bedrooms: 2,
    bathrooms: 2.5,
    location: 'Metairie, LA (Sample Area)',
    status: 'Inquire for Details',
    description: 'Bright multi-level rental model featuring contemporary hardwood-style flooring, stainless finish appliances, and convenient proximity to local amenities.',
    features: ['In-Unit Laundry Hookups', 'Modern Bathrooms', 'Covered Patio', 'Energy Efficient'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  },
  {
    id: 'prop-sample-3',
    title: 'Spacious Residential Bungalow',
    badge: 'Placeholder Listing • Inquire for Inventory',
    propertyType: 'Single-Family Residence',
    bedrooms: 4,
    bathrooms: 2,
    location: 'Metairie, LA (Sample Area)',
    status: 'Upcoming Availability',
    description: 'Generous family layout concept featuring remodeled primary suite, ample storage, large driveway, and comfortable living areas.',
    features: ['Primary Suite', 'Large Driveway', 'Ceiling Fans', 'Upgraded Fixtures'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  }
];

export const TRANSFORMATION_SHOWCASE: TransformationItem[] = [
  {
    id: 'trans-kitchen',
    title: 'Kitchen Remodel & Modernization',
    area: 'Kitchen & Dining',
    beforeDescription: 'Dated cabinets, worn countertops, and restrictive lighting layout.',
    afterDescription: 'Custom shaker cabinetry, quartz countertops, modern island seating, and recessed LED illumination.',
    highlights: ['Custom Shaker Cabinets', 'Quartz Countertops', 'Pendant Lighting', 'Tile Backsplash'],
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trans-bath',
    title: 'Bathroom Refresh & Tile Renovation',
    area: 'Primary & Guest Baths',
    beforeDescription: 'Standard acrylic tub unit and dated laminate vanity.',
    afterDescription: 'Walk-in frameless glass shower, porcelain wall tile, dual-sink vanity, and modern black matte hardware.',
    highlights: ['Walk-in Glass Shower', 'Porcelain Tile', 'Floating Vanity', 'Matte Black Fixtures'],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trans-living',
    title: 'Open-Concept Living & Flooring Refresh',
    area: 'Living & Common Areas',
    beforeDescription: 'Compartmentalized walls, old carpeting, and limited natural light flow.',
    afterDescription: 'Opened architectural partition, luxury waterproof vinyl plank flooring, and fresh neutral wall finish.',
    highlights: ['Waterproof Luxury Flooring', 'Open Architectural Layout', 'Fresh Paint Finish', 'Upgraded Trim'],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Quality Workmanship',
    description: 'We approach every repair, renovation, and property improvement with meticulous attention to detail and durable materials.',
    icon: 'Hammer'
  },
  {
    title: 'Dependable Service',
    description: 'Clear communication, prompt response times, and honest project timelines you can count on every step of the way.',
    icon: 'Clock'
  },
  {
    title: 'Metairie & Local Focus',
    description: 'Rooted in Metairie, Louisiana, we understand the local housing standards, architectural styles, and community needs.',
    icon: 'MapPin'
  },
  {
    title: 'Comprehensive Solutions',
    description: 'From major residential renovations to rental housing inquiries and property upkeep, we support your housing goals.',
    icon: 'Layers'
  }
];

export const FAQS = [
  {
    question: 'What types of home renovation projects do you handle?',
    answer: 'Sunflower Enterprise Holdings LLC works on a variety of residential improvement projects, including kitchen and bathroom remodeling, flooring upgrades, drywall and painting, minor structural repairs, and comprehensive interior and exterior revitalization.'
  },
  {
    question: 'How do I inquire about current or upcoming rental properties?',
    answer: 'You can submit an inquiry through our online contact form, email us directly at lonzoclay@yahoo.com, or call us at 888-974-4048. We will provide information on current openings and upcoming rental opportunities.'
  },
  {
    question: 'Where is Sunflower Enterprise Holdings LLC located?',
    answer: 'We are based in Metairie, Louisiana, and provide housing services, home renovations, and property support throughout Metairie, Jefferson Parish, and neighboring communities in the Greater New Orleans area.'
  },
  {
    question: 'How can I get an estimate for a property improvement project?',
    answer: 'Simply reach out via our contact form with details about your home or project scope, or call 888-974-4048. We will review your project needs and discuss the next steps.'
  }
];
