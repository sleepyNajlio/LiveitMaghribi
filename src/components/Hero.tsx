"use client";

import { useState, useEffect } from "react";
import { hero } from "@/content/content";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { MapPin, CalendarCheck, ChevronsDown } from "lucide-react"


const Hero = ()  => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Defer video loading until after page is interactive
    const onLoad = () => {
      setTimeout(() => setShowVideo(true), 2500);
    };
    if (document.readyState === "complete") {
      onLoad();
      return;
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Background overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      {/* Background media */}
      <div className="absolute inset-0 w-full">
        {!showVideo ? (
          <Image
            src="/images/hero-image.avif"
            alt="Authentic Moroccan workshop experience at Live It Maghribi"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-image.avif"
          >
            <source src="/videos/hero-9sc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Hero content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Main headline */}
          <h1 className="font-playfair italic text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-balance drop-shadow-2xl">
            {hero.title}
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-light text-balance leading-relaxed drop-shadow-lg">
            {hero.description}
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm lg:text-base font-medium">
            <div className="flex items-center gap-2 bg-background/30 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>Kasbat Souss, Agadir</span>
            </div>
            <div className="flex items-center gap-2 bg-background/30 backdrop-blur-sm rounded-full px-4 py-2">
              <CalendarCheck className="w-4 h-4" />
              <span>Open Daily 10:30-19:30</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-3xl"
            >
              <a href="/Workshops" aria-label="Explore our authentic Moroccan workshops">
                {hero.button}
              </a>
            </Button>
            
            {/*<Button*/}
            {/*  asChild*/}
            {/*  variant="outline"*/}
            {/*  size="lg"*/}
            {/*  className="px-8 py-4 border-2 border-white text-white bg-white/10 backdrop-blur-sm text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105 active:scale-95"*/}
            {/*>*/}
            {/*  <a href="/contact" aria-label="Contact Live It Maghribi for bookings">*/}
            {/*    Book Your Experience*/}
            {/*  </a>*/}
            {/*</Button>*/}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
        className="absolute bottom-8 z-20"
      >
        <ChevronsDown className="text-white w-8 h-8 lg:w-10 lg:h-10 drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;