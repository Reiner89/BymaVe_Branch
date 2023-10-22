import BgVideo from "../Static/cont_home/Equipo.mp4";
import Square from "./Square";
import NavbarMenu from "./Navbar";
import NavbarMovil from "./NavbarMovil";

function Main() {
  return (
    <>
      <div className="fondo hidden lg:block">
        <video
          className="flex absolute w-full h-[100vh] max-w-full max-h-full object-cover"
          autoPlay
          muted
          preload="true"
          loop
          src={BgVideo}
        ></video>
        <div className="ele-menu md:h-screen md:fixed z-50">
          <NavbarMenu></NavbarMenu>
        </div>
        <div className="cont-responsive w-full block">
          <div className="cont-texto relative flex flex-col w-full h-[100vh] pl-[33vh] pr-0 py-0">
            <div className="relleno1 relative flex w-full h-[35vh]"></div>
            <div className="cont-titulo flex relative w-full h-[14vh]">
              <h1 className="titulo relative w-full text-white text-center lg:text-[70px] font-bold leading-none drop-shadow[0em_0.1em_0.1em_rgba(0, 0, 0, 0.4)]">
                ¡Somos Byma-ve Innovation!
              </h1>
            </div>
            <div className="cont-subtitulo flex relative w-full h-[12vh] lg:pt-16">
              <h2 className="subtitulo relative w-full text-white text-[60px] font-normal leading-[80px] tracking-tight text-center">
                Agencia de Desarrollo Digital
              </h2>
            </div>
            <div className="relleno2 flex relative w-full h-[25vh]"></div>
            <div className="cont-cuadros flex flex-row w-full h-[39vh]">
              <Square
                p="Digital Brillante"
                h2="Forjando la identidad del mañana"
                color="#1d1b1c"
                opacidad="90%"
              ></Square>
              <Square
                p="Web Maestra"
                h2="Desarrollo web que te coloca a la vanguardia"
                color="#222021"
                opacidad="80%"
              ></Square>
              <Square
                p="Nube Poderosa"
                h2="Libera el potencial de tu empresa en la nube"
                color="#022d5e"
                opacidad="70%"
              ></Square>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-responsive w-full relative lg:hidden">
        <NavbarMenu></NavbarMenu>
        <NavbarMovil></NavbarMovil>
        <div className="responsive relative flex flex-col p-[10px]lg:hidden">
          <div className="section1 relative w-full lg:hidden">
            <video
              className="video absolute w-full h-full object-cover"
              src={BgVideo}
              autoPlay
              muted
              preload="true"
              loop
            ></video>
            <div className="fondo w-full h-[210px]"></div>
            <div className="cont_titulo relative w-full text-center">
              <h1 className="titulo md:text-[70px] text-white font-bold leading-[1]">
                ¡Somos Byma-ve Innovation!
              </h1>
            </div>
            <div className="cont-subtitulo relative w-full text-center">
              <h2 className="subtitulo relative text-white md:text-[25px] font-normal leading-[80px]">
                Agencia de Desarrollo Digital
              </h2>
            </div>
            <div className="vacio w-full h-[14vh] lg:hidden"></div>
          </div>
          <div className="section2 lg:hidden">
            <div className="cont-cuadros flex flex-col w-full">
              <Square
                p="Digital Brillante"
                h2="Forjando la identidad del mañana"
                color="#1d1b1c"
                opacidad="90%"
              ></Square>
              <Square
                p="Web Maestra"
                h2="Desarrollo web que te coloca a la vanguardia"
                color="#222021"
                opacidad="80%"
              ></Square>
              <Square
                p="Nube Poderosa"
                h2="Libera el potencial de tu empresa en la nube"
                color="#022d5e"
                opacidad="70%"
              ></Square>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
