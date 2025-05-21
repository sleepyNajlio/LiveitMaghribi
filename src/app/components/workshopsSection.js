import WorkshopCard from "./common/workshopCard";
import { services } from "../content";

export default function WorkshopsSection() {
  return (
    <div className="flex flex-col gap-8">
      {services.items.map((service, index) => (
        <WorkshopCard key={index} {...service} invert={index % 2 === 0} />
      ))}
    </div>
  );
}
