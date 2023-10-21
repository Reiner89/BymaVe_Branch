import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Blogs() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="tarjeta1 relative flex flex-wrap w-[300px] h-[300px]">
            <div className="cont-titulo relative flex items-center w-full bg-[#022d5e] text-center">
              <h2 className="titulo w-full text-white font-bold text-[35px] leading-7">
                Compromiso <br />{" "}
                <small className="text-white text-[25px] font-normal leading-7">
                  con tu Éxito
                </small>
              </h2>
            </div>
            <div className="cont-parrafo flex bg-[#f3f3f3]">
              <div className="parrafo p-5">
                <p className="txt w-full text-black leading-[1.65] m-[10px_auto]">
                  Trabajamos incansablemente para comunicar lo mejor de ti,
                  asegurando que cada estrategia y acción esté alineada con tus
                  objetivos y visión. Cuando eliges trabajar con nosotros,
                  eliges un equipo comprometido a llevar tu marca al siguiente
                  nivel.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tarjeta2 relative flex flex-wrap w-[300px] h-[300px]">
            <div className="cont-titulo relative flex items-center w-full bg-[#022d5e] text-center">
              <h2 className="titulo w-full text-white font-bold text-[35px] leading-7">
                Compromiso <br />{" "}
                <small className="text-white text-[25px] font-normal leading-7">
                  con tu Éxito
                </small>
              </h2>
            </div>
            <div className="cont-parrafo flex bg-[#f3f3f3]">
              <div className="parrafo p-5">
                <p className="txt w-full text-black leading-[1.65] m-[10px_auto]">
                  Trabajamos incansablemente para comunicar lo mejor de ti,
                  asegurando que cada estrategia y acción esté alineada con tus
                  objetivos y visión. Cuando eliges trabajar con nosotros,
                  eliges un equipo comprometido a llevar tu marca al siguiente
                  nivel.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tarjeta3 relative flex flex-wrap w-[300px] h-[300px]">
            <div className="cont-titulo relative flex items-center w-full bg-[#022d5e] text-center">
              <h2 className="titulo w-full text-white font-bold text-[35px] leading-7">
                Compromiso <br />{" "}
                <small className="text-white text-[25px] font-normal leading-7">
                  con tu Éxito
                </small>
              </h2>
            </div>
            <div className="cont-parrafo flex bg-[#f3f3f3]">
              <div className="parrafo p-5">
                <p className="txt w-full text-black leading-[1.65] m-[10px_auto]">
                  Trabajamos incansablemente para comunicar lo mejor de ti,
                  asegurando que cada estrategia y acción esté alineada con tus
                  objetivos y visión. Cuando eliges trabajar con nosotros,
                  eliges un equipo comprometido a llevar tu marca al siguiente
                  nivel.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
