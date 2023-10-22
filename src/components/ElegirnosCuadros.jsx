import React from "react";

function ElegirnosCuadros({ titulo, subtitulo, parrafo, color, fondo }) {
  return (
    <>
      <div className="tarjetas relative flex flex-col duration-700 w-[30%]">
        <div className="cont-titulo w-full relative duration-700">
          <h2
            style={{ background: color }}
            className="titulo text-white text-[35px] font-bold leading-[28px] p-[15px_20px]"
          >
            {titulo}
            <br />
            <small className="subtitulo text-[25px] font-normal leading-[28px]">
              {subtitulo}
            </small>
          </h2>
        </div>
        <div
          className="cont-parrafo w-full relative flex items-center duration-700 min-h-[250px]"
          style={{ background: fondo }}
        >
          <div className="parrafo">
            <p className="txt duration-700 text-black p-[20px] leading-[1.65]">
              {parrafo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElegirnosCuadros;
