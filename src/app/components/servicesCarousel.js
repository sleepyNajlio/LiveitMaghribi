"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./common/serviceCard";
import { services } from "../content";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// import required modules
import { Navigation, Scrollbar, Pagination } from "swiper/modules";

export const ServicesCarousel = () => {
  return (
    <div className="relative flex flex-col w-full items-center justify-center py-8">
      <h2 className="text-4xl text-primary font-bold text-center">{services.title}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
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
        modules={[Navigation, Pagination]}
        className="w-full !py-11 !px-11 
    [--swiper-navigation-size:24px]
    [--swiper-pagination-color:hsl(var(--primary))]
    [--swiper-pagination-bullet-inactive-color:hsl(var(--foreground)))]
    [--swiper-pagination-bullet-size:8px]
    [--swiper-pagination-bullet-horizontal-gap:4px]
    [--swiper-pagination-bullet-active-color:rgb(hsl(--primary))]
    [--swiper-pagination-bullet-inactive-opacity:0.5]
    [--swiper-pagination-bullet-opacity:1]"
      >
        <div className="swiper-button-prev !w-11 !h-11 !bg-white !text-primary hover:!bg-primary hover:!text-white rounded-full !shadow-md transition-colors" />
        <div className="swiper-button-next !w-11 !h-11 !bg-white !text-primary hover:!bg-primary hover:!text-white rounded-full !shadow-md transition-colors" />
        {services.items.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <ServiceCard service={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
