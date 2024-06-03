"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//make swiper
const Carousel = ({ images }: { images: string[] }) => {
  return (
    <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    grabCursor={true}
    loop={true}
    //pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`carousel-${index}`}
            style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;