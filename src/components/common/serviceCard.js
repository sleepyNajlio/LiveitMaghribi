import Image from "next/image";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ service }) {
  // SVG aspect ratio 2/3 (600x900), arch looks like a door
  const backgroundSvg = `
    <svg width="600" height="900" viewBox="0 0 600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,900 V300 
        A300,300 0 0,1 600,300 
        V900 Z" fill="#feebd6"/>
    </svg>
  `;
  const encodedSvg = encodeURIComponent(backgroundSvg);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-between relative ">
      {/* Border Layer */}
      <div
        className="absolute inset-0 z-10 w-full aspect-[2/3] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundColor: "var(--card)", // fallback color
        }}
      />
      {/* content layer */}
      <div
        className="w-full aspect-[2/3] flex flex-col items-center relative z-10 overflow-hidden"
        style={{
          maskImage: `url("data:image/svg+xml,${encodedSvg}")`,
          WebkitMaskImage: `url("data:image/svg+xml,${encodedSvg}")`,
          maskSize: "100%",
          WebkitMaskSize: "100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          transform: "scale(0.96)",
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          quality={100}
          className="object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Title at the bottom of the image */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent pt-10 pb-6 flex flex-col items-center">
          <h3 className="text-primary-foreground text-xl font-bold text-center text-balance tracking-[0.2em] max-w-44 font-playfair z-50 drop-shadow-lg">
            {service.title}
          </h3>
        </div>
      </div>
      {/* Tagline and Button below the image */}
      <div className="w-full flex flex-col items-center mt-2">
        <div className="w-full  flex flex-col items-center justify-center gap-4">
          <p className=" text-center text-balance text-md tracking-widest italic font-playfair leading-relaxed min-h-16 flex flex-col items-center justify-center ">
            {service.description}
          </p>
          <Button
            variant="outline"
            className="w-fit font-sans text-accent border-accent rounded-full shadow-xl tracking-wide mb-2 px-8"
          >
            Step Inside
          </Button>
        </div>
      </div>
      {/* <div className="text-center text-lg  italic font-playfair text-foreground min-h-11 md:min-h-14 flex flex-col items-center justify-center w-full">
        <p>{service.description}</p>
      </div>
      <Button variant="outline" className="w-fit rounded-xl my-1">
        Explore Workshop
      </Button> */}

      {/* <Card
        className={`flex flex-col text-primary-foreground items-center border shadow-none justify-center w-full px-4 z-20 bg-transparent
        `}
        style={{
          marginTop: 0,
          // backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "140%",
          // backgroundPosition: "60%",
          // opacity: 0.8,
        }}
      >
        <CardContent className=" border flex flex-col items-center justify-center mt-8 space-y-2 w-full text-pretty text-primary-foreground text-center pt-0 z-10 min-h-[200px]">
          <CardTitle className="text-md font-bold">{service.title}</CardTitle>
          <p className="text-xs ">{service.description}</p>
        </CardContent>
        <Button
          variant="outline"
          className="w-fit rounded-xl place-self-center bg-transparent "
          href={service.buttonLink}
        >
          Book Now
        </Button>
      </Card> */}
    </div>
  );
}
