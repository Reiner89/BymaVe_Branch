import React from "react";
import ElegirnosCuadros from "./ElegirnosCuadros";

function Elegirnos() {
  return (
    <>
      <div className="cont-blog w-full relative duration-700">
        <div className="blog flex relative duration-700 lg:absolute lg:top-[-240px] z-[1]">
          <ElegirnosCuadros
            fondo="#f3f3f3"
            color="#022D5E"
            titulo="Compromiso"
            subtitulo="con tu Éxito"
            parrafo="Trabajamos incansablemente para comunicar lo mejor de ti, asegurando que cada estrategia y acción esté alineada con tus objetivos y visión. Cuando eliges trabajar con nosotros, eliges un equipo comprometido a llevar tu marca al siguiente nivel."
          ></ElegirnosCuadros>
          <ElegirnosCuadros
            fondo="white"
            color="#1d1b1c"
            titulo="Tu Éxito es"
            subtitulo="Nuestro Objetivo"
            parrafo="Mantenemos una comunicación constante y colaborativa para garantizar que cada acción de marketing esté en perfecta sinergia con todas tus iniciativas de marca. Elegirnos significa contar con un equipo que no solo trabaja para ti, sino contigo."
          ></ElegirnosCuadros>
          <ElegirnosCuadros
            fondo="#f3f3f3"
            color="#1d1b1c"
            titulo="Construyendo"
            subtitulo="Amor por tu Marca"
            parrafo="Nuestro enfoque no se limita a atraer clientes, sino a deleitar a tu mercado. Sabemos que cuando tus prospectos y clientes te aman, te posicionas de manera inquebrantable. creamos experiencias memorables que generen lealtad y admiración."
          ></ElegirnosCuadros>
        </div>
      </div>
    </>
  );
}

export default Elegirnos;
