import Image from "next/image";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ service }) {
  const backgroundSvg = `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8B6358" d="M32.4,-55.5C44.4,-49.2,58.3,-45.4,64.5,-36.6C70.8,-27.8,69.4,-13.9,71,0.9C72.5,15.6,76.9,31.3,71.4,41.5C66,51.8,50.7,56.6,37.2,55.3C23.7,54,11.8,46.5,2.4,42.5C-7.1,38.4,-14.3,37.7,-23,36.2C-31.7,34.7,-42,32.5,-45,26.3C-48,20.1,-43.8,10.1,-46.5,-1.6C-49.2,-13.2,-58.9,-26.4,-60.1,-40C-61.4,-53.6,-54.3,-67.7,-42.9,-74.4C-31.5,-81,-15.7,-80.3,-2.8,-75.5C10.2,-70.7,20.4,-61.8,32.4,-55.5Z" transform="translate(100 100)" />
  </svg>
  `;
  const encodedSvg = encodeURIComponent(backgroundSvg);

  const blobMask = `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(0.6, 0.9)">
    <path fill="#8B6358" d="M44,-60.8C52.7,-54.2,52.5,-35.6,53.2,-20.4C54,-5.1,55.7,6.8,55.8,21.8C56,36.9,54.7,55.2,45.1,60C35.6,64.8,17.8,56.1,0.1,56C-17.7,56,-35.4,64.5,-44.8,59.7C-54.3,54.8,-55.6,36.6,-58.9,20.5C-62.2,4.4,-67.6,-9.7,-67.5,-25.5C-67.3,-41.4,-61.5,-59.1,-49.4,-64.6C-37.2,-70,-18.6,-63.2,-0.5,-62.5C17.6,-61.9,35.3,-67.4,44,-60.8Z" transform="translate(100 100)" />
  </g>
</svg>`;
  const encodedMask = encodeURIComponent(blobMask);

  return (
    <div className="w-full h-autoß flex flex-col items-center justify-between relative ">
      <div
        className="w-full aspect-[2/3] flex flex-col items-center justify-between] relative z-10"
        style={{
          // marginBottom: "-7rem",
          // marginLeft: "4rem",
          maskImage: `url("data:image/svg+xml,${encodedMask}")`,
          WebkitMaskImage: `url("data:image/svg+xml,${encodedMask}")`,
          maskSize: "150%",
          WebkitMaskSize: "150%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          quality={100}
          className="object-cover rounded-lg shadow-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/50 via-backgound/40 to-black/60">
          <div className=" absolute inset-0 py-14 flex flex-col justify-between items-center gap-11 right-6">
            <h3 className=" text-primary-foreground text-xl right-6 font-bold text-center px-6 min-h-[3rem] text-pretty tracking-[.2em] font-playfair ">
              {service.title}
            </h3>
            <div className="text-center text-xl tracking-widest text-pretty italic font-playfair text- min-h-11 flex flex-col items-center justify-center w-full ">
              <p>{service.description}</p>
            </div>
            <Button
              variant="outline"
              className="w-fit bg-transparent text-accent
              border-accent rounded-xl mb-4 ml-3 shadow-xl tracking-wide"
            >
              Step Inside
            </Button>
          </div>
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
