import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Importamos las imagenes del carrusel
import Cliente1 from "../Static/clientes/Transportes-Morales.webp";
import Cliente3 from "../Static/clientes/Comercial-Elias.webp";
import Cliente4 from "../Static/clientes/MR-Logistick.webp";
import Cliente2 from "../Static/clientes/Yelitze-Sanchez-blanco.webp";

export default function Carrusel_Clientes() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[300px] max-h-[210px]"
      >
        <SwiperSlide>
          <img src={Cliente1} alt="Cliente1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cliente2} alt="Cliente2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cliente3} alt="Cliente3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cliente4} alt="Cliente4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
