import React from "react";
import Elegirnos from "./Elegirnos";
import Presentacion from "./Presentacion";
import Contactanos from "./Contactanos";

function Section5() {
  return (
    <>
      <div className="cont-section5 relative flex flex-col w-full m-[0_auto] lg:pl-[35vh]">
        <Elegirnos></Elegirnos>
        <Presentacion></Presentacion>
        <Contactanos></Contactanos>
      </div>
    </>
  );
}

export default Section5;
