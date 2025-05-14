"use client";

import { useState } from "react";
import CalendlyButton from "./calendlyButton";
import CalButton from "./calButton";
import Image from "next/image";

const FlipCard = ({
  title,
  description,
  image,
  link,
  onFlip,
  isFlipped,
  calUsername,
  calEvent,
}) => {
  // const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative w-full h-auto cursor-pointer "
      onClick={onFlip}
    >
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent rounded-xl p-6">
            <h3 className="relative mx-auto text-cream text-xl font-bold text-center">
              {title}
            </h3>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black/80 rounded-xl p-6 flex flex-col justify-between">
          <h3 className="text-cream text-xl font-bold mb-4 text-center">
            {title}
          </h3>
          <p className="text-cream/80 text-center">{description}</p>
          <CalButton username={calUsername} event={calEvent} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
