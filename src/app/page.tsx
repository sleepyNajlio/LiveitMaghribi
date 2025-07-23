import { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import { ServicesCarousel } from "../components/servicesCarousel";
import Testimonials from "../components/Testimonials";
import { FaqSection } from "@/components/Faq";
import MapComponent from "@/components/MapComponent";

// Dynamic imports for non-critical components
const DynamicTestimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => <div className="h-64 bg-muted/20 animate-pulse rounded-xl" />,
});

const DynamicFaqSection = dynamic(() => import("@/components/Faq").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="h-48 bg-muted/20 animate-pulse rounded-xl" />,
});

const DynamicMapComponent = dynamic(() => import("@/components/MapComponent"), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse rounded-xl" />,
});

// JSON-LD Schema Markup
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Live It Maghribi",
  "description": "Authentic Moroccan workshops and cultural experiences in Kasbat Souss, Agadir. Learn pottery, zellige, cooking, and traditional crafts.",
  "url": "https://liveitmaghribi.com",
  "telephone": "+212610714670",
  "email": "contact@liveitmaghribi.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kasbat Souss",
    "addressLocality": "Agadir",
    "postalCode": "80000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.38462747475409",
    "longitude": "-9.57517072278698"
  },
  "openingHours": "Mo-Su 10:30-19:30",
  "priceRange": "$$",
  "servesCuisine": "Moroccan",
  "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5960.433809928003!2d-9.57517072278698!3d30.38462747475409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7006a046a59%3A0x3ff923254dfb60f5!2satelier%20live%20it%20maghribi%20workshop%20and%20activities!5e1!3m2!1sen!2sma!4v1748051053112!5m2!1sen!2sma",
  "sameAs": [
    "https://www.instagram.com/liveitmaghribi"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47"
  },
  "offers": {
    "@type": "Offer",
    "description": "Traditional Moroccan workshops including pottery, zellige, cooking classes, and cultural experiences"
  }
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Critical above-the-fold content */}
        <section aria-label="Welcome to Live It Maghribi">
          <Hero />
        </section>

        {/* Main Content Grid */}
        <main className="space-y-16 lg:space-y-24">
          {/* Workshop Showcase Section */}
          <section 
            aria-labelledby="workshops-heading" 
            className="py-8 lg:py-16"
          >
            <div className="container mx-auto px-4">
              <header className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                <h2 
                  id="workshops-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-playfair mb-4"
                >
                  Authentic Moroccan Workshops
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Immerse yourself in centuries-old traditions through hands-on experiences in pottery, zellige, cooking, and more
                </p>
              </header>
              <ServicesCarousel />
            </div>
          </section>

          {/* Testimonials Section - Dynamically loaded */}
          <section 
            aria-labelledby="testimonials-heading"
            className="py-8 lg:py-16 bg-gradient-to-b from-background to-muted/10"
          >
            <div className="container mx-auto px-4">
              <header className="text-center mb-12">
                <h2 
                  id="testimonials-heading"
                  className="text-3xl md:text-4xl font-bold text-foreground font-playfair mb-4"
                >
                  What Our Guests Say
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real experiences from visitors who discovered the magic of Moroccan craftsmanship
                </p>
              </header>
              <DynamicTestimonials />
            </div>
          </section>

          {/* FAQ Section - Dynamically loaded */}
          <section 
            aria-labelledby="faq-heading"
            className="py-8 lg:py-16"
          >
            <div className="container mx-auto px-4">
              <DynamicFaqSection />
            </div>
          </section>

          {/* Location & Contact Section */}
          <section 
            aria-labelledby="location-heading"
            className="py-8 lg:py-16 bg-gradient-to-t from-background to-muted/10"
          >
            <div className="container mx-auto px-4">
              <header className="text-center mb-12 lg:mb-16">
                <h2 
                  id="location-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-playfair mb-4"
                >
                  Discover Kasbat Souss, Agadir
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Located in the heart of historic Kasbat Souss, our workshop offers an authentic cultural experience just minutes from Agadir's city center
                </p>
              </header>
              
              {/* Location Info Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                <div className="space-y-6">
                  <div className="bg-card/50 rounded-2xl p-6 lg:p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4 font-playfair">
                      Visit Our Workshop
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Open daily: 10:30 AM – 7:30 PM
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Kasbat Souss, Agadir 80000
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Free parking available
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 rounded-2xl p-6 lg:p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4 font-playfair">
                      Easy to Find
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Follow the signs to the Kasbat Souss Museum — we're just next door. 
                      Enter through the main gate or use the back entrance with convenient parking.
                    </p>
                  </div>
                </div>
                
                <div className="order-first lg:order-last">
                  <DynamicMapComponent />
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    aria-label="Get directions to Live It Maghribi"
                  >
                    Plan Your Visit
                  </a>
                  <a
                    href="tel:+212610714670"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label="Call Live It Maghribi"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}