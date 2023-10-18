import BgVideo from "../Static/cont_home/Equipo.mp4";
import LogoEmpresa from "../Static/cont_home/logo_byma-ve_Secundario.webp";
import ImgMenu from "../Static/cont_home/hamburguer.webp";
import Square from "./Square";

export function Main() {
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
        <div className="ele-menu h-screen fixed z-50">
          <div className="menu h-full flex flex-col justify-between pl-7 pb-7">
            <div className="cont-logo flex items-center justify-start w-full h-[14vh]">
              <div className="logo max-h-[66px]">
                <p>
                  <img
                    className="imagen max-h-[66px] h-auto max-w-[100%] cursor-pointer"
                    alt="Byma-Ve"
                    src={LogoEmpresa}
                  ></img>
                </p>
              </div>
            </div>
            <div className="cont-servicios flex flex-col w-[85%]">
              <p className="text-white px-[0] py-[15px] text-[18px] font-bold leading-[1.3] cursor-pointer">
                Servicios
              </p>
              <p className="text-white px-[0] py-[15px] text-[18px] font-bold leading-[1.3] cursor-pointer">
                ¿Quienes Somos?
              </p>
              <p className="text-white px-[0] py-[15px] text-[18px] font-bold leading-[1.3] cursor-pointer">
                Contáctanos
              </p>
            </div>
            <div className="programa flex flex-wrap items-center content-center w-[88%] bg-[#eaedec] border-[#eaedec] border-solid border-2 rounded cursor-pointer transition-all hover:bg-[#113853] duration-500">
              <p className="cita text-black font-bold text-[16px] px-[7px] py-[10px] w-full h-full hover:text-[#eaedec] transition-all duration-500">
                Programar una Cita
              </p>
            </div>
          </div>
        </div>
        <div className="cont-responsive w-full block">
          <div className="cont-texto relative flex flex-col w-full h-[100vh] pl-[33vh] pr-0 py-0">
            <div className="relleno1 relative flex w-full h-[35vh]"></div>
            <div className="cont-titulo flex relative w-full h-[14vh]">
              <h1 className="titulo relative w-full text-white text-center text-[9.3vh] font-bold leading-none drop-shadow[0em_0.1em_0.1em_rgba(0, 0, 0, 0.4)]">
                ¡Somos Byma-ve Innovation!
              </h1>
            </div>
            <div className="cont-subtitulo flex relative w-full h-[12vh]">
              <h2 className="subtitulo relative w-full text-white text-[7.2vh] font-normal leading-[80px] tracking-tight text-center">
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
      <div className="cont-menu absolute w-full align-middle left-0 right-0 z-50 lg:hidden">
        <div className="menu w-full flex justify-between p-[20px] bg-black">
          <div className="cont-menu w-[10%]">
            <div className="menu">
              <img className="img max-h-[46px]" src={ImgMenu} alt="Menu" />
            </div>
          </div>
          <div className="con-logo w-[33%]">
            <div className="logo">
              <img className="img max-h-[46px]" src={LogoEmpresa} alt="Logo" />
            </div>
          </div>
          <div className="cont-boton w-[33%] relative flex items-center">
            <div className="boton w-full relative bg-white rounded-[5px] p-[7px_15px] text-center">
              <p className="contac relative inline-block text-[0.76rem] font-semibold text-black leading-[20px]">
                Programar un Cita
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-responsive w-full relative lg:hidden">
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
            <div className="fondo w-full h-[253px]"></div>
            <div className="cont_titulo relative w-full text-center">
              <h1 className="titulo text-[38px] text-white font-bold leading-[1]">
                ¡Somos Byma-ve Innovation!
              </h1>
            </div>
            <div className="cont-subtitulo relative w-full text-center">
              <h2 className="subtitulo relative text-white text-[22px] font-normal leading-[80px]">
                Agencia de Desarrollo Digital
              </h2>
            </div>
            <div className="vacio w-full h-[10vh] lg:hidden"></div>
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
