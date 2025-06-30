"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { testimonials, googleReviews } from "@/content/testimonials";
import { FcGoogle } from "react-icons/fc";
import type { TestimonialCardProps } from "@/types";

function TestimonialCard({ testimonial, index, expanded, setExpanded }: TestimonialCardProps): JSX.Element {
  return (
    <Card className="bg-card/80 w-full max-w-sm rounded-xl shadow p-4 text-center font-serif text-lg text-muted-foreground flex-1 flex flex-col justify-center">
      <div className="flex justify-center mb-2">
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
            expanded === index ? "" : "line-clamp-2 block transition-all duration-200"
          }
          style={
            expanded === index
              ? {}
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
        >
          "{testimonial.text}"
        </span>
        <Button
          variant="link"
          className="text-xs text-background/60 inline-block underline"
          onClick={() => setExpanded(expanded === index ? null : index)}
        >
          {expanded === index ? "Show less" : "Read more"}
        </Button>
        <br />
        <span className="block mt-2 text-sm text-primary font-bold">
          — {testimonial.name}
        </span>
      </blockquote>
    </Card>
  );
}

export default function Testimonials(): JSX.Element {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="mx-auto px-4 py-6 flex flex-col gap-6 items-center">
      <div>
        <h2 className="font-playfair font-bold tracking-wider text-3xl md:text-5xl text-center text-foreground mb-1">
          What Our Guests Say:
        </h2>
        <p className="text-base md:text-lg max-w-sm mb-10 font-light text-balance text-center leading-relaxed mx-auto">
          Real voices from hands-on moments woven with clay, color, and connection.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 items-start justify-center">
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
      <Button
        variant="outline"
        className="w-fit !border-1 rounded-full py-4 px-6 border-foreground text-background bg-foreground italic"
      >
        <a
          href={googleReviews.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg"
        >
          <FcGoogle className="!w-6 !h-6" />
          See All Testimonials
        </a>
      </Button>
    </section>
  );
}