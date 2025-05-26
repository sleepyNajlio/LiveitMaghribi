"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Workshops } from "@/content/workshops";
import { WorkshopZ } from "./WorkshopZ";

const categories = [
  "Clay & Earth",
  "Pattern & Heritage",
  "Textile & Thread",
  "Tastes & Tabletop",
];

export const WorkshopTabs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterWorkshopsByCategory = (category) => {
    return Workshops.items
      .filter((workshop) => workshop.category === category)
      .filter(
        (workshop) =>
          workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          workshop.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  return (
    <div className="w-full space-y-4">

      <Tabs defaultValue={categories[0]} className="space-y-4">
        <TabsList className="grid w-full h-full grid-cols-2 lg:grid-cols-4 gap-2 text-accent-foreground bg-foreground/50">
          {categories.map((category) => (
            <TabsTrigger key={category} id={category} value={category.trim()} className="text-lg ">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <WorkshopZ workshops={filterWorkshopsByCategory(category)} />
            {/* <Card>
              <CardContent className="grid grid-cols-2 gap-4 p-4">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{category}</h3>
                  <div className="space-y-2">
                    {filterWorkshopsByCategory(category).map((workshop) => (
                      <div
                        key={workshop.calEvent}
                        className="p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <h4 className="font-semibold">{workshop.title}</h4>
                        <p className="text-sm text-gray-600">{workshop.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="aspect-video relative">
                  <img
                    src={filterWorkshopsByCategory(category)[0]?.image}
                    alt={category}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </CardContent>
            </Card> */}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
