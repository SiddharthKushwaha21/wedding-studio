export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  video?: string;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role?: string;
  image: string;
  rating: number;
  review: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  phone: string;
  email: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  whatsapp: string;
  socialLinks: SocialLinks;
  navLinks: NavLink[];
  stats: Stat[];
}