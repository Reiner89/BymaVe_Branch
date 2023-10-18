import React from "react";
import ImagenCont2 from "../Static/cont_home/Industrias.webp";
import Porcent from "./Porcent";
import CompromisoImg from "../Static/icons_services/Compromiso.webp";
import GarantiaImg from "../Static/icons_services/Garantia.webp";
import ConfianzaImg from "../Static/icons_services/Confianza.webp";
import ExcelenciaImg from "../Static/icons_services/Excelencia.webp";

function Section2() {
  return (
    <div
      className="Section2 w-full relative"
      style={{ backgroundImage: `url(${ImagenCont2})` }}
    >
      <div className="fondo absolute w-full h-full bg-black opacity-50 z-10"></div>
      <div className="cont-section2 lg:pl-[33vh] flex flex-wrap content-start relative mr-auto ml-auto w-full z-20">
        <div className="vacio relative w-full h-[20vh]"></div>
        <div className="cont-txt w-full relative">
          <div className="txt mr-auto ml-auto flex flex-col lg:flex-row relative">
            <div className="vacio1 relative flex w-full max-lg:h-[3vh] lg:w-[37.2%] flex-wrap content-start"></div>
            <div className="txt2 relative flex w-full lg:w-[52.2%]">
              <div className="txt3 relative flex flex-wrap content-start w-full p-[10px]">
                <div className="cont-titulo w-full relative">
                  <h2 className="titulo relative text-white font-bold text-[44px] leading-[70px] tracking-[-0.02em]">
                    Estrategias Digitales para
                    <span>Tu Éxito Empresarial</span> de Vanguardia
                  </h2>
                </div>
                <div className="cont-boton w-full relative mt-[40px] mb-0 mr-0 ml-0 cursor-pointer">
                  <div className="boton max-h-[49px] max-w-[189px] text-center">
                    <p className="text-white bg-[#113853] px-[18px] py-[14px] rounded-[5px] font-semibold leading-[20px]">
                      Programar una Cita
                    </p>
                  </div>
                </div>
                <div className="vacio relative w-full h-[10vh]"></div>
              </div>
            </div>
            <div className="vacio2 relative flex content-start flex-wrap w-[10%]"></div>
          </div>
        </div>
        <div className="section2-cuadros w-full flex justify-center relative">
          <Porcent
            numero="100"
            texto="Compromiso"
            imagen={CompromisoImg}
            alt="Compromiso"
            color="#1d1b1c"
          ></Porcent>
          <Porcent
            numero="100"
            texto="Garantía"
            imagen={GarantiaImg}
            alt="Garantia"
            color="#113853"
            marginTop="25px"
            marginLeft="-50px"
          ></Porcent>
          <Porcent
            numero="100"
            texto="Confianza"
            imagen={ConfianzaImg}
            alt="Confianza"
            color="#1d1b1c"
            marginTop="50px"
            marginLeft="-50px"
          ></Porcent>
          <Porcent
            numero="100"
            texto="Excelencia"
            imagen={ExcelenciaImg}
            alt="Excelencia"
            color="#113853"
            marginTop="75px"
            marginLeft="-50px"
          ></Porcent>
        </div>
      </div>
    </div>
  );
}

export default Section2;
