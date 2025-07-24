"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./common/serviceCard";
import { services } from "@/content/content";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// import required modules
import { Navigation, Scrollbar, Pagination, Autoplay } from "swiper/modules";

export const ServicesCarousel = ()  => {
  return (
    <div className=" relative flex flex-col w-full items-center justify-center">
      {/* Enhanced header section */}
      <motion.div 
        className="flex flex-col items-center justify-center gap-4 mb-8 lg:mb-12 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-extrabold font-playfair tracking-wide">
          {services.title}
        </h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-2xl text-muted text-balance">
          {services.description}
        </p>
        
        {/* Workshop categories preview */}
        {/*<div className="flex flex-wrap justify-center gap-2 mt-4">*/}
        {/*  {["Clay & Earth", "Pattern & Heritage", "Textile & Thread", "Tastes & Tabletop"].map((category) => (*/}
        {/*    <span */}
        {/*      key={category}*/}
        {/*      className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium"*/}
        {/*    >*/}
        {/*      {category}*/}
        {/*    </span>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </motion.div>

      {/* Enhanced carousel */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={16}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: false,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              centeredSlides: false,
              spaceBetween: 24,
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
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full !py-8 lg:!py-12
            [--swiper-navigation-size:2rem]
            [--swiper-navigation-color:hsl(var(--foreground))]
            [--swiper-pagination-color:hsl(var(--primary))]
            [--swiper-pagination-bullet-inactive-color:hsl(var(--muted-foreground))]
            [--swiper-pagination-bullet-size:10px]
            [--swiper-pagination-bullet-horizontal-gap:6px]
            [--swiper-pagination-bullet-inactive-opacity:0.4]
            [--swiper-pagination-bullet-opacity:1]"
        >
          {/* Enhanced navigation buttons */}
          <motion.div
            whileInView={{ x: [0, 50, 0, -50, 0] }}
            transition={{ duration: 1.5, repeat: 1, repeatType: "loop" }}
            viewport={{ once: true }}
            className="swiper-button-prev !bg-background/80 backdrop-blur-sm border border-border !text-foreground rounded-full !w-12 !h-12 shadow-lg transition-all duration-200 active:scale-75 hover:scale-110 hover:!bg-primary hover:!text-primary-foreground !ml-4 lg:!ml-0"
          />
          <motion.div
            whileInView={{ x: [0, -50, 0, 50, 0] }}
            transition={{ duration: 1.5, repeat: 1, repeatType: "loop" }}
            viewport={{ once: true }}
            className="swiper-button-next !bg-background/80 backdrop-blur-sm border border-border !text-foreground rounded-full !w-12 !h-12 shadow-lg transition-all duration-200 active:scale-75 hover:scale-110 hover:!bg-primary hover:!text-primary-foreground !mr-4 lg:!mr-0"
          />

          {/* Service cards */}
          {services.items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-auto w-full flex flex-row justify-center items-center"
            >
              <motion.div 
                className="w-full max-w-[280px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={item} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Call to action */}
      {/*<motion.div*/}
      {/*  className="mt-8 lg:mt-12 text-center"*/}
      {/*  initial={{ opacity: 0, y: 20 }}*/}
      {/*  whileInView={{ opacity: 1, y: 0 }}*/}
      {/*  viewport={{ once: true, amount: 0.5 }}*/}
      {/*  transition={{ duration: 0.6, delay: 0.4 }}*/}
      {/*>*/}
      {/*  <a*/}
      {/*    href="/Workshops"*/}
      {/*    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"*/}
      {/*    aria-label="View all Moroccan workshops"*/}
      {/*  >*/}
      {/*    View All Workshops*/}
      {/*  </a>*/}
      {/*</motion.div>*/}
    </div>
  );
};