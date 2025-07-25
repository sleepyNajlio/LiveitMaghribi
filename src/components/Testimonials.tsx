"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { testimonials, googleReviews } from "@/content/testimonials";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import  TestimonialCard  from "./common/TestimonialCard";


export default function Testimonials()  {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="mx-auto px-4 py-8 lg:py-12 flex flex-col gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="font-playfair font-bold tracking-wider text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          What Our Guests Say
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-8 lg:mb-12 font-light text-balance text-center leading-relaxed mx-auto text-muted">
          Real voices from hands-on moments woven with clay, color, and connection in the heart of Morocco
        </p>
      </motion.div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full max-w-7xl">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            testimonial={t}
            index={i}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>

      {/* Google Reviews CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <Button
          variant="outline"
          className="border-2 border-primary rounded-full py-6 px-8 text-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
          asChild
        >
          <a
            href={googleReviews.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-lg font-semibold"
            aria-label="Read all reviews on Google"
          >
            <FcGoogle className="!w-6 !h-6" />
            See All Reviews on Google
          </a>
        </Button>
      </motion.div>
    </section>
  );
}