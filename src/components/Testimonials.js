"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="mx-auto px-4 py-6 flex flex-col gap-6 items-center">
      <div>
        <h2 className="font-playfair font-bold  tracking-wider  text-3xl md:text-5xl text-center text-foreground mb-1">
          What Our Guests Say:
        </h2>
        <p className="text-base md:text-lg max-w-sm mb-10 font-light text-balance text-center leading-relaxed mx-auto">
          Real voices from hands-on moments woven with clay, color, and connection.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 items-start justify-center">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className=" bg-card/80 w-full max-w-sm  rounded-xl shadow  p-4 text-center font-serif text-lg text-muted-foreground flex-1 flex flex-col justify-center"
          >
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
                  expanded === i ? "" : "line-clamp-2 block transition-all duration-200"
                }
                style={
                  expanded === i
                    ? {}
                    : {
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }
                }
              >
                “{t.text}”
              </span>
              <Button
                variant="link"
                className=" text-xs text-background/60 inline-block underline"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? "Show less" : "Read more"}
              </Button>
              <br />
              <span className="block mt-2 text-sm text-primary font-bold">
                — {t.name}
              </span>
            </blockquote>
          </Card>
        ))}
      </div>
      <Button
        variant="outline"
        className="w-fit !border-1 font-light rounded-full py-4 px-6 border-foreground text-foreground"
      >
        See All Testimonials
      </Button>
    </section>
  );
}
