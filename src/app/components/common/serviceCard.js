import Image from "next/image";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col items-center relative max-w-lg">
      <div
        className="w-3/4 relative aspect-square z-20"
        style={{ marginBottom: "-5rem" }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover rounded-lg shadow-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <Card
        className="flex flex-col items-center border-0 justify-center  w-full px-4 text-card-foreground shadow-lg z-10 bg-gradient-to-br backdrop-blur-lg aspect-video h-[20rem] bg-foreground/10"
        style={{ marginTop: 0 }}
      >
        <CardContent className="flex flex-col items-center justify-between mt-8 space-y-2 w-full text-center pt-0 z-20">
          <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
          <p className="text-sm ">{service.description}</p>
        </CardContent>
        <Button
          variant="outline"
          className="w-fit rounded-xl place-self-center bg-transparent "
          href={service.buttonLink}
        >
          Book Now
        </Button>
      </Card>
    </div>
  );
}
