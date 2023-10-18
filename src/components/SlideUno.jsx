import React from "react";

function SlideUno({ src, titulo, parrafo }) {
  return (
    <>
      <div className="imagen relative flex flex-wrap w-full justify-center items-center content-center p-[20px_0]">
        <img src={src} alt="" className="imagen h-[65px] max-h-[65px]" />
      </div>
      <div className="cont-titulo relative flex m-[10px] p-[10px]">
        <h1 className="titulo relative w-full text-center text-white text-[30px] tracking-tight leading-[32px] font-semibold">
          {titulo}
        </h1>
      </div>
      <div className="cont-parrafo relative flex justify-center m-[10px] p-[20px_0]">
        <p className="parrafo w-full text-white text-center text-[20px] leading-[32px] tracking-tight">
          {parrafo}
        </p>
      </div>
    </>
  );
}

export default SlideUno;
