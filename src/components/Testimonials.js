"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    name: "Natalie M",
    text: "Last week I participated in a Zellige workshop here and had a great time! Fadoua made me feel welcome right away and supported me during the painting process with lots of good vibes and helpful advices. The atelier was easy to find and the organisation of the workshop was flawless and super fast. I would come back here any time :)",
  },
  {
    name: "Sam Persch",
    text: "My partner and I did a spinning wheel course and had the best time. We laughed, we learned and went home happy. We will be back and this time it won't take me 10 years lol. Thank you for having us.",
  },
  {
    name: "Abdo Andalussi",
    text: "It was a good dreamcatcher workshop, We had a nice time. Thanks to Ikram the best instructor",
  },
  {
    name: "Ana Felino",
    text: "Very good experience for the kids, and the staff was very nice :) They where a little sad because we couldn't bring the pottery they made, since we are leaving soon, but they let them choose another that was ready and let them paint it, and bring. Recomend for a different activity for kids, and to see lots of hamdcraft things there",
  },
  {
    name: "El mehdi El bakri",
    text: "Cet atelier est une occasion précieuse de découvrir la richesse du patrimoine culturel marocain et de renforcer l'identité nationale fondée sur la diversité et l'ouverture.",
  },
  {
    name: "Wiame Lafraoui",
    text: "The cutest place to have fun with your friends and to express your creativity with the sweetest instructors ❤️❤️",
  },
];

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
      <div className="flex flex-row flex-wrap gap-6 items-start justify-center">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className=" bg-card/80 min-w-[350px] max-w-[500px] md:min-h-[200px] md:max-h-[400px] rounded-xl shadow gap-3 p-6 text-center font-serif text-lg text-muted-foreground flex-1 flex flex-col justify-center"
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
                className="mt-2 text-xs text-background/60 inline-block underline"
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
        className="w-fit border-2 rounded-full py-4 px-6 border-foreground"
      >
        See All Testimonials
      </Button>
    </section>
  );
}
