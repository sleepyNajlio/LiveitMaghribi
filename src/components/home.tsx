"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";
import type { Workshop, FAQ } from "@/types";

// Dummy data for workshops and FAQs
const workshops: Workshop[] = [
  // Fill with your 15 workshops
  {
    title: "Zellige Tile Art",
    tagline: "Piece by piece, a mosaic of tradition.",
    image: "/images/workshops/zellige.jpg",
    calNamespace: "zellige",
    category: "Pattern & Heritage",
    description: "Traditional Moroccan tile art workshop",
    creation: "Create beautiful zellige patterns",
    process: ["Learn traditional techniques", "Create your own design"],
    notice: {
      offer: "Take home your creation",
    },
    calltoAction: "Book your spot now",
    buttons: {
      booking: "Book Now",
      whatsapp: "Contact Us",
    },
  },
  // ...add 14 more
];

const faqs: FAQ[] = [
  {
    question: "Do I need prior experience?",
    answer: "No! All workshops are beginner-friendly and guided by local artisans.",
  },
  {
    question: "How do I book?",
    answer: "Just tap 'Book Now' on any workshop or use our Calendly link.",
  },
  // ...add more
];

// Lazy load map for performance
// const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function HomePage()  {
  return (
    <main className="bg-background text-foreground font-sans min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Moroccan crafts"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
          <h1 className="font-playfair text-3xl md:text-5xl text-center text-foreground drop-shadow-lg mb-4">
            Craft Culture, <br className="hidden md:block" /> Live it Maghribi
          </h1>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground rounded-full px-8 py-3 mt-2 shadow-lg hover:shadow-xl hover:bg-primary/90 transition"
          >
            <a href="#workshops">Book Now</a>
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-xl mx-auto px-4 py-10 text-center">
        <h2 className="font-playfair text-2xl md:text-3xl mb-2 text-primary">
          A Handmade Haven
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-sans">
          Step into a sunlit space where Moroccan tradition meets modern curiosity. From
          zellige mosaics to henna art, every day is a new chance to create, connect, and
          be inspired.
        </p>
      </section>

      {/* Workshops Carousel */}
      <section id="workshops" className="py-10">
        <h2 className="font-playfair text-2xl md:text-3xl text-center mb-6 text-primary">
          Today's Workshops
        </h2>
        <div className="overflow-x-auto flex gap-6 px-4 snap-x snap-mandatory">
          {workshops.map((ws, i) => (
            <div
              key={ws.title}
              className="min-w-[85vw] sm:min-w-[340px] max-w-xs bg-card rounded-2xl shadow-md snap-start flex-shrink-0 flex flex-col items-center p-4 transition hover:shadow-lg active:scale-95"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src={ws.image}
                  alt={ws.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 85vw, 340px"
                />
              </div>
              <h3 className="font-playfair text-lg text-primary mb-1 text-center">
                {ws.title}
              </h3>
              <p className="italic text-muted-foreground text-center mb-3">
                {ws.tagline}
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-primary text-primary-foreground shadow hover:shadow-lg active:scale-95 transition"
              >
                <a href={`https://calendly.com/liveitmaghribi/${ws.calNamespace}`} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials (optional) */}
      <section className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="font-playfair text-2xl md:text-3xl text-center mb-6 text-primary">
          What People Say
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <blockquote className="bg-card rounded-xl shadow p-6 text-center font-serif text-lg text-muted-foreground">
            "A magical space! I learned so much and felt so welcome."
            <br />
            <span className="block mt-2 text-sm text-primary">— Sofia, Spain</span>
          </blockquote>
          {/* Example Instagram screenshot */}
          <Image
            src="/images/testimonial-insta.png"
            alt="Instagram testimonial"
            width={220}
            height={220}
            className="rounded-xl shadow object-cover"
          />
        </div>
      </section>

      {/* Contact & Map */}
      <section className="max-w-3xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="font-playfair text-2xl md:text-3xl mb-2 text-primary">
            Visit Us
          </h2>
          <p className="text-muted-foreground">Open daily: 10am – 8pm</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl text-primary hover:text-primary-foreground transition" />
            </a>
            <a
              href="https://instagram.com/liveitmaghribi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl text-primary hover:text-primary-foreground transition" />
            </a>
          </div>
        </div>
        {/* <div className="flex-1 w-full h-64 rounded-xl overflow-hidden shadow">
          <MapComponent />
        </div> */}
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="font-playfair text-2xl md:text-3xl text-center mb-6 text-primary">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="font-bold text-left text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}