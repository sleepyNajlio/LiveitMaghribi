import Hero from "../components/Hero";
import About from "../components/Aboutus";
import Pricing from "../components/Pricing";
import Schedule from "../components/Schedule";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import { Services } from "../components/Services";
import Gallery from "../components/gallery";
import WorkshopsSection from "../components/workshopsSection";
import { ServicesCarousel } from "../components/servicesCarousel";
import Testimonials from "../components/Testimonials";
import { FaqSection } from "@/components/Faq";
import MapComponent from "@/components/MapComponent";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <WorkshopCard /> */}
      {/* <WorkshopsSection /> */}
      <ServicesCarousel />
      <Testimonials />
      <FaqSection />
      <div className="w-full h-full overflow-hidden shadow px-1 py-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground font-playfair tracking-widest ">
          Where The Magic Happens
        </h1>
        <MapComponent />
      </div>
      {/* <Schedule /> */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Gallery /> */}
      {/* <Pricing /> */}
      {/* <CTA /> */}
      {/* <Contact /> */}
    </div>
  );
}
