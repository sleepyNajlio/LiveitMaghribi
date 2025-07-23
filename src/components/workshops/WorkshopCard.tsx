import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { GiPaintedPottery, GiEmptyHourglass } from "react-icons/gi";
import { LuCalendarFold } from "react-icons/lu";
import { contact } from "@/content/contact";
import { Workshops } from "@/content/workshops";
import { Pickaxe } from "lucide-react";
import { Button } from "../ui/button";
import CalButton from "@/components/common/calButton";
import type { WorkshopCardProps } from "@/types";

export const WorkshopCard = ({ workshop, Invert }: WorkshopCardProps)  => {
  const backgroundSvg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 H400 
      A200,200 0 0,1 400,400 
      H0 Z" fill="#feebd6"/>
  </svg>
  `;
  const backgroundSvgInverted = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(180,300,200)">
      <path d="M0,0 H400 
        A200,200 0 0,1 400,400 
        H0 Z" fill="#feebd6"/>
    </g>
  </svg>`;
  const encodedSvg = encodeURIComponent(Invert ? backgroundSvg : backgroundSvgInverted);

  return (
    <div
      className={`relative flex flex-col md:justify-start  items-center justify-center  rounded-2xl text-card-foreground overflow-hidden mx-1 md:mx-4 ${
        Invert ? "md:flex-row bg-foreground" : " md:flex-row-reverse bg-foreground/80"
      }`}
    >
      <div
        className={`w-full md:w-1/2 md:gap-11  flex flex-row  justify-center overflow-clip items-center md:flex-col-reverse  ${
          Invert ? "" : "flex-row-reverse pl-4"
        }`}
      >
        <div
          className="w-1/2 md:w-full aspect-[3/2] flex flex-col items-center justify-center relative z-10 overflow-clip  "
          style={{
            maskImage: `url("data:image/svg+xml,${encodedSvg}")`,
            WebkitMaskImage: `url("data:image/svg+xml,${encodedSvg}")`,
            maskSize: "100%",
            WebkitMaskSize: "100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        >
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            quality={100}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 z-20 pointer-events-none ${
              Invert
                ? "bg-gradient-to-r from-background/60 via-transparent to-transparent"
                : "bg-gradient-to-l from-background/50 to-transparent"
            }`}
          />
        </div>
        <h2 className=" text-lg md:text-3xl font-extrabold italic font-playfair w-1/2 md:w-full text-center tracking-[.15em] leading-loose text-pretty drop-shadow-md md:text-center max-w-lg">
          {workshop.title}
        </h2>
      </div>
      <div className="w-full md:w-fit h-full flex flex-col items-center justify-center  rounded-xl px-4 md:py-4 mt-6 text-pretty text-left gap-4">
        <p className="tracking-wide text-lg md:text-xl md:leading-loose leading-relaxed drop-shadow-lg text-center font-playfair max-w-2xl">
          {workshop.description}
        </p>
        <div className="flex flex-col items-start justify-start text-center max-w-xl">
          <Pickaxe className=" text-accent  block w-11 h-11  mr-2 mt-[-8px] place-self-center " />
          <p>{workshop.creation}</p>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 pl-1">
          {workshop.process.map((step, id) => (
            <div
              className="flex flex-row items-center justify-center leading-relaxed "
              key={id}
            >
              <FaCheckCircle className="block text-accent  min-w-6 min-h-6 max-w-6 max-h-6 mr-2 mt-1  " />
              <div key={id} className="">
                {step}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col flex-center items-center justify-center leading-relaxed">
          <div className="flex flex-col items-center justify-center leading-relaxed">
            <GiEmptyHourglass className=" text-accent  min-w-11 min-h-11 max-w-11 max-h-11 ml-[-5px] mr-2 mt-1 " />
            <p className="text-center font-playfair text-lg pb-2 leading-relaxed tracking-wide">
              {workshop.notice.offer}
            </p>
            {workshop.notice.problem && workshop.notice.problem.trim() !== "" && (
              <p className=" font-bold text-base leading-relaxed">
                {workshop.notice.problem}
              </p>
            )}
          </div>
          {workshop.notice.options && workshop.notice.options.length > 0 && (
            <div className="flex flex-col gap-2 items-start justify-start  leading-relaxed ">
              {workshop.notice.options.map((option, id) => (
                <div
                  key={id}
                  className="flex flex-row items-center justify-center  leading-relaxed"
                >
                  <GiPaintedPottery className="text-accent min-w-8 min-h-8 max-w-8 max-h-8 mr-2 mt-1 " />
                  <p className=" italic">{option}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-col items-center justify-center leading-relaxed gap-6 py-4 px-1 overflow-clip">
            <p className="font-bold font-playfair italic text-lg text-center leading-relaxed tracking-wide text-balance w-full">
              {workshop.calltoAction}
            </p>
            <div className="flex flex-row items-center justify-between gap-4 text-xl ">
              <CalButton 
                calLink={`${Workshops.calUsername}/${workshop.calNamespace}`} 
                calNamespace={workshop.calNamespace} 
                className='flex flex-row items-center justify-center gap-2'
              >
                <LuCalendarFold className="" />
                {workshop.buttons.booking}
              </CalButton>
              <Button
                variant="outline"
                className=" bg-transparent border-accent-foreground px-6 py-4 rounded-full"
                asChild
              >
                <a
                  href={contact.contactLinks[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className=" flex flex-row items-center justify-center gap-2"
                >
                  <FaWhatsapp className="" />
                  {workshop.buttons.whatsapp}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};