"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./common/serviceCard";
import { services } from "../content/content";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// import required modules
import { Navigation, Scrollbar, Pagination, Autoplay } from "swiper/modules";

export const ServicesCarousel = () => {
  return (
    <div className="relative flex flex-col w-full items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl md:text-5xl text-foreground font-extrabold font-playfair text-center tracking-wider">
          {services.title}
        </h2>
        <p className=" text-base leading-relaxed font-light max-w-sm tex-foreground/60 text-center text-balance md:text-lg ">
          {services.description}
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full !py-11 !px-11 
    [--swiper-navigation-size:3rem] [--swiper-navigation-display:none] 
    [--swiper-pagination-color:hsl(var(--foreground))]
    [--swiper-pagination-bullet-inactive-color:hsl(var(--foreground)))]
    [--swiper-pagination-bullet-size:8px]
    [--swiper-pagination-bullet-horizontal-gap:4px]
    [--swiper-pagination-bullet-active-color:rgb(hsl(--primary))]
    [--swiper-pagination-bullet-inactive-opacity:0.5]
    [--swiper-pagination-bullet-opacity:1]"
      >
        <div className="swiper-button-prev !bg-transparent border-0 border-foreground !text-foreground rounded-full !drop-shadow-xl transition-all duration-200 active:scale-75 hover:scale-100 "></div>
        <div className="swiper-button-next !w-14 !h-14 !bg-transparent border-0 border-foreground !text-foreground rounded-full  transition-all duration-200 active:scale-75 hover:scale-105">
          {/* <ChevronsRight /> */}
        </div>
        {services.items.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <ServiceCard service={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
