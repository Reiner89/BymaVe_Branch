import React, { useState } from "react";

function Square({ p, h2, color, opacidad }) {
  const [MostrarTitulo, setMostrarTitulo] = useState(false);

  const [estilosP, setEstilosP] = useState({
    position: "relative",
    width: "100%",
    fontFamily: "Segoe UI Symbol",
    fontSize: "27px",
    fontWeight: "700",
    color: "white",
    lineHeight: "1.1",
    letterSpacing: "-.01em",
    textTransform: "capitalize",
    padding: "30px",
    marginTop: "-120px",
  });

  const [estilosH2, setEstilosH2] = useState({
    position: "relative",
    width: "100%",
    fontFamily: "Segoe UI Symbol",
    fontSize: ".9em",
    fontWeight: "600",
    color: "#82838C",
    textTransform: "uppercase",
    margin: "15px 0",
    lineHeight: "1.65",
  });

  const handleMouseEnter = () => {
    setMostrarTitulo(true);
    setEstilosP({
      position: "relative",
      width: "100%",
      fontFamily: "Segoe UI Symbol",
      fontSize: ".9em",
      fontWeight: "600",
      color: "#82838C",
      textTransform: "uppercase",
      margin: "15px 0",
      lineHeight: "1.65",
      padding: "0 0 0 30px",
    });
    setEstilosH2({
      position: "relative",
      width: "100%",
      fontFamily: "Segoe UI Symbol",
      fontSize: "27px",
      fontWeight: "700",
      color: "white",
      lineHeight: "1.1",
      letterSpacing: "-.01em",
      textTransform: "capitalize",
      padding: "0 0 30px 30px",
    });
  };

  const handleMouseLeave = () => {
    setMostrarTitulo(false);
    setEstilosP({
      position: "relative",
      width: "100%",
      fontFamily: "Segoe UI Symbol",
      fontSize: "27px",
      fontWeight: "700",
      color: "white",
      lineHeight: "1.1",
      letterSpacing: "-.01em",
      textTransform: "capitalize",
      padding: "30px",
      marginTop: "-120px",
    });
    setEstilosH2({
      display: "none",
    });
  };

  return (
    <div
      className="cuadro1 cuadro w-full lg:w-[33%] relative flex flex-wrap content-center items-center p-[15px] cursor-pointer transition-all duration-700 lg:translate-y-[130px] lg:hover:translate-y-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ background: color, opacity: opacidad }}
        className="capa absolute w-full h-full m-[-15px] z-0"
      ></div>
      <p style={estilosP} className="subtitulo max-lg:mt-0 lg:hover:mt-[0px] text-center lg:text-left">
        {p}
      </p>
      {MostrarTitulo && (
        <h2 style={estilosH2} className="titulo text-center lg:text-left">
          {h2}
        </h2>
      )}
    </div>
  );
}

export default Square;
