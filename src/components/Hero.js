"use client";

import Image from "next/image";
import { contact, about } from "@/content/content";
import { BsScissors } from "react-icons/bs";
import { HiOutlineScissors } from "react-icons/hi2";
import ReservationPopup from "./reservationpopup";
import { useState } from "react";
import { hero } from "@/content/content";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [{ src: hero.image, alt: hero.alt }];

  return (
    <section className="relative h-[90vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-10 backdrop-blur-sm "></div>

      <div className="absolute inset-0 w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
          poster={hero.image} // fallback image
        >
          {/* <source src="/videos/hero-video.webm" type="video/webm" /> */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 text-center text-white  px-2 flex flex-col items-center justify-end">
        <h1 className=" font-playfair italic tracking-widest text-3xl md:text-5xl max-w-lg font-extrabold leading-loose text-center drop-shadow-lg">
          {hero.title}
        </h1>
        <p className="text-md md:text-2xl max-w-lg mx-auto mb-8 drop-shadow-lg font-light text-balance leading-relaxed ">
          {hero.description}
        </p>
        <ReservationPopup
          trigger={
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 bg-foreground/70 border-1 border-background text-accent-foreground tracking-wide  text-lg rounded-full transition-all duration-300 inline-block cursor-pointer font-bold italic hover:scale-105 active:scale-90"
              role="button"
              aria-label={hero.button}
            >
              {hero.button}
            </button>
          }
        />
      </div>
      <motion.div
        initial={{ opacity: 1, y: 50 }}
        animate={{ y: [0, 20] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 z-20"
      >
        <ChevronsDown className="text-foreground w-20 h-20 " />
      </motion.div>
    </section>
  );
};

export default Hero;
