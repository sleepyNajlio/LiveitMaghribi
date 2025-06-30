// Core application types
export interface Workshop {
  title: string;
  tagline?: string;
  subline?: string;
  image: string;
  calNamespace: string;
  category: WorkshopCategory;
  description: string;
  creation: string;
  process: string[];
  notice: {
    offer: string;
    problem?: string;
    options?: string[];
  };
  calltoAction: string;
  buttons: {
    booking: string;
    whatsapp: string;
  };
}

export type WorkshopCategory = 
  | "Clay & Earth"
  | "Pattern & Heritage" 
  | "Textile & Thread"
  | "Tastes & Tabletop";

export interface Service {
  title: string;
  description: string;
  image: string;
  calEvent: string;
  category: WorkshopCategory;
}

export interface ContactLink {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Content structure types
export interface HeroContent {
  title: string;
  description: string;
  image: string;
  alt: string;
  button: string;
}

export interface AboutContent {
  headline: string;
  subline: string;
  heroImage: string;
  story: string[];
  ethos: string[];
  hostImage: string;
  bio: string[];
  invitation: string;
}

export interface ServicesContent {
  title: string;
  description: string;
  items: Service[];
}

export interface ContactContent {
  headline: string;
  subline: string;
  openDays: string;
  openHours: string;
  address: string;
  instructions: string[];
  contactLinks: ContactLink[];
}

export interface WorkshopsContent {
  title: string;
  tagline: string;
  calUsername: string;
  items: Workshop[];
}

// Component prop types
export interface ServiceCardProps {
  service: Service;
}

export interface WorkshopCardProps {
  workshop: Workshop;
  Invert: boolean;
}

export interface CalButtonProps {
  calLink: string;
  calNamespace: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  expanded: number | null;
  setExpanded: (index: number | null) => void;
}

// Form types
export interface ReservationFormData {
  name: string;
  services: string[];
  date: string;
  time: string;
}

// API response types
export interface GoogleReviewsData {
  link: string;
}

// Utility types
export type IconComponent = React.ComponentType<{ 
  className?: string; 
  size?: number | string;
}>;

// Navigation types
export interface NavLink {
  href: string;
  label: string;
}

// Modal types
export interface WorkshopDetailModalProps {
  workshop: Workshop | null;
  open: boolean;
  onClose: () => void;
}

// Map component types
export interface MapComponentProps {
  className?: string;
}

// Filter types
export interface WorkshopFilters {
  category?: WorkshopCategory;
  searchQuery?: string;
}

// Motion iframe props
export interface MotionIframeProps {
  title: string;
  src: string;
  width: string;
  height: string;
  style: React.CSSProperties;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  referrerPolicy?: string;
  initial?: any;
  whileInView?: any;
  transition?: any;
  className?: string;
}