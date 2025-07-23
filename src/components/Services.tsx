"use client";

import { motion } from "framer-motion";
import { services } from "@/content/content";
import { useState } from "react";
import ServiceCard from "./common/serviceCard";

export const Services = ()  => {
  // Add state to track which card is flipped
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-8 bg-background text-foreground scroll-margin-top"
    >
      <motion.div
        className="max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-4xl text-primary font-bold text-center mb-8">
          {services.title}
        </h2>
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-center">
          {services.items.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};