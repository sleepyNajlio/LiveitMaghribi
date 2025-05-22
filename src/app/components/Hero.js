"use client";

import Image from "next/image";
import { contact, about } from "@/app/content";
import { BsScissors } from "react-icons/bs";
import { HiOutlineScissors } from "react-icons/hi2";
import ReservationPopup from "./reservationpopup";
import { useState } from "react";
import { hero } from "@/app/content";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [{ src: hero.image, alt: hero.alt }];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover opacity-60"
              priority={true}
              quality={85}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 text-center text-white space-y-6">
        <h1 className="text-5xl md:text-5xl max-w-3xl font-bold text-center">
          {hero.title}
        </h1>
        <p className="text-l md:text-2xl max-w-2xl mx-auto mb-8">{hero.description}</p>
        <ReservationPopup
          trigger={
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-primary text-primary-foreground text-lg rounded-2xl transition-all duration-300 inline-block cursor-pointer font-bold italic hover:scale-105 active:scale-98"
              role="button"
              aria-label={hero.button}
            >
              {hero.button}
            </button>
          }
        />
      </div>
    </section>
  );
};

export default Hero;
