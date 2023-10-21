import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube } from "swiper/modules";

export default function Cube({ icono, titulo, parrafo, parrafo2 }) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide1 flex flex-col w-full bg-[#272727] rounded-2xl p-[25px_15px] lg:h-[350px]">
            <div className="cont-img relative flex justify-center w-full p-[15px_0]">
              <img className="default max-h-[125px]" src={icono} alt="Icono" />
            </div>
            <div className="con-titulo relative w-full text-center mb-[15px]">
              <h2 className="titulo relative text-[30px] font-bold text-[#eaedec] lg:text-[25px]">
                {titulo}
              </h2>
            </div>
            <div className="cont-parrafo relative w-full text-center">
              <p className="parrafo text-[20px] text-[#eaedec] font-medium">
                {parrafo}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-dos h-[310px] relative flex flex-col w-full bg-[#022d5e] rounded-2xl p-[25px_15px] md:max-w-[932px] md:max-h-[280px] lg:max-h-full lg:max-w-full lg:w-full lg:h-[350px]">
            <div className="cont-titulo relative w-full text-center">
              <h2 className="titulo w-full text-[#eaedec] text-[30px] md:text-[40px] lg:text-[25px] font-bold">{titulo}</h2>
            </div>
            <div className="vacio hidden lg:hidden w-full xl:block xl:h-[15%]"></div>
            <div className="cont-parrafo2 relative w-full text-center">
              <p className="parrafo2 text-[20px] lg:p-0 md:p-12 md:text-[20px] text-[#eaedec] font-normal">{parrafo2}</p>
            </div>
            <div className="vacio hidden lg:hidden w-full xl:block"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
