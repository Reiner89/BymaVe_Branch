import React from "react";
import ImagenUno from "../Static/clientes/Comercial-Elias.webp";
import ImagenDos from "../Static/clientes/MR-Logistick.webp";
import ImagenTres from "../Static/clientes/Transportes-Morales.webp";
import ImagenCuatro from "../Static/clientes/Yelitze-Sanchez.webp";

function Section() {
  return (
    <div className="cont-section relative lg:pl-[33vh] bg-[#1d1b1c] z-10">
      <div className="section flex flex-col-reverse lg:flex lg:flex-row relative ml-auto mr-auto">
        <div className="cont-img-section w-full flex flex-wrap flex-col px-[3rem] py-0 lg:w-2/5">
          <div className="carrusel w-[300px] block justify-items-center m-auto">
            <div className="uno">
              <img src={ImagenUno} alt="Imagen Uno" />
            </div>
            <div className="uno">
              <img src={ImagenDos} alt="Imagen Dos" />
            </div>
            <div className="uno">
              <img src={ImagenTres} alt="Imagen Tres" />
            </div>
            <div className="uno">
              <img src={ImagenCuatro} alt="Imagen 4" />
            </div>
          </div>
        </div>
        <div className="cont-txt-section w-full lg:w-[51.646%] flex relative">
          <div className="txt-section relative flex flex-col">
            <div className="vacio1 h-[7vh]"></div>
            <div className="titulo max-lg:text-center w-full mt-0 ml-0 mb-[5px] mr-0">
              <h2 className="text-white text-[32px] leading-[35px] tracking-[-.02em] font-bold lg:leading-[65px] lg:tracking-tight lg:text-[60px] lg:font-bold">
                ¡Potencia tu éxito <br></br>
                Empresarial
              </h2>
            </div>
            <div className="vacio2 h-[4vh]"></div>
            <div className="parrafo w-full">
              <p className="w-full text-white block p-3 my-3 mx-3 text-lg lg:font-normal lg:text-[15px] lg:leading-relaxed">
                La tecnología avanza a pasos agigantados, y nosotros estamos a
                la vanguardia de las últimas tendencias y herramientas.
                Mantenerse actualizado y competitivo es esencial en este entorno
                en constante evolución. Permítenos ser tu socio tecnológico de
                confianza, guiándote en el emocionante viaje hacia el éxito
                digital.
              </p>
            </div>
            <div className="vacio3 max-lg:w-full max-lg:h-[15%]"></div>
          </div>
        </div>
        <div className="cont-fondo-section w-[15%]"></div>
      </div>
    </div>
  );
}

export default Section;
