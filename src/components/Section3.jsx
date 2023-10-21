import React from "react";
// Componente Cubo
import Cube from "./Cube";
// Imagenes
import Branding from "../Static/icons_services/branding.webp";
import RedesSociales from "../Static/icons_services/megafono.webp";
import DiseñoGrafico from "../Static/icons_services/diseño_grafico.webp";
import AplicacionesWeb from "../Static/icons_services/aplicaciones_web.webp";
import WebWordpress from "../Static/icons_services/web_wordpress.webp";
import WebPersonalizado from "../Static/icons_services/web_personalizado.webp";
import GestionProcesos from "../Static/icons_services/gestion_procesos.webp";
import SolCloud from "../Static/icons_services/soluciones_cloud.webp";
import MantSop from "../Static/icons_services/mantenimiento_soporte.webp";

function Section3() {
  return (
    <div className="cont-section3 w-full flex flex-col lg:pl-[35vh]">
      <div className="section3 w-full flex flex-col p-[10px]">
        <div className="separador h-[3vh] w-full"></div>
        <div className="cont-txt flex flex-col p-[20px]">
          <div className="cont-titulo w-full">
            <h2 className="titulo text-white text-[45px] lg:text-[50px] font-bold leading-[60px] tracking-[-0.02em] mb-[5px] text-center">
              Esto se nos da muy bien
            </h2>
          </div>
          <div className="cont-parrafo w-full mt-[10px] text-white lg:text-[25px] font-normal leading-[30px]">
            <p className="parrafo m-0 text-[20px] text-center">
              Nuestra Experiencia y Especialización Abordan Diversos Sectores Tecnológicos
            </p>
          </div>
        </div>
        <div className="cont-cuadros flex flex-col lg:flex-row w-full">
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={Branding}
              titulo="Branding"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={RedesSociales}
              titulo="Redes Sociales"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={DiseñoGrafico}
              titulo="Diseño Grafico"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
        </div>
        <div className="cont-cuadros flex flex-col lg:flex-row w-full">
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={AplicacionesWeb}
              titulo="Aplicaciones Web"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={WebWordpress}
              titulo="WebWord Press"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={WebPersonalizado}
              titulo="Web Personalizado"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
        </div>
        <div className="cont-cuadros flex flex-col lg:flex-row w-full">
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={GestionProcesos}
              titulo="Gestion de Procesos"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={SolCloud}
              titulo="Soluciones Cloud"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
          <div className="swiper-container relative max-w-full lg:w-[30%] m-[10px] p-[10px]">
            <Cube
              icono={MantSop}
              titulo="Mantenimiento y Soporte"
              parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
              parrafo2="Nuestro servicio de branding se enfoca en crear una identidad única y memorable para tu marca. Desarrollamos estrategias visuales y de marca que reflejan tu propósito y conectan con tu audiencia."
            ></Cube>
          </div>
        </div>
        <div className="separador"></div>
      </div>
    </div>
  );
}

export default Section3;
