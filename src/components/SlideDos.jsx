import React from "react";

function SlideDos({ titulo, txt }) {
  return (
    <>
      <div className="cont-titulo relativem flex w-full p-[0_10px] m-[15px_0]">
        <h2 className="titulo w-full text-white text-[30px] text-center font-semibold">{titulo}</h2>
      </div>
      <div className="cont-txt relative flex w-full">
        <p className="txt relative flex w-full text-center text-[#eaedec] text-[16px] font-normal p-[20px]">{txt}</p>
      </div>
    </>
  );
}

export default SlideDos;
