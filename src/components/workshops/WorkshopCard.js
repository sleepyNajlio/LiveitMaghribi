import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { GiPaintedPottery, GiEmptyHourglass } from "react-icons/gi";
import { LuCalendarFold } from "react-icons/lu";
import { contact } from "@/content/contact";

import { Pickaxe } from "lucide-react";
import { Button } from "../ui/button";

export const WorkshopCard = ({ workshop, Invert }) => {
  const backgroundSvg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 H400 
      A200,200 0 0,1 400,400 
      H0 Z" fill="#feebd6"/>
  </svg>
  `;
  const encodedSvg = encodeURIComponent(backgroundSvg);

  const PatternSvg = `<svg width='400' height='440' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'><path d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='#3d211bebd6' fill-opacity='0.05' fill-rule='evenodd'/></svg>`;
  const encodedPattern = encodeURIComponent(PatternSvg);
  return (
    <div
      className={`relative flex flex-col md:flex-row md:justify-start  items-center justify-center  rounded-2xl text-card-foreground overflow-hidden ${
        Invert ? "md:flex-row-reverse bg-foreground" : " bg-foreground/80"
      }`}
      style={{
        // backgroundColor: "var(--card-foreground))",
        backgroundImage: `url("data:image/svg+xml,${encodedPattern}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "40px 44px",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`w-full md:w-1/2 md:gap-11  flex flex-row  justify-start overflow-clip items-center md:flex-col-reverse  ${
          Invert ? "" : "flex-row-reverse pl-4"
        }`}
      >
        <div
          className="w-1/2 md:w-full aspect-[2/3] max-w-sm flex flex-col items-center justify-end relative z-10 overflow-clip "
          style={{
            maskImage: `url("data:image/svg+xml,${encodedSvg}")`,
            WebkitMaskImage: `url("data:image/svg+xml,${encodedSvg}")`,
            maskSize: "100%",
            WebkitMaskSize: "100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            // transform: "scale(0.96)",
          }}
        >
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            quality={100}
            className="object-cover "
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <h2 className=" text-xl font-extrabold italic mb-2 font-playfair w-1/3 md:w-full text-left tracking-[.15em] leading-loose text-balance drop-shadow-md md:text-center max-w-lg">
          {workshop.title}
        </h2>
      </div>
      <div className="w-full md:w-fit h-full flex flex-col items-center justify-center  rounded-xl px-4 md:py-4 mt-6 text-pretty text-left gap-4">
        {/* <h2 className="text-2xl font-bold mb-2 font-playfair place-self-end max-w-[1/2]">
              {workshop.subline}
            </h2> */}
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
        {/* <div className="flex relative items-end justify-end w-1/2 aspect-[2/1] ">
          <Image
            src="/images/services/traditional-pottery.jpg"
            fill
            loading="lazy"
            className="object-cover  rounded-3xl"
          />
        </div> */}
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
            <div className="flex flex-row items-center justify-between gap-4 ">
              <Button
                variant="default"
                className=" px-6 py-4 rounded-full hover:bg-accent/60 hover:text-accent-foreground drop-shadow-md "
              >
                <LuCalendarFold className="" />
                {workshop.buttons.booking}
              </Button>
              <Button
                variant="outline"
                className=" bg-transparent border-accent-foreground px-6 py-4 rounded-full"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noreferrer">
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
