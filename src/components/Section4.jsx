import React from "react";
import ImagenCont4 from "../Static/cont_home/Team.webp";

function Section4() {
  return (
    <>
      <div
        className="cont-section duration-700 relative w-full bg-no-repeat bg-cover bg-scroll bg-center lg:p-[0_0_0_35vh]"
        style={{ backgroundImage: `url(${ImagenCont4})` }}
      >
        <div className="fondo duration-700 absolute bg-black h-full w-full opacity-50 top-0 left-0"></div>
        <div className="section duration-700 relative flex items-end w-full h-full">
          <div className="nosotros duration-700 relative flex flex-wrap items-end content-start w-full p-[0_10px]">
            <div className="vacio1 w-full h-[26vh]"></div>
            <div className="cont-titulo duration-700 relative flex w-full">
              <div className="elegirnos duration-700 relative flex flex-wrap content-start w-[89%]">
                <h2 className="titulo duration-700 text-white text-[60px] font-bold leading-[60px] tracking-[-0.02em]">
                  ¿Por qué Elegirnos?
                </h2>
              </div>
              <div className="vacio relative w-[10%]"></div>
            </div>
            <div className="vacio2 duration-700 relative w-full h-[30vh]"></div>
            <div className="vacio3 duration-700 relative w-full h-[17vh]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
