"use client";

import { useState } from "react";
import CalButton from "./calButton";
import Image from "next/image";

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  onFlip: () => void;
  isFlipped: boolean;
  calUsername: string;
  calEvent: string;
}

const FlipCard = ({
  title,
  description,
  image,
  link,
  onFlip,
  isFlipped,
  calUsername,
  calEvent,
}: FlipCardProps): JSX.Element => {
  return (
    <div className="group relative w-full h-auto cursor-pointer " onClick={onFlip}>
      <div
        className={`relative w-full h-auto min-h-64 transition-all duration-300 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl"
            loading="lazy"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl p-6 flex flex-col justify-end">
            <h3 className=" mx-auto text-cream text-xl font-bold text-center">
              {title}
            </h3>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black/80 rounded-xl p-6 flex flex-col justify-between">
          <h3 className="text-cream text-xl font-bold mb-4 text-center">{title}</h3>
          <p className="text-cream/80 text-center">{description}</p>
          <CalButton 
            calLink={`${calUsername}/${calEvent}`} 
            calNamespace={calEvent}
          >
            Book Now
          </CalButton>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;