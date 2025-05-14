"use client";

import { motion } from "framer-motion";
import { services } from "@/app/content";
import { useState } from "react"; // Add this
import FlipCard from "./FlipCard";

export const Services = () => {
  // Add state to track which card is flipped
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  return (
    <section id="services" className="py-8 text-ivory-cream scroll-margin-top">
      <motion.div
        className="max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-4xl text-mustard font-bold text-center mb-8">
          {services.title}
        </h2>
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-center">
          {services.items.map((service, index) => (
            <motion.div
              key={index}
              className="p-1 bg-cream rounded-2xl shadow-2xl w-full md:w-1/2 lg:w-1/4 max-w-sm"
            >
              <FlipCard
                calUsername={services.calUsername}
                calEvent={service.calEvent}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                isFlipped={flippedCardIndex === index}
                onFlip={() =>
                  // If the card is already flipped, unflip it
                  // Otherwise, flip this card and unflip others
                  setFlippedCardIndex(flippedCardIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
