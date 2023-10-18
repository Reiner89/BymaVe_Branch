import React from "react";
// Componentes
import SlideUno from "./SlideUno";
import SlideDos from "./SlideDos";
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
    <div className="cont-section3 w-[95%] flex flex-col lg:pl-[33vh]">
      <div className="section3 flex flex-col p-[10px]">
        <div className="separador h-[3vh] w-full"></div>
        <div className="cont-txt flex flex-col min-w-[768px] w-[81.357%] p-[20px]">
          <div className="cont-titulo w-full">
            <h2 className="titulo text-white text-[50px] font-bold leading-[60px] tracking-[-0.02em] mb-[5px]">
              Esto se nos da muy bien
            </h2>
          </div>
          <div className="cont-parrafo w-full mt-[10px] text-white text-[25px] font-normal leading-[30px]">
            <p className="parrafo mr-[50px]">
              Nuestra Experiencia y Especialización Abordan Diversos Sectores
              Tecnológicos
            </p>
          </div>
        </div>
        <div className="cont-cuadros flex flex-row w-full">
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={Branding}
                  titulo="Branding"
                  parrafo="Tu historia, nuestra creatividad, marca tu diferencia"
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Branding"
                  txt="Nuestro servicio de branding se enfoca en crear una
                  identidad única y memorable para tu marca. Desarrollamos
                  estrategias visuales y de marca que reflejan tu propósito y
                  conectan con tu audiencia."
                ></SlideDos>
              </div>
            </div>
          </div>
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={RedesSociales}
                  titulo="Redes Sociales"
                  parrafo="Cultivamos relaciones, creamos conexiones en las redes."
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Redes Sociales"
                  txt="
              Optimizamos y gestionamos tus perfiles en redes sociales
              para impulsar la interacción y el compromiso con tus
              seguidores. Creamos contenido atractivo y estrategias
              efectivas de redes sociales.
            "
                ></SlideDos>
              </div>
            </div>
          </div>
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={DiseñoGrafico}
                  titulo="Diseño Gráfico"
                  parrafo="Gráficos que cuentan tu historia y captan la atención."
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Diseño Gráfico"
                  txt="
              Nuestro equipo de diseñadores gráficos crea elementos
              visuales atractivos y efectivos para tu marca. Desde
              logotipos y folletos hasta gráficos para redes sociales y
              diseño de sitio web.
            "
                ></SlideDos>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-cuadros flex flex-row w-full">
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={AplicacionesWeb}
                  titulo="Aplicaciones Web"
                  parrafo="
                  Desarrollo aplicaciones que se adapta a tus necesidades a
                  medida.
                "
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Aplicaciones Web"
                  txt="
                  Desarrollamos aplicaciones web personalizadas que satisfacen
                  tus necesidades específicas. Desde sitios web interactivos
                  hasta plataformas de comercio electrónico, te ayudamos a
                  aprovechar al máximo la presencia en línea.
                "
                ></SlideDos>
              </div>
            </div>
          </div>
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={WebWordpress}
                  titulo="Web en WordPress"
                  parrafo="Desarrollo WordPress nuestra herramienta, tu presencia en
                  línea."
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Web en WordPress"
                  txt="Creamos sitios web dinámicos y atractivos utilizando
                  WordPress, una plataforma de gestión de contenido líder en
                  la industria. Personalizamos temas y funcionalidades para
                  adaptarse a tus necesidades únicas."
                ></SlideDos>
              </div>
            </div>
          </div>
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={WebPersonalizado}
                  titulo="Web Personalizado"
                  parrafo="Desarrollo web personalizado que supera expectativas."
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Web Personalizado"
                  txt="Desarrollamos soluciones web totalmente personalizadas desde
                  cero, brindando un enfoque exclusivo a tus requerimientos.
                  Creamos aplicaciones web a medida para satisfacer tus
                  objetivos específicos."
                ></SlideDos>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-cuadros flex flex-row w-full">
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={GestionProcesos}
                  titulo="Gestion de Procesos"
                  parrafo="La gestión que te libera para enfocarte en lo importante."
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Gestion de Procesos"
                  txt="Optimizamos tus operaciones empresariales mediante la
                  automatización de procesos y la implementación de sistemas
                  de gestión eficientes. Mejoramos la productividad y
                  reducimos costos."
                ></SlideDos>
              </div>
            </div>
          </div>
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={SolCloud}
                  titulo="Soluciones Cloud"
                  parrafo="Soluciones en la nube que escalan y potencian tu empresa"
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Soluciones Cloud"
                  txt="Proporcionamos soluciones de almacenamiento y procesamiento
                  en la nube que permiten la escalabilidad y la flexibilidad
                  necesarias para el crecimiento de tu negocio."
                ></SlideDos>
              </div>
            </div>
          </div>
          <div className="swiper-container relative w-[33%] m-[10px] p-[10px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-uno relative flex flex-col bg-[#272727] rounded-[10px] cursor-pointer">
                <SlideUno
                  src={MantSop}
                  titulo="Mantenimiento y Soporte"
                  parrafo="Nos ocupamos para mantener tu presencia impecable."
                ></SlideUno>
              </div>
              <div className="swiper-slide slide-dos relative flex flex-col bg-[#022d5e] rounded-[10px] cursor-pointer">
                <SlideDos
                  titulo="Mantenimiento y Soporte"
                  txt="Ofrecemos servicios de mantenimiento continuo y soporte
                  técnico para garantizar que tus sistemas y aplicaciones
                  funcionen sin problemas. Estamos aquí para resolver
                  problemas y actualizaciones constantes."
                ></SlideDos>
              </div>
            </div>
          </div>
        </div>
        <div className="separador"></div>
      </div>
    </div>
  );
}

export default Section3;
