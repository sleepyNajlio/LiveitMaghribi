import React from "react";
import { Card } from "@/components/ui/card";

export const WorkshopCard = ({ workshop, onClick }) => (
  <Card className="cursor-pointer hover:shadow-lg transition" onClick={onClick}>
    <img
      src={workshop.image}
      alt={workshop.title}
      className="w-full h-40 object-cover rounded-t"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{workshop.title}</h2>
      <p className="text-gray-600">{workshop.shortDescription}</p>
    </div>
  </Card>
);
