"use client";

import { useState, useEffect } from "react";
import { hero } from "@/content/content";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LuChevronsDown } from "react-icons/lu";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Defer video loading until after page is interactive
    const onLoad = () => {
      setTimeout(() => setShowVideo(true), 2500); // 1s after load
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <section className="relative h-[91vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-10 backdrop-blur-sm "></div>

      <div className="absolute inset-0 w-full">
        {!showVideo ? (
          <img
            src="/images/hero-image.avif"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
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

      <div className="relative z-20 text-center text-white  px-2 flex flex-col items-center justify-end">
        <h1 className=" font-playfair italic tracking-widest text-3xl md:text-5xl max-w-lg font-extrabold leading-loose text-center drop-shadow-lg">
          {hero.title}
        </h1>
        <p className="text-md md:text-2xl max-w-lg mx-auto mb-8 drop-shadow-lg font-light text-balance leading-relaxed ">
          {hero.description}
        </p>
        <Button
          asChild
          className="p-6 bg-foreground/70 border-1 border-background text-accent-foreground tracking-wide text-lg rounded-full transition-all duration-300 cursor-pointer italic hover:bg-accent/70 hover:scale-105 active:scale-90 "
        >
          <a href="/Workshops">{hero.button}</a>
        </Button>
        {/* <ReservationPopup
          trigger={
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 bg-foreground/70 border-1 border-background text-accent-foreground tracking-wide  text-lg rounded-full transition-all duration-300 cursor-pointer font-bold italic hover:scale-105 active:scale-90 "
              role="button"
              aria-label={hero.button}
            >
              {hero.button}
            </button>
          }
        /> */}
      </div>
      <motion.div
        initial={{ opacity: 1, y: 50 }}
        animate={{ y: [0, 20] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 z-20"
      >
        <LuChevronsDown className="text-foreground w-20 h-20 " />
      </motion.div>
    </section>
  );
};

export default Hero;
