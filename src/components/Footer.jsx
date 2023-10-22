import React from "react";
import Logo from "../Static/cont_home/logo_byma-ve_Secundario.webp";

function Footer() {
  return (
    <>
      <footer className="cont-footer flex flex-col relative lg:pl-[35vh]">
        <div className="footer relative w-full m-[0_auto] p-[0_29px]">
          <div className="footer-columns relative flex flex-row p-[57px_0] m-[0_-20px]">
            <div className="columnF1 relative w-[25%] p-[0_20px] box-border">
              <a
                className="cont-img w-full inline-block"
                href="https://byma-ve.com/"
              >
                <img
                  className="logo block h-auto max-h-[3rem] max-w-full cursor-pointer"
                  src={Logo}
                  alt="Logo de la empresa"
                />
              </a>
              <p className="w-full p-[22px_0_5px_0] text-[#ffffff7f]">
                <a
                  className="text-[#ffffff7f] text-[16px] font-semibold leading-[1.65]"
                  href="https://www.facebook.com/people/Byma-ve/100086756080019/?mibextid=nW3QTL"
                >
                  Fb.
                </a>{" "}
                /
                <a
                  className="text-[#ffffff7f] text-[16px] font-semibold leading-[1.65]"
                  href="https://www.instagram.com/bymave_innovation/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                >
                  Ig.
                </a>
              </p>
              <div className="cont-comu relative p-[22px_0_5px_0]">
                <div className="comu relative flex flex-col mb-[1.75em]">
                  <p className="txt w-full text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                    Comunícate
                  </p>
                  <p className="w-full text-[#ffffff7f] text-[16px] font-bold leading-[1.65]">
                    Celular:{" "}
                    <a
                      className="text-[#ffffff7f] font-normal"
                      href="https://wa.me/51919283849"
                    >
                      +51 919 283 849
                    </a>
                  </p>
                  <p className="w-full text-[#ffffff7f] text-[16px] font-bold leading-[1.65]">
                    Email:{" "}
                    <a
                      className="text-[#ffffff7f] font-normal"
                      href="mailto:equipo@byma-ve.com"
                    >
                      equipo@byma-ve.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="columnF2 relative w-[25%] p-[0_20px] box-border">
              <h3 className="relative w-full text-[16px] text-white m-[0_0_20px] font-semibold leading-[0]">
                Somos Branch
              </h3>
              <p className="relative w-full text-[#ffffff7f] text-[17px] font-normal leading-[1.65]">
                Agencia de Marketing Digital Inbound que desarrollamos
                estrategias de Publicidad online, SEO, SEM y Comunicación en la
                Web orientada a la adquisición y conversión de leads.
              </p>
            </div>
            <div className="columnF3 relative w-[25%] p-[0_20px] box-border">
              <h3 className="relative w-full text-[16px] text-white m-[0_0_20px] font-semibold leading-[0]">
                Servicios
              </h3>
              <ul className="relative ml-0 box-border">
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Inbound Marketing
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Posicionamiento en buscadores
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Gestión de comunidades digitales
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  List building y adquisición de prospectos
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Adquisición y conversión de clientes
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Branding estratégico y posicionamiento de marca
                </li>
              </ul>
            </div>
            <div className="columnF4 relative w-[25%] p-[0_20px] box-border">
              <ul>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Optimización de funnels de conversión
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Analítica y Data Science
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Desarrollo
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Diseño web
                </li>
                <li className="p-[5px_0] list-[circle] list-inside text-[#ffffff7f] text-[16px] font-normal leading-[1.65]">
                  Desarrollo de aplicaciones
                </li>
              </ul>
              <h3 className="text-[#ffffff7f] leading-[1.65] pt-[22px]">
                Suscríbete a nuestro blog
              </h3>
              <form className="FForm">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className="relative w-full m-[10px_0] text-[#ffffff7f] border-[1px_solid_transparent] rounded-[5px] p-[14px_15px] leading-[1.3] text-[20px] font-normal bg-[#ffffff05]"
                />
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Correo"
                  required
                  className="relative w-full m-[10px_0] text-[#ffffff7f] border-[1px_solid_transparent] rounded-[5px] p-[14px_15px] leading-[1.3] text-[20px] font-normal bg-[#ffffff05]"
                />
                <br />
                <button
                  type="submit"
                  className="btn inline-block relative w-max m-[10px_0_0_0] p-[15px_18px] rounded-[5px] text-[18px] font-semibold align-middle text-center min-h-[20px] leading-[20px] cursor-pointer border-[2px] border-[#113853] bg-[#113853] text-white hover:bg-transparent hover:border-[2px_solid] hover:border-[#eaedec]"
                >
                  Suscríbete
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cont-f2 p-[0_29px]">
          <div className="f2 relative w-full m-[0_auto] border-t-2 border-t-[#888888] p-[22px_0] min-h-[1px]">
            <p className="f-text text-[#ffffff7f] text-[.94rem] text-center font-normal leading-[1.65]">
              © 2022 Byma-ve Innovation - Todos los Derechos Reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
