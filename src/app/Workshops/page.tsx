import React from "react";
import { WorkshopTabs } from "@/components/workshops/WorkshopTabs";
import { WorkshopsHero } from "@/components/workshops/WorkshopsHero";

export default function WorkshopPage(): JSX.Element {
  return (
    <div>
      <WorkshopsHero />
      <WorkshopTabs />
    </div>
  );
}