import React from "react";
import Carrusel from "./Carrusel";

function Section() {
  return (
    <div className="cont-section relative xl:pl-[33vh] lg:pl-[17vh] bg-[#1d1b1c] z-10">
      <div className="section flex flex-col-reverse lg:flex lg:flex-row relative ml-auto mr-auto mb-10 lg:mb-0">
        <div className="cont-carrusel w-full flex p-0 md:w-full justify-center md:items-center items-center lg:w-[40%]">
          <Carrusel></Carrusel>
        </div>
        <div className="cont-txt-section w-full lg:w-[50%] flex relative">
          <div className="txt-section relative flex flex-col items-center">
            <div className="vacio1 h-[7vh] w-full"></div>
            <div className="titulo max-lg:text-center w-full mt-0 ml-0 mb-[5px] mr-0">
              <h2 className="text-white md:text-[65px] leading-[70px] tracking-[-.02em] font-bold lg:leading-[65px] lg:tracking-tight lg:text-[60px] lg:font-bold">
                ¡Potencia tu éxito <br></br>
                Empresarial!
              </h2>
            </div>
            <div className="vacio2 h-[4vh] w-full"></div>
            <div className="parrafo w-full flex">
              <p className="w-full text-white text-justify block md:text-[20px] lg:font-normal lg:text-[15px] lg:leading-relaxed">
                La tecnología avanza a pasos agigantados, y nosotros estamos a
                la vanguardia de las últimas tendencias y herramientas.
                Mantenerse actualizado y competitivo es esencial en este entorno
                en constante evolución. Permítenos ser tu socio tecnológico de
                confianza, guiándote en el emocionante viaje hacia el éxito
                digital.
              </p>
            </div>
            <div className="vacio3 h-[7vh] w-full"></div>
          </div>
        </div>
        <div className="vacio hidden lg:block lg:w-[10%]"></div>
      </div>
    </div>
  );
}

export default Section;
