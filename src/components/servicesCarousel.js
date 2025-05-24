"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./common/serviceCard";
import { services } from "../content/content";
import { ChevronsRight, ChevronsLeft } from "lucide-react";
import { motion } from "framer-motion";

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
        <h2 className="text-xl md:text-3xl text-foreground font-extrabold font-playfair text-center tracking-wider">
          {services.title}
        </h2>
        <p className=" text-base leading-relaxed font-light max-w-sm text-muted/80 text-center text-balance md:text-lg ">
          {services.description}
        </p>
      </div>
      <Swiper
        slidesPerView={1.6}
        centeredSlides={true}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 5,
            centeredSlides: false,
            spaceBetween: 0,
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
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full !py-8  
    [--swiper-navigation-size:3.5rem]
    [--swiper-pagination-color:hsl(var(--foreground))]
    [--swiper-pagination-bullet-inactive-color:hsl(var(--foreground)))]
    [--swiper-pagination-bullet-size:8px]
    [--swiper-pagination-bullet-horizontal-gap:4px]
    [--swiper-pagination-bullet-active-color:rgb(hsl(--primary))]
    [--swiper-pagination-bullet-inactive-opacity:0.5]
    [--swiper-pagination-bullet-opacity:1]"
      >
        <motion.div
          whileInView={{ x: [0, 50, 0, -50, 0] }}
          transition={{ duration: 1, repeat: 2, repeatType: "loop" }}
          viewport={{ once: true }}
          className="swiper-button-prev !bg-transparent border-0 border-foreground !text-cool-accent rounded-full !drop-shadow-xl transition-all duration-200 active:scale-75 hover:scale-100 !mt-1 !ml-10 md:!ml-0 "
        ></motion.div>
        <motion.div
          whileInView={{ x: [0, -50, 0, 50, 0] }}
          transition={{ duration: 1, repeat: 2, repeatType: "loop" }}
          viewport={{ once: true }}
          className="swiper-button-next !bg-transparent border-0 border-foreground !text-cool-accent rounded-full transition-all duration-200 active:scale-75 hover:scale-105 !mt-1 !mr-10 md:!mr-0"
        >
          {/* <ChevronsRight /> */}
        </motion.div>
        {services.items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="h-auto w-full flex flex-row justify-center items-center"
          >
            <div className="w-full max-w-[220px] mx-auto">
              <ServiceCard service={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
