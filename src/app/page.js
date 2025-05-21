import Hero from "./components/Hero";
import About from "./components/Aboutus";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import { Services } from "./components/Services";
import Gallery from "./components/gallery";
import WorkshopsSection from "./components/workshopsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <WorkshopCard /> */}
      <WorkshopsSection />
      {/* <Services />
      <About /> */}
      {/* <Gallery /> */}
      {/* <Pricing /> */}
      {/* <CTA /> */}
      {/* <Contact /> */}
    </div>
  );
}
