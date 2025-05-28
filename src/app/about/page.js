import Image from "next/image";
import { about } from "@/content/content";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GiSparkles } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";
import { LuHandshake, LuBrush, LuHeartHandshake, LuUserRound } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function About() {
  const backgroundSvg = `
  <svg width="600" height="900" viewBox="0 0 600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,900 V300 
      A300,300 0 0,1 600,300 
      V900 Z" fill="#feebd6"/>
  </svg>
`;
  const encodedSvg = encodeURIComponent(backgroundSvg);

  return (
    <div>
      {/* Stacked section */}
      <div className="relative w-full" style={{ height: "40vh" }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/images/workshop-entry.webp)",
            backgroundAttachment: "fixed",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full h-full gap-2 backdrop-blur-md">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-playfair italic  max-w-3xl text-pretty ">
            {about.headline}
          </h1>
          {/* <p className="font-light text-lg md:text-2xl max-w-lg tracking-wide text-foreground/90 leading-relaxed px-2 text-pretty">
            {about.subline}
          </p> */}
        </div>
      </div>
      {/* The rest of your page flows normally */}
      <div className="py-6 flex flex-col items-center justify-start gap-6 relative px-4 ">
        <div className="flex flex-row items-center justify-center ">
          <RiFilePaper2Fill className="w-8 h-8 text-accent mr-2 " />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold   italic">
            The Story Begins
          </h2>
        </div>
        <div className="flex flex-col items-left justify-center gap-4 max-w-4xl">
          {about.story.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl italic font-light tracking-wide text-center text-pretty "
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center ">
          <GiSparkles className="w-8 h-8 text-accent mr-2 " />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold   italic">
            Our Ethos
          </h2>
        </div>
        <div className="flex flex-col items-left justify-center gap-4">
          {about.ethos.map((item, index) => (
            <div key={index} className="flex flex-row items-center justify-start gap-1">
              <IoSparklesSharp className="w-8 h-8 text-accent mr-2 " />
              <p
                key={index}
                className="text-lg md:text-xl tracking-wide text-left text-pretty "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-row items-center justify-center ">
          <LuUserRound className="w-8 h-8 text-accent mr-2 " />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold   italic">
            Meet The Host
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <div
            className="w-2/3 aspect-[2/3] md:w-1/3 flex flex-col items-center relative z-10 overflow-hidden"
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
              src={about.hostImage}
              alt={about.headline}
              fill
              quality={100}
              className="object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-6 max-w-2xl">
            {about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl italic font-light tracking-wide text-center text-pretty "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div> */}
        <div className="flex flex-row items-center justify-center ">
          <LuHeartHandshake className="w-8 h-8 text-accent mr-2 " />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold   italic *:">
            Join Us
          </h2>
        </div>
        <div className="flex flex-col items-left justify-center gap-2">
          <p className="text-lg md:text-xl italic tracking-tight text-center text-pretty max-w-2xl">
            {about.invitation}
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-full bg-foreground text-accent-foreground border-accent-foreground px-6 w-full md:w-52 mx-2 "
          asChild
        >
          <a href="/Workshops">
            <LuBrush className="w-8 h-8 mr-1" />
            View Our Workshops
          </a>
        </Button>
      </div>
    </div>
  );
}
