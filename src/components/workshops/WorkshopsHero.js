"use client";

import React, { useState } from "react";
import { Workshops } from "@/content/workshops"; // adjust path as needed
import { WorkshopFilterBar } from "./WorkshopTabs";
import { WorkshopGrid } from "./WorkshopZ";
import { WorkshopDetailModal } from "./WorkshopDetailModal";

export const WorkshopsHero = () => {
  const backgroundSvg = `<svg width='400' height='440' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'><path d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23feebd6' fill-opacity='0.14' fill-rule='evenodd'/></svg>`;
  const encodedSvg = encodeURIComponent(backgroundSvg);

  return (
    <div
      className="mt-20 w-full h-[33vh] flex flex-col items-center justify-center text-center"
      style={{
        backgroundColor: "#9f5744",
        backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "40px 44px",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-t from-background/70 to-transparent">
        <h1 className="font-playfair text-3xl md:text-4xl  font-bold  text-balance py-3 ">
          {Workshops.title}
        </h1>
        <p className="max-w-md px-4 text-pretty">{Workshops.tagline}</p>
      </div>
    </div>
  );
};
