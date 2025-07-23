"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { testimonials, googleReviews } from "@/content/testimonials";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import type { TestimonialCardProps } from "@/types";

function TestimonialCard({ testimonial, index, expanded, setExpanded }: TestimonialCardProps)  {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-card/80 backdrop-blur-sm w-full max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center font-serif text-lg text-muted-foreground flex-1 flex flex-col justify-between h-full border border-border/50">
        <div>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, idx) => (
              <FaStar
                key={idx}
                className="text-yellow-500 drop-shadow-lg text-xl h-6 w-6 mx-0.5"
              />
            ))}
          </div>
          <blockquote className="block">
            <span
              className={
                expanded === index ? "" : "line-clamp-3 block transition-all duration-200"
              }
              style={
                expanded === index
                  ? {}
                  : {
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
              }
            >
              "{testimonial.text}"
            </span>
            {testimonial.text.length > 120 && (
              <Button
                variant="link"
                className="text-xs text-primary/80 inline-block underline mt-2 p-0 h-auto"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {expanded === index ? "Show less" : "Read more"}
              </Button>
            )}
          </blockquote>
        </div>
        <div className="mt-4 pt-4 border-t border-border/30">
          <span className="block text-sm text-primary font-bold">
            — {testimonial.name}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

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
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-8 lg:mb-12 font-light text-balance text-center leading-relaxed mx-auto text-muted-foreground">
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
          className="border-2 border-primary rounded-full py-4 px-8 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
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