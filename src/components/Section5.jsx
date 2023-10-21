import React from "react";
import Blogs from './Blogs'

function Section5() {
  return (
    <>
      <div className="cont-section5 relative flex flex-col w-full m-[0_auto] pl-[35vh]">
        <div className="cont-blog">
          <div className="blog">
            <Blogs></Blogs>
          </div>
        </div>
        <div className="cont-presentacion">
          <div className="presentacion relative flex m-[0_auto]">
            <div className="cont-pdf relative flex w-full">
              <div className="pdf relative flex flex-wrap items-end content-end w-full p-[0_3rem] border-[#022d5e] border-2 rounded-[5px]">
                <div className="vacio1 relative w-full h-[10vh] mt-[90px]"></div>
                <div className="cont-titulo-parrafo relative w-full">
                  <div className="titulo-parrafo text-left mb-5">
                    <h2 className="titulo text-white text-[60px] font-bold leading-[1.05] tracking-[-0.02em]">Nuestra Presentación</h2>
                    <p className="parrafo block w-[75%] font-semibold text-[#82838c] text-[1em] mt-4">
                      En Byma-ve Innovation te permite ver proyectos que hemos
                      realizado y más información, descárgatelo y échalo un
                      vistazo.
                    </p>
                  </div>
                </div>
                <div className="vacio2 relative w-full h-[3vh]"></div>
                <div className="cont-boton relative w-full text-left">
                  <p className="boton duration-700 relative inline-block text-[0.96rem] font-semibold text-white text-center bg-[#022d5e] border-2 border-[#0e6db0] p-[7px_15px] cursor-pointer align-middle rounded-md hover:text-black hover:bg-white">
                    <span className="descargar">Descargar PDF</span>
                  </p>
                </div>
                <div className="vacio3 relative w-full h-[6vh]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-contactanos"></div>
      </div>
    </>
  );
}

export default Section5;
