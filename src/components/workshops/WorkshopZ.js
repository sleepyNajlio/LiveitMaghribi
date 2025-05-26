import React from "react";
import { WorkshopCard } from "./WorkshopCard";

export const WorkshopZ = ({ workshops }) => {
  return (
    <div className="flex flex-col justify-start gap-6 p-1">
      {workshops.map((workshop, idx) => (
        <div className="" key={idx}>
          <WorkshopCard workshop={workshop} Invert={idx % 2 === 0} />
        </div>
      ))}
    </div>
  );
};
