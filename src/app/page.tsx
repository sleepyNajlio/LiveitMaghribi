import Hero from "../components/Hero";
import { ServicesCarousel } from "../components/servicesCarousel";
import Testimonials from "../components/Testimonials";
import { FaqSection } from "@/components/Faq";
import MapComponent from "@/components/MapComponent";

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <ServicesCarousel />
      <Testimonials />
      <FaqSection />
      <div className="w-full h-full overflow-hidden shadow px-1 py-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground font-playfair   ">
          Where The Magic Happens
        </h1>
        <MapComponent />
      </div>
    </div>
  );
}