import React from "react";

function Porcent({
  numero,
  texto,
  imagen,
  alt,
  color,
  marginTop = 0,
  marginLeft = 0,
}) {
  return (
    <div
      style={{
        background: color,
        marginTop: marginTop,
        marginLeft: marginLeft,
      }}
      className="cont-cuadros relative flex w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] rounded-[25px] border-[2px]"
    >
      <div className="cuadros relative flex flex-wrap content-start p-[0_16px] md:p-[0_32px] lg:p-[0_48px] w-full">
        <div className="vacio relative w-full h-[5vh]"></div>
        <div className="cont-txt">
          <img
            className="mb-[10px] ml-[15px] max-h-[50px]"
            src={imagen}
            alt={alt}
          />
          <div className="text flex relative w-full">
            <h2 className="txt text-white relative font-bold text-[40px]">
              {numero}
            </h2>
            <span className="porc text-white text-[35px] font-bold">%</span>
          </div>
          <p className="txt text-white my-[5px] font-semibold text-[1.01em] leading-[1.3] tracking-normal">
            {texto}
          </p>
        </div>
        <div className="vacio relative w-full h-[5vh]"></div>
      </div>
    </div>
  );
}

export default Porcent;
