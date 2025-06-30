"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Workshops } from "@/content/workshops";
import { WorkshopZ } from "./WorkshopZ";
import type { WorkshopCategory } from "@/types";

const categories: WorkshopCategory[] = [
  "Clay & Earth",
  "Pattern & Heritage",
  "Textile & Thread",
  "Tastes & Tabletop",
];

export const WorkshopTabs = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<WorkshopCategory>(categories[0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (categories.includes(hash as WorkshopCategory)) {
        setActiveTab(hash as WorkshopCategory);
      }
    }
  }, []);

  const filterWorkshopsByCategory = (category: WorkshopCategory) => {
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
            <TabsTrigger
              key={category}
              id={category}
              value={category.trim()}
              className="text-lg"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <WorkshopZ workshops={filterWorkshopsByCategory(category)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};