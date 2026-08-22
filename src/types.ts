export interface ServiceItem {
  id: string;
  title: string;
  category: 'renovation' | 'rental' | 'property';
  iconName: string;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  imageUrl: string;
}

export interface RentalListingPlaceholder {
  id: string;
  title: string;
  badge: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  location: string;
  status: 'Upcoming Availability' | 'Inquire for Details' | 'Managed Property';
  description: string;
  features: string[];
  imageUrl: string;
  isPlaceholder: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  propertyAddress?: string;
  message: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  area: string;
  beforeDescription: string;
  afterDescription: string;
  highlights: string[];
  beforeImage: string;
  afterImage: string;
}
