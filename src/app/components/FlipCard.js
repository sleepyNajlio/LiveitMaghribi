"use client";

import { useState } from "react";
import CalendlyButton from "./calendlyButton";

const FlipCard = ({ title, description, image, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative w-full aspect-square cursor-pointer "
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
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
          <CalendlyButton
            link={link}
            buttonText="Book Your Spot"
            className="flex justify-center items-end"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
